import Image from "next/image";
import Link from "next/link";
import { posts } from "@/app/blog/data/posts";

export const metadata = {
  title: "Blog | GymFlowPro — Consejos para gestionar tu gimnasio",
  description:
    "Guías y consejos prácticos sobre gestión de gimnasios: cobros, automatización, control de acceso y más, escritos para dueños de gimnasios en Argentina.",
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
          </div>

          <span className="inline-block text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1 mb-5">
            Blog
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Consejos para gestionar tu gimnasio
          </h1>
          <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl">
            Guías prácticas sobre cobros, automatización y administración,
            pensadas para dueños de gimnasios en Argentina.
          </p>
        </div>
      </header>

      {/* Grid de artículos */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center py-20">
            Todavía no hay artículos publicados. Volvé pronto.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-200"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-50">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 rounded-full px-3 py-1 mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
