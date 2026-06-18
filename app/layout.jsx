import "./globals.css";
import { Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "GymFlowPro | Software de Gestión para Gimnasios en Argentina",
  description:
    "Gestioná socios, pagos, turnos, stock, clases y reportes desde una única plataforma. 30 días de prueba gratuita.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
