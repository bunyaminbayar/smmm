import { redirect } from "next/navigation";

export default function Page({ params }) {
  const { slug } = params;
  const key = Array.isArray(slug) ? slug[slug.length - 1] : slug;
  // Redirect old path /blog/blog-detail-one/:slug -> new path /blog/:slug
  redirect(`/blog/${key}`);
}

