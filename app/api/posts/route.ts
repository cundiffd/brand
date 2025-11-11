import { NextRequest, NextResponse } from "next/server";
import { getPosts } from "../../blog/get-posts";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const volume = url.searchParams.get("volume") ?? null;

  return NextResponse.json(await getPosts(Number(volume)));
}
