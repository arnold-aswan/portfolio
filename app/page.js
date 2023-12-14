import { Hero, Navbar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-32 mx-auto py-4 px-12">
        <Hero />
      </div>
    </main>
  );
}
