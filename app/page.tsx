import Header from "@/components/Header";
import Bio from "@/components/Bio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="w-full">
        <Bio />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
