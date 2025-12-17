import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import "./globals.css";
import Navbar from "./navbar/Navbar";
// import PreviewToggle from "@/components/PreviewToggle";
import { VisualEditing } from "@sanity/visual-editing/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanity Blog",
  description: "A blog built with Sanity and Next.js",
};

export default function RootLayout({ children }) {
  // ✅ Detect preview / draft mode
  const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>
              © {new Date().getFullYear()} Sanity Blog. All rights reserved.
            </p>
            <p className="mt-2 text-gray-400">
              Powered by Sanity.io & Next.js
            </p>
          </div>
        </footer>

        {/* ✅ Preview Toggle Button */}
        {/* <PreviewToggle enabled={isEnabled} /> */}
        < VisualEditing />
      </body>
    </html>
  );
}
