"use client";

import { useMemo, useState } from "react";
import { Suspense } from "react";
import useSWR from "swr";
import { Post } from "../../get-posts";
import { Link } from "@dakarai/components/link";

type SortSetting = ["date" | "views", "desc" | "asc"];

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Posts({ volume, posts: initialPosts }) {
  const [sort, setSort] = useState<SortSetting>(["date", "desc"]);
  const { data } = useSWR(`/api/posts?volume=${volume}`, fetcher, {
    fallbackData: initialPosts,
    refreshInterval: 5000
  });

  function sortDate() {
    setSort((sort) => ["date", sort[0] !== "date" || sort[1] === "asc" ? "desc" : "asc"]);
  }

  function sortViews() {
    setSort((sort) => [
      sort[0] === "views" && sort[1] === "asc" ? "date" : "views",
      sort[0] !== "views" ? "desc" : sort[1] === "asc" ? "desc" : "asc"
    ]);
  }

  const posts = Array.isArray(data) ? data : initialPosts;

  return (
    <Suspense fallback={null}>
      <main className="max-w-2xl font-mono m-auto mb-10 text-sm">
        <header className="px-4 text-gray-500 dark:text-gray-600 flex items-center text-xs">
          <button
            onClick={sortDate}
            className={`w-12 h-9 text-left  ${sort[0] === "date" && sort[1] !== "desc" ? "text-gray-700 dark:text-gray-400" : ""}`}
          >
            date
            {sort[0] === "date" && sort[1] === "asc" && "↑"}
          </button>
          <span className="grow pl-2">title</span>
        </header>
        <List posts={posts} sort={sort} />
      </main>
    </Suspense>
  );
}

function List({ posts, sort }) {
  const postsArray = Array.isArray(posts) ? posts : [];

  const sortedPosts = useMemo(() => {
    const [sortKey, sortDirection] = sort;
    return [...postsArray].sort((a, b) => {
      if (sortKey === "date") {
        return sortDirection === "desc"
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        return sortDirection === "desc" ? b.views - a.views : a.views - b.views;
      }
    });
  }, [postsArray, sort]);

  return (
    <ul className="rounded-xl overflow-hidden border border-gray-200 dark:border-[#313131]">
      {sortedPosts.map((post: Post, i: number) => {
        const year = getYear(post.date);
        const firstOfYear = !sortedPosts[i - 1] || getYear(sortedPosts[i - 1].date) !== year;
        const lastOfYear = !sortedPosts[i + 1] || getYear(sortedPosts[i + 1].date) !== year;

        return (
          <li key={post.id}>
            <Link href={`/blog/post/${post.id}`}>
              <span
                className={`flex px-4 transition-[background-color] !border-t-0 hover:bg-gray-100 dark:hover:bg-[#0A0A0A] active:bg-gray-200 dark:active:bg-[#1A1A1A] border-y border-gray-200 dark:border-[#313131]
                ${lastOfYear ? "border-b-0" : ""}
              `}
              >
                <span className={`py-3 flex grow items-center ${!firstOfYear ? "ml-14" : ""}`}>
                  {firstOfYear && <span className="w-14 inline-block self-start shrink-0 text-gray-500 dark:text-gray-500">{year}</span>}

                  <span className="grow dark:text-gray-100">{post.title}</span>
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function getYear(date: string) {
  return new Date(date).getFullYear();
}
