import PlaceholderPage from "@/components/site/PlaceholderPage";

export default async function Page({ params }) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");
  return <PlaceholderPage title={title} />;
}

