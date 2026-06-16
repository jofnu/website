import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts, postHref } from "../../lib/posts";
import { ui } from "../../i18n/ui";

export async function GET(context: APIContext) {
  const posts = await getPosts("en");
  return rss({
    title: ui.en.meta.title,
    description: ui.en.meta.description,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: postHref(p),
    })),
  });
}
