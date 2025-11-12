import postsData from "./posts.json";
import redis from "./redis";
import commaNumber from "comma-number";

export type Post = {
  id: string;
  date: string;
  volume: number;
  title: string;
  thumbnail?: string;
  views: number;
  viewsFormatted: string;
};

// shape of the HSET in redis
type Views = {
  [key: string]: string;
};

export const getPosts = async (volume?: number) => {
  const allViews: null | Views = await redis.hgetall("views");
  const posts = postsData.posts
    .filter((post) => volume == undefined || post.volume == volume)
    .map((post): Post => {
      const views = Number(allViews?.[post.id] ?? 0);
      return {
        ...post,
        views,
        viewsFormatted: commaNumber(views)
      };
    });
  return posts;
};
