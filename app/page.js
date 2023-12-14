import { Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className="container mx-auto py-4 px-12">
        <Hero />
      </div>
    </main>
  );
}
