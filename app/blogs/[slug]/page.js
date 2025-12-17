import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, formatDate } from "@/utils/sanity";

export const revalidate = 60;

export default async function BlogPostPage({ params }) {
  // ✅ Next.js 16 requirement
  const { slug } = await params;

  if (!slug) notFound();

  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-5xl mx-auto px-4 py-12">
      {/* Back link */}
      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8"
      >
        ← Back to Blogs
      </Link>

      {/* Featured Image */}
      {post.mainImage?.asset?.url && (
        <div className="relative w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg mb-8">
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      {/* Categories */}
      {post.categories?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((cat) => (
            <span
              key={cat.title}
              className="px-3 py-1 text-xs font-semibold rounded-full"
              style={{
                backgroundColor: cat.color || "#DBEAFE",
                color: "#1E3A8A",
              }}
            >
              {cat.title}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        {post.title}
      </h1>

      {/* Excerpt */}
      {post.excerpt && (
        <p className="text-lg text-gray-600 mb-6">
          {post.excerpt}
        </p>
      )}

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-10">
        <time dateTime={post.publishedAt}>
          {formatDate(post.publishedAt)}
        </time>
        <span>•</span>
        <span>{post.author?.name}</span>
      </div>

      {/* Author Card */}
      {post.author && (
        <div className="flex gap-4 items-start p-6 mb-12 rounded-xl bg-gray-50 border">
          {post.author.image?.asset?.url && (
            <Image
              src={post.author.image.asset.url}
              alt={post.author.name}
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          )}

          <div>
            <h4 className="font-semibold text-lg">
              {post.author.name}
            </h4>

            {/* ✅ FIXED: no <p> wrapper */}
            {post.author.bio && (
              <div className="mt-2 prose prose-sm text-gray-600 max-w-none">
                <PortableText value={post.author.bio} />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Blog Content */}
      <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
