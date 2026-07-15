"use client";

const WA_URL =
  "https://wa.me/5493417409383?text=Hola%2C%20me%20interesa%20conocer%20GymMAZDev";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900">
      {/* Geometric background decorations */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl" />
        {/* Floating geometric shapes */}
        <div className="float-slow absolute top-20 right-[15%] w-16 h-16 border border-blue-400/20 rounded-2xl rotate-12" />
        <div className="float-medium absolute bottom-32 left-[10%] w-10 h-10 border border-blue-300/15 rounded-xl rotate-45" />
        <div className="float-slow absolute top-1/2 right-[8%] w-6 h-6 bg-blue-500/20 rounded-full" />
        <div className="float-medium absolute top-[30%] left-[5%] w-8 h-8 border border-white/10 rounded-lg rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1.5 text-sm text-blue-300 font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Software de gestión para gimnasios
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Automatizá la{" "}
              <span className="relative">
                <span className="text-gradient bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  gestión
                </span>
              </span>{" "}
              de tu gimnasio
            </h1>

            <p className="text-lg sm:text-xl text-blue-100/70 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Gestioná socios, pagos, turnos, stock, clases y reportes desde una{" "}
              <strong className="text-blue-200 font-semibold">
                única plataforma
              </strong>
              .
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mb-10">
              {[
                "Sin costo de instalación",
                "30 días de prueba gratuita",
                "Soporte personalizado",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm text-blue-100/80"
                >
                  <svg
                    className="w-4 h-4 text-green-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="https://www.gymmazdev.com/form"
                className="btn-primary text-base px-8 py-4 shadow-2xl shadow-blue-500/40"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Solicitar prueba gratuita
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Consultas por WhatsApp
              </a>
            </div>

            {/* Social proof */}
            <p className="mt-8 text-sm text-blue-100/40">
              ✦ Sin tarjeta de crédito requerida · Configuración en minutos
            </p>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-3xl scale-95" />
              {/* Main dashboard card */}
              <div className="relative bg-gray-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
                {/* Window bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-gray-900/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <div className="flex-1 mx-4 bg-white/5 rounded-md h-5 flex items-center px-3">
                    <span className="text-xs text-white/30">
                      gymmazdev.com/dashboard
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  {/* Stats row */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      {
                        label: "Socios activos",
                        value: "247",
                        icon: "👥",
                        trend: "+12%",
                      },
                      {
                        label: "Ingresos del mes",
                        value: "$842K",
                        icon: "💰",
                        trend: "+8%",
                      },
                      {
                        label: "Asistencias hoy",
                        value: "63",
                        icon: "✅",
                        trend: "+5%",
                      },
                      {
                        label: "Ventas realizadas",
                        value: "31",
                        icon: "🛒",
                        trend: "+18%",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/5 border border-white/10 rounded-xl p-3"
                      >
                        <div className="flex items-start justify-between mb-1">
                          <span className="text-base">{stat.icon}</span>
                          <span className="text-xs text-green-400 font-medium">
                            {stat.trend}
                          </span>
                        </div>
                        <div className="text-xl font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/40 mt-0.5">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Mini chart placeholder */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-white/60 font-medium">
                        Asistencias · últimos 7 días
                      </span>
                      <span className="text-xs text-blue-400">
                        Ver reporte →
                      </span>
                    </div>
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 flex flex-col justify-end"
                        >
                          <div
                            className="rounded-t-sm bg-gradient-to-t from-blue-600 to-blue-400 opacity-80"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-1">
                      {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
                        <span
                          key={d}
                          className="flex-1 text-center text-xs text-white/20"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Notifications strip */}
                  <div className="mt-3 flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2">
                    <span className="text-green-400 text-sm">📲</span>
                    <span className="text-xs text-green-300">
                      3 socios notificados por vencimiento de cuota
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 40C360 80 1080 0 1440 40V80H0V40Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
