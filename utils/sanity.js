import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

/* =========================
   SANITY CLIENT
========================= */
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",

  // REQUIRED for Preview / Presentation
  useCdn: false,

  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

/* =========================
   IMAGE URL BUILDER
========================= */
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return null;

  try {
    if (typeof source === "string" && source.startsWith("http")) {
      return { url: () => source };
    }

    if (source?.asset?._ref || source?._ref) {
      return builder.image(source);
    }

    return null;
  } catch (error) {
    console.error("urlFor error:", error);
    return null;
  }
}

export function getImageUrl(image, fallback = null) {
  if (!image) return fallback;
  if (typeof image === "string") return image;
  if (image?.asset?.url) return image.asset.url;

  const img = urlFor(image);
  return img?.url() || fallback;
}

/* =========================
   DATE FORMATTER
========================= */
export function formatDate(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* =========================
   FETCH ALL POSTS
========================= */
export async function getAllPosts({ preview = false } = {}) {
  try {
    const posts = await client.fetch(
      `
      *[_type == "post" && defined(slug.current)]
      | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        mainImage {
          asset->{
            _id,
            _ref,
            url,
            metadata { dimensions }
          },
          alt
        },
        "author": author->{
          name,
          image {
            asset->{ _ref, url }
          },
          bio
        },
        "categories": categories[]->{
          title,
          color
        }
      }
      `,
      {},
      {
        perspective: preview ? "previewDrafts" : "published",
        next: { revalidate: preview ? 0 : 60 },
      }
    );

    return posts || [];
  } catch (error) {
    console.error("❌ Error fetching all posts:", error);
    return [];
  }
}

/* =========================
   FETCH SINGLE POST BY SLUG
========================= */
export async function getPostBySlug(slug) {
  if (!slug) return null;

  try {
    const post = await client.fetch(
      `
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        body[] {
          ...,
          _type == "image" => {
            ...,
            asset->{ _id, _ref, url }
          }
        },
        mainImage {
          asset->{
            _id,
            _ref,
            url,
            metadata { dimensions }
          },
          alt
        },
        "author": author->{
          name,
          bio,
          image {
            asset->{ _ref, url }
          }
        },
        "categories": categories[]->{
          title,
          color
        }
      }
      `,
      { slug },
      { next: { revalidate: 60 } }
    );

    return post || null;
  } catch (error) {
    console.error("❌ Error fetching post:", error);
    return null;
  }
}

/* =========================
   FETCH RECENT POSTS
========================= */
export async function getRecentPosts(limit = 4) {
  try {
    return await client.fetch(
      `
      *[_type == "post"]
      | order(publishedAt desc)[0...$limit] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        mainImage {
          asset->{ _ref, url }
        }
      }
      `,
      { limit },
      { next: { revalidate: 60 } }
    );
  } catch (error) {
    console.error("❌ Error fetching recent posts:", error);
    return [];
  }
}

/* =========================
   CATEGORIES
========================= */
export async function getAllCategories() {
  try {
    return await client.fetch(
      `
      *[_type == "category"]
      | order(title asc) {
        _id,
        title,
        "slug": slug.current,
        description,
        color
      }
      `,
      {},
      { next: { revalidate: 300 } }
    );
  } catch (error) {
    console.error("❌ Error fetching categories:", error);
    return [];
  }
}

/* =========================
   AUTHORS
========================= */
export async function getAllAuthors() {
  try {
    return await client.fetch(
      `
      *[_type == "author"]
      | order(name asc) {
        _id,
        name,
        "slug": slug.current,
        role,
        bio,
        image {
          asset->{ _ref, url }
        }
      }
      `,
      {},
      { next: { revalidate: 300 } }
    );
  } catch (error) {
    console.error("❌ Error fetching authors:", error);
    return [];
  }
}

/* =========================
   SEARCH POSTS
========================= */
export async function searchPosts(query) {
  if (!query?.trim()) return [];

  try {
    return await client.fetch(
      `
      *[_type == "post" &&
        (title match $q ||
         excerpt match $q ||
         body[].children[].text match $q)]
      | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        mainImage {
          asset->{ _ref, url }
        }
      }
      `,
      { q: `*${query}*` },
      { next: { revalidate: 60 } }
    );
  } catch (error) {
    console.error("❌ Error searching posts:", error);
    return [];
  }
}

/* =========================
   LATEST UPDATE TIMESTAMP
========================= */
export async function getLatestPostTimestamp() {
  try {
    const post = await client.fetch(
      `
      *[_type == "post"]
      | order(_updatedAt desc)[0] {
        _updatedAt
      }
      `,
      {},
      { next: { revalidate: 10 } }
    );

    return post?._updatedAt || null;
  } catch (error) {
    console.error("❌ Error fetching latest update:", error);
    return null;
  }
}
