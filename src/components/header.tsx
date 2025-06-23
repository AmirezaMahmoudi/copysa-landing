"use client";

import { useState, useEffect } from "react";
import { Menu, X, Printer, Zap, Shield, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const menuItems = [
  {
    href: "#how-it-works",
    label: "نحوه کارکرد",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    href: "#services",
    label: "خدمات",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    href: "#student-panel",
    label: "پنل دانشجویی",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    href: "#faq",
    label: "سوالات متداول",
    icon: <HelpCircle className="w-5 h-5" />,
  },
];

export default function Header({
  isMobileMenuOpen,
  toggleMobileMenu,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-slate-900/80 backdrop-blur-lg shadow-lg shadow-purple-900/20"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            aria-label="منوی موبایل"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
          {/* Logo */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <Image
              src="/copysa-logo.png"
              width={225}
              height={50}
              alt="logo"
              className="filter invert brightness-0"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                {label}
              </a>
            ))}
            <Link href="/download">
              <Button
                variant="outline"
                className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-4 py-3 text-md rounded-lg shadow-md hover:bg-purple-400/20 hover:text-purple-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                دانلود کپیسا
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        ></div>
        <div
          className={`absolute top-0 right-0 w-80 h-full bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <div className="space-y-6">
              {menuItems.map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  className="block  text-lg text-gray-300 hover:text-cyan-400 transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                  onClick={toggleMobileMenu}
                >
                  <div className="flex items-center justify-start space-x-3 ">
                    {icon}
                    <span>{label}</span>
                  </div>
                </a>
              ))}

              <div className="border-t border-white/10 pt-6">
                <Button
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold"
                  onClick={toggleMobileMenu}
                >
                  دانلود اپلیکیشن
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
