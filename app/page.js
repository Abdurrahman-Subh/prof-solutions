"use client";

import { useEffect, useRef } from "react";
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
        "Verminder warmteverlies en bespaar op energiekosten met onze geavanceerde dakisolatietechnieken.",
    },
    {
      title: "Muurisolatie",
      description:
        "Verbeter de thermische prestaties van uw woning met onze effectieve muurisolatieoplossingen.",
    },
    {
      title: "Vloerisolatie",
      description:
        "Zorg voor een comfortabeler leefklimaat en lagere energierekeningen met onze vloerisolatiediensten.",
    },
    {
      title: "Glasisolatie",
      description:
        "Upgrade uw ramen voor betere isolatie en geluidswering met onze moderne glasisolatietechnieken.",
    },
  ];

  return (
    <div>
      <HeroBanner />
      <div className="container mx-auto px-4 py-8">
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
                  src="https://media.stockimg.ai/image/nwex4DuCeRiQ.png"
                  alt="Prof-Solutions team"
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto"
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
                      src="https://media.stockimg.ai/image/nwex4DuCeRiQ.png"
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
                {[...Array(8)].map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
                  >
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                        <Image
                          src="https://media.stockimg.ai/image/nwex4DuCeRiQ.png"
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
