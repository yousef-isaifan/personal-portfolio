import Header from "@/components/Header";
import Bio from "@/components/Bio";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="w-full">
        <Bio />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
