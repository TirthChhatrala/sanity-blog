import Link from "next/link";
import Image from "next/image";
import { getAllPosts, formatDate } from "@/utils/sanity";

export const revalidate = 60;

export default async function BlogsPage() {
  const posts = await getAllPosts();

  if (!posts || posts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold">No blogs found</h2>
        <p className="text-gray-500 mt-2">
          Please add and publish posts in Sanity Studio.
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">All Blogs</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blogs/${post.slug}`}
            className="group rounded-xl overflow-hidden border hover:shadow-lg transition"
          >
            {/* Image */}
            {post.mainImage?.asset?.url && (
              <div className="relative h-48 w-full">
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                {post.title}
              </h2>

              {post.excerpt && (
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              )}

              <p className="text-xs text-gray-500">
                {formatDate(post.publishedAt)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
