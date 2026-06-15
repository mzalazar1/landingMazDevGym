"use client";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-green-500 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const plans = [
  {
    name: "Mensual",
    badge: null,
    price: "$40.000",
    period: "por mes",
    description: "Ideal para empezar sin compromisos.",
    features: ["Todas las funcionalidades", "Actualizaciones incluidas", "Soporte personalizado"],
    cta: "Solicitar prueba gratuita",
    highlighted: false,
  },
  {
    name: "Semestral",
    badge: "10% OFF",
    price: "$216.000",
    period: "por 6 meses",
    description: "Ahorrás 2 meses pagando 6.",
    features: [
      "Todas las funcionalidades",
      "Actualizaciones incluidas",
      "Soporte personalizado",
      "Ahorro del 10% respecto al mensual",
    ],
    cta: "Solicitar prueba gratuita",
    highlighted: false,
  },
  {
    name: "Anual",
    badge: "Más popular · 15% OFF",
    price: "$408.000",
    period: "por 12 meses",
    description: "La opción más inteligente para tu negocio.",
    features: [
      "Todas las funcionalidades",
      "Actualizaciones incluidas",
      "Soporte prioritario 24/7",
      "Ahorro del 15% respecto al mensual",
    ],
    cta: "Solicitar prueba gratuita",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="planes" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 rounded-full px-4 py-1.5 mb-4">
            Precios
          </span>
          <h2 className="section-title mb-4">
            Elegí el plan ideal{" "}
            <span className="text-blue-600">para tu gimnasio</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Todos los planes incluyen 30 días de prueba gratuita. Sin tarjeta de
            crédito requerida.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid sm:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl transition-all duration-200 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-2xl shadow-blue-500/30 scale-[1.02]"
                  : "bg-white border border-gray-200 hover:shadow-lg hover:border-blue-100"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className={`text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap ${
                      plan.highlighted
                        ? "bg-amber-400 text-amber-900"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Plan name */}
                <div className="mb-5">
                  <h3
                    className={`text-sm font-semibold uppercase tracking-wider mb-1 ${
                      plan.highlighted ? "text-blue-200" : "text-blue-600"
                    }`}
                  >
                    Plan {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.highlighted ? "text-blue-200/70" : "text-gray-400"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-7">
                  <div
                    className={`text-4xl font-extrabold tracking-tight ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </div>
                  <div
                    className={`text-sm mt-1 ${
                      plan.highlighted ? "text-blue-200/70" : "text-gray-400"
                    }`}
                  >
                    {plan.period}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      {plan.highlighted ? (
                        <svg
                          className="w-4 h-4 text-green-300 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <CheckIcon />
                      )}
                      <span
                        className={`text-sm leading-relaxed ${
                          plan.highlighted ? "text-blue-100" : "text-gray-600"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://www.gymflowpro.com/form"
                  className={`block text-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-white text-blue-700 hover:bg-blue-50 shadow-lg"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-gray-400">
          {[
            { icon: "🔒", text: "Sin tarjeta de crédito" },
            { icon: "🚀", text: "Configuración en minutos" },
            { icon: "🎯", text: "30 días de prueba gratis" },
            { icon: "💬", text: "Soporte personalizado" },
          ].map(({ icon, text }) => (
            <span key={text} className="flex items-center gap-2">
              <span>{icon}</span> {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
