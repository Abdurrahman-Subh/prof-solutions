import Image from "next/image";
import Hero from "@/public/banner.webp";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="relative h-[80vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
      <Image
        src={Hero}
        alt="IsoXpert Hero Image"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute z-0"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-300/40 via-gray-200/30 to-slate-400/40 z-10"></div>
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="glass-hero rounded-3xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">
            Welkom bij IsoXpert
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-2xl font-medium drop-shadow mx-auto">
            Uw partner voor innovatieve, duurzame isolatieoplossingen. Bespaar energie, verhoog comfort en investeer in de toekomst van uw woning.
          </p>
          <Link
            href={"/contact"}
            className="bg-[#00a79d] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center shadow-xl hover:bg-[#008c82] transition duration-300 mx-auto w-fit hover:scale-105 transform"
          >
            Vraag direct een offerte aan
            <ArrowRight className="ml-3" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
