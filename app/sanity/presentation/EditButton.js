'use client'

import { FaEdit } from 'react-icons/fa'

export default function EditButton({ id }) {
  const handleEdit = () => {
    // Open Sanity Studio in edit mode
    // Replace with your actual Sanity Studio URL
    const studioUrl = `http://localhost:3333/desk/post;${id}`
    window.open(studioUrl, '_blank')
  }

  // Only show in presentation mode
  if (process.env.NEXT_PUBLIC_SANITY_PRESENTATION !== 'true') {
    return null
  }

  return (
    <button
      onClick={handleEdit}
      className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 flex items-center gap-2"
      aria-label="Edit in Sanity Studio"
    >
      <FaEdit />
      <span className="hidden sm:inline">Edit</span>
    </button>
  )
}