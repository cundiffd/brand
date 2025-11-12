// Copyright © Spatial Corporation. All rights reserved.

import { FC, useMemo } from "react";

import { Image } from "../image";
import { Link } from "../link";
import { Text } from "../text";
import { View } from "../view";

import postData from "@dakarai/app/blog/posts.json";
import { Container } from "../container";

export const Thoughts: FC = () => {
  const thoughts = useMemo(() => {
    const posts: any[] = postData.posts;
    return posts.slice(0, 3); // newest first
  }, []);

  return (
    <Container className="w-full!" justify="center" gap={64} wrap>
      {thoughts.map((post) => (
        <Link key={post.id} href={`/blog/post/${post.id}`}>
          <Container className="md:w-lg!" direction="column" gap={32}>
            <Image src={post.thumbnail || "/thumbnail.jpg"} alt={post.title} className="object-cover aspect-square" />
            <Text className="text-xl font-bold">{post.title}</Text>
          </Container>
        </Link>
      ))}
    </Container>
  );
};
