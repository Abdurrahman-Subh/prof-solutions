"use client";
import Image from "next/image";
import Logo from "@/public/NewLogo.png";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[#00a79d] rounded-full animate-ping opacity-20"></div>
          <div className="relative animate-float">
            <Image
              src={Logo}
              width={120}
              height={120}
              alt="IsoXpert"
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
        <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#00a79d] rounded-full animate-progress"></div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">IsoXpert wordt geladen...</p>
      </div>
    </div>
  );
}
