import Link from 'next/link'

export default function BlogCard({ post }) {
  const blogUrl = `/blogs/${post.slug}`

  return (
    <Link href={blogUrl}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group cursor-pointer">
        {/* Image */}
        <div className="h-48 overflow-hidden bg-gray-200">
          {post.imageUrl ? (
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center justify-center">
              <span className="text-white font-bold">Blog</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Categories */}
          {post.category && (
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                {post.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              {/* Date */}
              <div className="flex items-center gap-1">
                <span>{post.date}</span>
              </div>
              {/* Author */}
              <div className="flex items-center gap-1">
                <span>{post.author || 'Unknown'}</span>
              </div>
            </div>

            {/* Read More */}
            <span className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
              Read →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}