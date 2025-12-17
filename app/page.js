import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to Sanity Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          A simple blog built with Next.js and Sanity.io
        </p>
        <div className="space-x-4">
          <Link 
            href="/blogs"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            View All Posts
          </Link>
          <a 
            href="https://github.com/vercel/next.js" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors inline-block"
          >
            Learn Next.js
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Fast</h3>
          <p className="text-gray-600">Built with Next.js for optimal performance.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Modern</h3>
          <p className="text-gray-600">Using the latest React and Tailwind CSS.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Simple</h3>
          <p className="text-gray-600">Clean, straightforward blog implementation.</p>
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start?</h2>
        <p className="text-gray-600 mb-6">
          Check out our latest blog posts or learn how to build your own.
        </p>
        <Link 
          href="/blogs/first-post"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
        >
          Read First Post →
        </Link>
      </div>
    </div>
  )
}
