import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const slug = searchParams.get("slug");

  // Enable draft mode
  draftMode().enable();

  // Redirect to preview page
  redirect(slug ? `/blogs/${slug}` : "/");
}
