import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Projects from "@/components/Projects";
import Why from "@/components/Why";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Highlights />
      <Projects />
      <Why />
      <ContactForm />
      <Footer />
    </main>
  );
}
