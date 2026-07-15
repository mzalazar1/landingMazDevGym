import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Demo from "@/components/Demo";
import Pricing from "@/components/Pricing";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "GymMAZDev | Automatizá la gestión de tu gimnasio",
  description:
    "Gestioná socios, pagos, turnos, stock, clases y reportes desde una única plataforma. 30 días de prueba gratuita.",
  keywords:
    "software gimnasio, gestión gimnasio, sistema gimnasio, administración gimnasio",
  openGraph: {
    title: "GymMAZDev | Automatizá la gestión de tu gimnasio",
    description:
      "Gestioná socios, pagos, turnos, stock, clases y reportes desde una única plataforma.",
    url: "https://www.gymmazdev.com",
    siteName: "GymMAZDev",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <Demo />
      <Pricing />
      <CtaFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
