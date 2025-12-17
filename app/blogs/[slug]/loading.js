export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back Button Skeleton */}
      <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-8"></div>
      
      {/* Category Skeleton */}
      <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse mb-6"></div>
      
      {/* Title Skeleton */}
      <div className="h-12 bg-gray-200 rounded animate-pulse mb-8"></div>
      
      {/* Author/Date Skeleton */}
      <div className="flex gap-6 mb-8">
        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
      </div>
      
      {/* Image Skeleton */}
      <div className="h-96 bg-gray-200 rounded-xl animate-pulse mb-8"></div>
      
      {/* Content Skeleton */}
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  )
}