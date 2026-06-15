import "./globals.css";

export const metadata = {
  title: "GymFlowPro | Automatizá la gestión de tu gimnasio",
  description:
    "Gestioná socios, pagos, turnos, stock, clases y reportes desde una única plataforma. 30 días de prueba gratuita.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
