// Copyright © Spatial. All rights reserved.

import { getPosts } from "@dakarai/app/blog/get-posts";
import { Posts } from "./posts";

export default async function VolumePage({ params }: { params: Promise<{ volume: string }> }) {
  const { volume } = await params;
  const posts = await getPosts(Number(volume));

  return <Posts volume={volume} posts={posts} />;
}
