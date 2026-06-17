import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "../i18n/ui";

export type Post = CollectionEntry<"blog">;

const WPM = 200;
export const readingTime = (body = "") =>
  Math.max(1, Math.round((body.match(/\S+/g)?.length ?? 0) / WPM));

const visible = (p: Post) => (import.meta.env.PROD ? !p.data.draft : true);

export const postHref = (p: Post) =>
  (p.data.lang === "fr" ? "/blog/" : "/en/blog/") + p.data.slug + "/";

/** Posts for a language, drafts excluded in prod, newest first. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const all = await getCollection("blog");
  return all
    .filter((p) => p.data.lang === lang && visible(p))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Mirror URL in the other language if a translation exists, else null. */
export async function translationHref(
  slug: string,
  otherLang: Lang,
): Promise<string | null> {
  const all = await getCollection("blog");
  const match = all.find(
    (p) => p.data.slug === slug && p.data.lang === otherLang && visible(p),
  );
  return match ? postHref(match) : null;
}
