import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    sitemap: process.env.NEXT_PUBLIC_URL + "/sitemap.xml",
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
