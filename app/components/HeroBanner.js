import Image from "next/image";
import Hero from "@/public/banner.webp";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="relative h-[80vh] min-h-[400px] w-full overflow-hidden">
      <Image
        src={Hero}
        alt="Prof-Solutions Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Innovatieve Isolatieoplossingen
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-white mb-6 max-w-2xl">
          Verbeter de energie-efficiëntie van uw woning met onze geavanceerde
          isolatietechnieken. Bespaar op energiekosten en verhoog uw
          wooncomfort.
        </p>
        <button className="bg-[#00a79d] text-white px-6 py-2 rounded text-sm flex items-center hover:bg-[#008c82] transition duration-300">
           Vraag een offerte aan
          <ArrowRight className="ml-2" size={16} />
        </button>
      </div>
    </div>
  );
}
