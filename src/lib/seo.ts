export const siteUrl = "https://rodiwala.lovable.app";
export const siteName = "Rodiwala";

export function pageUrl(path: string) {
  return `${siteUrl}${path === "/" ? "" : path}`;
}

export function seoHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = pageUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: siteName },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: siteName },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
