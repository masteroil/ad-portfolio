import Image from "next/image";
import HeroContainer from "./components/Hero";
import Skills from "./components/Skill";
import Portfolio from "./components/porfolio";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-6 lg:px-4 md:px-4 sm:p-4">
      <HeroContainer />
      <Skills />
      <Portfolio />
    </main>
  );
}
