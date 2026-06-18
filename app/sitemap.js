export default function sitemap() {
  const baseUrl = "https://www.gymflowpro.online";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
