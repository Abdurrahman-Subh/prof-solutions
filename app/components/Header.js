"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/public/NewLogo.png";
import { motion } from "framer-motion";
import { Briefcase, Home, ImageIcon, Mail, Menu, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Hoofdpagina", icon: Home },
  { href: "/gallery", label: "Galerij", icon: ImageIcon },
  { href: "/services", label: "Diensten", icon: Briefcase },
  { href: "/about", label: "Over ons", icon: Users },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-r from-slate-50/95 to-gray-50/95 backdrop-blur-sm text-gray-800 sticky top-0 z-50 shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src={Logo}
              width={80}
              height={80}
              alt="IsoXpert"
              className="rounded-full shadow-lg ring-2 ring-white/50 transition-transform hover:scale-105"
            />
            <span className="text-3xl font-bold text-gray-800 tracking-tight"></span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} pathname={pathname} />
            ))}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-0 md:hidden">
                <Menu size={30} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-[#303642]"
            >
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <MobileNavItem
                    key={item.href}
                    {...item}
                    pathname={pathname}
                    setIsOpen={setIsOpen}
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function NavItem({ href, label, icon: Icon, pathname }) {
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative group">
      <span className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-[#00a79d] transition-colors">
        <Icon size={18} />
        <span>{label}</span>
      </span>
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00a79d]"
          layoutId="underline"
          initial={false}
        />
      )}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00a79d] opacity-0 group-hover:opacity-100"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
}

function MobileNavItem({ href, label, icon: Icon, pathname, setIsOpen }) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 text-lg font-medium p-2 rounded-lg transition-colors ${
        isActive ? "bg-[#00a79d] text-white" : "text-gray-700 hover:bg-[#00a79d]/10"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
}
