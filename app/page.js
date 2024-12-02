"use client";

import { useEffect, useRef } from "react";
import Prof from "@/public/prof.png";
import Logo from "@/public/vlor1.jpeg";
import Spow from "@/public/spow.jpeg";
import Spow1 from "@/public/spow1.jpg";
import Daki from "@/public/3.jpeg";
import Daki1 from "@/public/7.jpeg";
import Bodem from "@/public/bodem.jpeg";
import Bodem1 from "@/public/bodem1.jpg";
import Vlor from "@/public/vlor1.jpeg";
import Vlor3 from "@/public/vlor3.jpeg";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import HeroBanner from "./components/HeroBanner";

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
    <div>
      <HeroBanner />
      <div className="container mx-auto px-4 py-8 space-y-40">
        <AnimatedSection>
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-xl font-semibold mb-4">Wie zijn wij?</h2>
                <p className="text-sm mb-4">
                  Prof-Solutions is uw expert in innovatieve
                  isolatieoplossingen. Wij bieden hoogwaardige isolatiediensten
                  om uw woning comfortabeler en energiezuiniger te maken. Met
                  onze jarenlange ervaring en geavanceerde technieken zorgen we
                  voor optimale isolatie en een duurzame toekomst.
                </p>
                <motion.button
                  className="bg-[#00a79d] text-white px-4 py-2 rounded text-sm flex items-center hover:bg-[#008c82]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ontdek onze diensten
                  <ArrowRight className="ml-2" size={16} />
                </motion.button>
              </div>
              <div className="mt-4 md:mt-0">
                <Image
                  src={Prof}
                  alt="Prof-Solutions team"
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
            <h2 className="text-xl font-semibold mb-6 text-center">
              Onze Diensten
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-4`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-full md:w-1/2">
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm">{service.description}</p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section>
            <h2 className="text-xl font-semibold mb-6 text-center">
              Onze Projecten
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {gallery.map((img, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
                  >
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                        <Image
                          src={img}
                          alt={`Project ${index + 1}`}
                          width={400}
                          height={400}
                          className="rounded-lg w-full h-auto"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
}
