"use client";

export default function PreviewToggle({ enabled }) {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {enabled ? (
        <a
          href="/api/exit-preview"
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow"
        >
          Exit Preview
        </a>
      ) : (
        <a
          href="/api/preview"
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow"
        >
          Enter Preview
        </a>
      )}
    </div>
  );
}
