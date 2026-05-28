import IntroScreen    from "@/components/IntroScreen";
import Header        from "@/components/Header";
import HeroSection    from "@/components/HeroSection";
import SobreSection   from "@/components/SobreSection";
import ProjetosSection from "@/components/ProjetosSection";
import ServicosSection from "@/components/ServicosSection";
import ProcessoSection from "@/components/ProcessoSection";
import ContatoSection  from "@/components/ContatoSection";
import Footer          from "@/components/Footer";

export default function Home() {
  return (
    <>
      <IntroScreen />
      <Header />
      <main>
        <HeroSection />
        <SobreSection />
        <ProjetosSection />
        <ServicosSection />
        <ProcessoSection />
        <ContatoSection />
      </main>
      <Footer />
    </>
  );
}
