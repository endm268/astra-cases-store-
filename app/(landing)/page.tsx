import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full bg-nebulous-blue">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
