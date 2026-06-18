import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/app/blog/data/posts";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | GymFlowPro`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default function BlogArticle({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* Header del artículo */}
      <header className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Volver al blog
          </Link>

          <span className="inline-block text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1 mb-5">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            {post.title}
          </h1>

          <p className="text-lg text-blue-100/70 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 mt-6 text-sm text-blue-200/50">
            <span>GymFlowPro</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Imagen destacada */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Contenido */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {post.intro}
        </p>

        {post.sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              {section.heading}
            </h2>
            {section.paragraphs.map((para, j) => (
              <p key={j} className="text-gray-700 leading-relaxed mb-6">
                {para}
              </p>
            ))}
          </div>
        ))}

        {post.benefits && post.benefits.length > 0 && (
          <div className="space-y-5 my-8">
            {post.benefits.map((b, i) => (
              <div
                key={i}
                className="flex gap-4 bg-blue-50/50 border border-blue-100 rounded-xl p-5"
              >
                <div className="w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {b.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {b.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA final */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Probá GymFlowPro gratis durante 30 días
          </h3>
          <p className="text-blue-100/80 text-sm mb-6 max-w-md mx-auto">
            Automatizá la gestión de tu gimnasio y dedicá más tiempo a hacer
            crecer tu negocio.
          </p>
          <a
            href="https://www.gymflowpro.online/form"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg"
          >
            Solicitar prueba gratuita
          </a>
        </div>
      </article>
    </main>
  );
}
