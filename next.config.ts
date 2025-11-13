// Copyright © Spatial Corporation. All rights reserved.

const withMDX = require("@next/mdx")();

import type { NextConfig } from "next";

const nextConfig: NextConfig = withMDX({
  basePath: process.env.NEXT_PUBLIC_BASE_URL,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: false,
  experimental: {
    mdxRs: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "abs.twimg.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        port: "",
        pathname: "/**"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/:year(\\d{4})/:id",
        destination: "/blog/post/:id",
        permanent: true
      }
    ];
  }
});

export default nextConfig;
