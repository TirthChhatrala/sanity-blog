import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") || "/";

  // ✅ NO secret
  // ✅ NO auth
  draftMode().enable();

  redirect(slug);
}
