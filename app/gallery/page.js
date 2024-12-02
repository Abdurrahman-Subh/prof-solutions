"use client";

import { useState } from "react";
import Image from "next/image";
import Spow from "@/public/spow.jpeg";
import Spow1 from "@/public/spow1.jpg";
import Spow2 from "@/public/spow2.jpeg";
import Spow3 from "@/public/spow3.webp";
import Daki from "@/public/3.jpeg";
import Daki1 from "@/public/7.jpeg";
import Daki2 from "@/public/6.jpeg";
import Daki5 from "@/public/daki5.jpg";
import Bodem from "@/public/bodem.jpeg";
import Bodem1 from "@/public/bodem1.jpg";
import Bodem2 from "@/public/bodem2.jpg";
import Bodem3 from "@/public/bodem3.jpg"; 
import Vlor3 from "@/public/vlor3.jpeg";
import Vlor1 from "@/public/vlor1.jpeg";
import Vlor2 from "@/public/vlor2.jpeg";
import Vlor4 from "@/public/vlor4.jpeg";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const [activeSection, setActiveSection] = useState("vloerisolatie");

  const sections = {
    vloerisolatie: {
      title: "Wat is vloerisolatie?",
      description:
        "Vloerisolatie is een effectieve manier om uw huis warmer en energiezuiniger te maken. Door de onderkant van uw vloeren te isoleren, vermindert u warmteverlies, wat leidt tot lagere energiekosten en een verhoogd comfort. Onze vloerisolatieoplossingen zijn ontworpen om koude trek en vochtproblemen aan te pakken, wat resulteert in een gezonder binnenklimaat voor uw gezin.",
      benefits: [
        "Vermindert warmteverlies, wat resulteert in lagere energiekosten.",
        "Zorgt voor een gelijkmatige temperatuur en meer comfort.",
        "Draagt bij aan een groenere levensstijl door energiezuinigheid.",
      ],
      images: [
        {
          src: Vlor3,
          title: "Vloerisolatie Installatie",
          description: "Professionele installatie van vloerisolatie",
        },
        {
          src: Vlor1,
          title: "Thermische Barrière",
          description: "Effectieve thermische isolatie voor uw vloer",
        },
        {
          src: Vlor2,
          title: "Comfort Verbetering",
          description: "Verhoogd comfort door betere isolatie",
        },
        {
          src: Vlor4,
          title: "Energiebesparing",
          description: "Meetbare energiebesparing na installatie",
        },
      ],
    },
    bodemisolatie: {
      title: "Wat is bodemisolatie?",
      description:
        "Bodemisolatie is essentieel voor het creëren van een energiezuinige woning. Het isoleert de bodem onder uw huis, wat bijdraagt aan een comfortabeler leefklimaat.",
      benefits: [
        "Voorkomt vocht en schimmelvorming",
        "Verbetert de energieprestatie van uw woning",
        "Verhoogt het wooncomfort",
      ],
      images: [
        {
          src: Bodem,
          title: "Bodem Voorbereiding",
          description: "Professionele voorbereiding van de bodem",
        },
        {
          src: Bodem1,
          title: "Isolatiemateriaal",
          description: "Hoogwaardige isolatiematerialen",
        },
        {
          src: Bodem2,
          title: "Installatie Proces",
          description: "Vakkundige installatie door experts",
        },
        {
          src: Bodem3,
          title: "Eindresultaat",
          description: "Perfect geïsoleerde bodem",
        },
      ],
    },
    spouwisolatie: {
      title: "Wat is spouwisolatie?",
      description:
        "Spouwisolatie is een effectieve methode om uw muren te isoleren. Het materiaal wordt in de spouwmuur geblazen, wat resulteert in uitstekende isolatie.",
      benefits: [
        "Snelle en efficiënte installatie",
        "Significant lagere energierekening",
        "Verhoogde woningwaarde",
      ],
      images: [
        {
          src: Spow,
          title: "Spouwmuur Inspectie",
          description: "Grondige inspectie van de spouwmuur",
        },
        {
          src: Spow1,
          title: "Isolatie Inblazen",
          description: "Professioneel inblazen van isolatiemateriaal",
        },
        {
          src: Spow3,
          title: "Kwaliteitscontrole",
          description: "Nauwkeurige controle van de isolatie",
        },
        {
          src: Spow2,
          title: "Afwerking",
          description: "Nette afwerking van de werkzaamheden",
        },
      ],
    },
    dakisolatie: {
      title: "Wat is dakisolatie?",
      description:
        "Dakisolatie is cruciaal voor een energiezuinig huis. Het voorkomt warmteverlies via het dak en zorgt voor een aangenaam binnenklimaat.",
      benefits: [
        "Maximale energiebesparing",
        "Bescherming tegen weersinvloeden",
        "Verbeterd binnenklimaat",
      ],
      images: [
        {
          src: Daki,
          title: "Dak Voorbereiding",
          description: "Zorgvuldige voorbereiding van het dak",
        },
        {
          src: Daki5,
          title: "Isolatie Aanbrengen",
          description: "Vakkundige installatie van dakisolatie",
        },
        {
          src: Daki2,
          title: "Dampscherm",
          description: "Plaatsing van het dampscherm",
        },
        {
          src: Daki1,
          title: "Eindafwerking",
          description: "Professionele afwerking van de dakisolatie",
        },
      ],
    },
  };

  const activeContent = sections[activeSection];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-2xl font-bold mb-8">Isolatiemogelijkheden</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
        {/* Left sidebar with buttons */}
        <div className="space-y-2">
          {Object.keys(sections).map((section) => (
            <Button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`w-full justify-start text-left ${
                activeSection === section
                  ? "bg-[#00a79d] hover:bg-[#00a79d]/90"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </div>

        {/* Right content area */}
        <div className="space-y-8">
          <div className="rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-white">
              {activeContent.title}
            </h2>
            <p className="text-sm text-white mb-6">
              {activeContent.description}
            </p>

            <h3 className="text-lg font-semibold mb-3 text-white">Voordelen</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              {activeContent.benefits.map((benefit, index) => (
                <li key={index} className="text-sm text-white">
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeContent.images.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </CardContent>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm font-semibold text-white">
                      {image.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-white">
                      {image.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
