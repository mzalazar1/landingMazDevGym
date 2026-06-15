"use client";

const benefits = [
  "Automatización de tareas administrativas",
  "Alertas automáticas de vencimiento por WhatsApp",
  "Alertas automáticas de vencimiento por Email",
  "Gestión completa de socios",
  "Gestión de membresías",
  "Control de acceso y Check-In",
  "Gestión de turnos",
  "Cronograma de clases",
  "Envío de rutinas personalizadas",
  "Venta de productos",
  "Control de stock",
  "Gestión de eventos",
  "Comprobantes de compra",
  "Reportes y estadísticas",
  "Dashboard administrativo",
  "Seguimiento de pagos",
  "Gestión de asistencia",
];

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Todo automatizado",
    desc: "Dejá que el sistema trabaje por vos. Notificaciones, cobros y reportes sin intervención manual.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Reportes en tiempo real",
    desc: "Tomá decisiones basadas en datos. Visualizá el rendimiento de tu gimnasio al instante.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "100% desde el celular",
    desc: "Accedé a toda la plataforma desde cualquier dispositivo, en cualquier momento.",
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 rounded-full px-4 py-1.5 mb-4">
            Funcionalidades
          </span>
          <h2 className="section-title mb-4">
            Todo lo que necesitás para{" "}
            <span className="text-blue-600">administrar tu gimnasio</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Una plataforma completa pensada para que no te falte nada y puedas
            enfocarte en hacer crecer tu negocio.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 hover:shadow-md hover:shadow-blue-100 transition-shadow duration-200"
            >
              <div className="w-11 h-11 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-md shadow-blue-500/30">
                {h.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{h.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits checklist */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 border border-gray-100 rounded-2xl p-8 sm:p-10">
          <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
            Todas las funcionalidades incluidas en cada plan
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
