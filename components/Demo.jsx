"use client";

const stats = [
  { label: "Socios activos", value: "247", icon: "👥", color: "blue" },
  { label: "Ingresos mensuales", value: "$842.000", icon: "💰", color: "green" },
  { label: "Asistencias registradas", value: "1.842", icon: "✅", color: "purple" },
  { label: "Ventas realizadas", value: "312", icon: "🛒", color: "orange" },
];

const colorMap = {
  blue: "from-blue-500/10 border-blue-200 text-blue-700",
  green: "from-green-500/10 border-green-200 text-green-700",
  purple: "from-purple-500/10 border-purple-200 text-purple-700",
  orange: "from-orange-500/10 border-orange-200 text-orange-700",
};

const features = [
  { icon: "🔔", text: "Alertas automáticas de vencimiento" },
  { icon: "📊", text: "Reportes de ingresos en tiempo real" },
  { icon: "📲", text: "Notificaciones por WhatsApp y Email" },
  { icon: "🏋️", text: "Control de acceso y check-in" },
  { icon: "📅", text: "Gestión de turnos y clases" },
  { icon: "🛍️", text: "Punto de venta integrado" },
];

export default function Demo() {
  return (
    <section id="demo" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 rounded-full px-4 py-1.5 mb-4">
            Plataforma
          </span>
          <h2 className="section-title mb-4">
            Todo tu gimnasio en{" "}
            <span className="text-blue-600">una sola plataforma</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Un panel intuitivo que te da el control total de tu negocio en
            tiempo real.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Dashboard mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-3xl scale-95" />
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
              {/* Topbar */}
              <div className="bg-gray-900 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">GymFlowPro</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  En línea
                </div>
              </div>

              {/* Sidebar + Content */}
              <div className="flex">
                {/* Mini sidebar */}
                <div className="hidden sm:flex flex-col gap-1 bg-gray-50 border-r border-gray-100 p-3 w-14">
                  {["🏠","👥","💰","📅","📊","⚙️"].map((icon, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-base cursor-pointer transition-colors ${
                        i === 0
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                          : "hover:bg-gray-200 text-gray-500"
                      }`}
                    >
                      {icon}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Dashboard</h3>
                      <p className="text-xs text-gray-400">Resumen del mes actual</p>
                    </div>
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">
                      Junio 2025
                    </span>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className={`bg-gradient-to-br ${colorMap[s.color]} border rounded-xl p-3`}
                      >
                        <div className="text-base mb-1">{s.icon}</div>
                        <div className="text-lg font-bold">{s.value}</div>
                        <div className="text-xs opacity-70 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-gray-700">Ingresos semanales</span>
                      <span className="text-xs text-green-500 font-medium">+12% vs mes anterior</span>
                    </div>
                    <div className="flex items-end gap-2 h-14">
                      {[55, 75, 60, 90, 70, 85, 95].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end rounded overflow-hidden">
                          <div
                            className="rounded-t bg-gradient-to-t from-blue-700 to-blue-400"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Alert strip */}
                  <div className="mt-3 flex items-center gap-2 text-xs bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-amber-700">
                    <span>⚠️</span>
                    <span>5 socios con cuota a vencer en los próximos 3 días</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: feature list */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Diseñado para gimnasios que quieren crecer
            </h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Cada funcionalidad fue pensada para resolver los problemas reales
              de la administración de un gimnasio, sin complejidades innecesarias.
            </p>

            <div className="space-y-4">
              {features.map((f) => (
                <div
                  key={f.text}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {f.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{f.text}</span>
                  <svg
                    className="w-4 h-4 text-gray-300 ml-auto flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
