"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Daki from "@/public/3.jpeg";
import Daki1 from "@/public/7.jpeg";
import Bodem from "@/public/bodem.jpeg";
import Bodem1 from "@/public/bodem1.jpg";
import Logoo from "@/public/NewLogo.png";
import Spow from "@/public/spow.jpeg";
import Spow1 from "@/public/spow1.jpg";
import { default as Logo, default as Vlor } from "@/public/vlor1.jpeg";
import Vlor3 from "@/public/vlor3.jpeg";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import HeroBanner from "./components/HeroBanner";
import Link from "next/link";

const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const services = [
    {
      title: "Dakisolatie",
      description:
        "Warmte stijgt, en zonder goede dakisolatie gaat veel van deze warmte verloren. Onze dakisolatieoplossingen zijn ontworpen om dit warmteverlies te minimaliseren, wat zorgt voor een aanzienlijke besparing op uw energierekening. Of u nu kiest voor isolatie aan de binnenkant of de buitenkant van uw dak, wij zorgen voor een oplossing die past bij uw behoeften en budget.",
      img: Daki,
    },
    {
      title: "Spouwisolatie",
      description:
        "Spouwisolatie is een van de meest kosteneffectieve manieren om de energie-efficiëntie van uw huis te verhogen. Door de ruimte tussen de binnen- en buitenmuur van uw huis te vullen, vermindert spouwisolatie warmteverlies aanzienlijk. Dit resulteert in lagere stookkosten en een comfortabeler leefklimaat, het hele jaar door.",
      img: Spow,
    },
    {
      title: "Vloerisolatie",
      description:
        "Vloerisolatie is een effectieve manier om uw huis warmer en energiezuiniger te maken. Door de onderkant van uw vloeren te isoleren, vermindert u warmteverlies, wat leidt tot lagere energiekosten en een verhoogd comfort. Onze vloerisolatieoplossingen zijn ontworpen om koude trek en vochtproblemen aan te pakken, wat resulteert in een gezonder binnenklimaat voor uw gezin.",
      img: Logo,
    },
    {
      title: "Bodemisolatie",
      description:
        "Bodemisolatie biedt een snelle en efficiënte oplossing om de isolatie van uw woning te verbeteren, met name in kruipruimtes waar vocht en kou vaak een probleem vormen. Deze methode helpt niet alleen bij het verminderen van energieverbruik maar verbetert ook de luchtkwaliteit binnenshuis door vocht en schimmelvorming tegen te gaan.",
      img: Bodem,
    },
  ];

  const gallery = [Vlor, Vlor3, Daki, Daki1, Spow, Spow1, Bodem, Bodem1];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      <HeroBanner />
      <div className="container mx-auto px-4 py-8 space-y-40">
        <AnimatedSection>
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-xl font-semibold mb-4">Wie zijn wij?</h2>
                <p className="text-sm mb-4">
                  IsoXpert is uw expert in innovatieve
                  isolatieoplossingen. Wij bieden hoogwaardige isolatiediensten
                  om uw woning comfortabeler en energiezuiniger te maken. Met
                  onze jarenlange ervaring en geavanceerde technieken zorgen we
                  voor optimale isolatie en een duurzame toekomst.
                </p>
                <Link
                  href={"/services"}
                  className="bg-[#00a79d] text-white px-4 py-2 rounded text-sm flex items-center hover:bg-[#008c82] w-fit"
                >
                  Diensten
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
              <div className="mt-4 md:mt-0">
                <Image
                  src={Logoo}
                  alt="IsoXpert team"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto max-w-[400px] mx-auto"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Onze Diensten
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00a79d] to-purple-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 167, 157, 0.3), 0 0 40px rgba(0, 167, 157, 0.1)',
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(0, 167, 157, 0.5), 0 0 60px rgba(0, 167, 157, 0.2)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00a79d]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-6">
                    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#00a79d] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="w-12 h-1 bg-gradient-to-r from-[#00a79d] to-purple-500 rounded-full transition-all duration-300 group-hover:w-20"></div>
                      <ArrowRight className="w-5 h-5 text-[#00a79d] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Onze Projecten
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00a79d] to-purple-500 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Ontdek enkele van onze succesvolle isolatieprojecten en laat u inspireren door onze vakmanschap.
              </p>
            </div>
            <div className="relative overflow-hidden">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-7xl mx-auto"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {gallery.map((img, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                      <motion.div 
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500"
                        style={{
                          boxShadow: '0 8px 32px rgba(0, 167, 157, 0.15)',
                        }}
                        whileHover={{ 
                          y: -8,
                          boxShadow: '0 16px 48px rgba(0, 167, 157, 0.25)',
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <div className="aspect-square overflow-hidden">
                          <Image
                            src={img}
                            alt={`Project ${index + 1}`}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00a79d]/50 rounded-2xl transition-all duration-300"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-sm font-semibold">Project {index + 1}</div>
                          <div className="text-xs text-gray-200 mt-1">Isolatie Oplossing</div>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white shadow-lg" />
                <CarouselNext className="-right-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white shadow-lg" />
              </Carousel>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
}