"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  GraduationCap,
  Workflow,
  Shapes,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

interface HeaderProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const menuItems = [
  {
    href: "#home",
    label: "خانه ",
    icon: <Workflow className="w-5 h-5" />,
  },
  {
    href: "#how-it-works",
    label: "نحوه کارکرد",
    icon: <Workflow className="w-5 h-5" />,
  },
  {
    href: "#services",
    label: "خدمات",
    icon: <Shapes className="w-5 h-5" />,
  },
  {
    href: "#student-panel",
    label: "پنل دانشجویی",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    href: "#faq",
    label: "سوالات متداول",
    icon: <HelpCircle className="w-5 h-5" />,
  },
];

const dana = localFont({
  src: [
    { path: "../fonts/dana-thin.woff", weight: "100", style: "normal" },
    { path: "../fonts/dana-extralight.woff", weight: "200", style: "normal" },
    { path: "../fonts/dana-light.woff", weight: "300", style: "normal" },
    { path: "../fonts/dana-regular.woff", weight: "400", style: "normal" },
    { path: "../fonts/dana-medium.woff", weight: "500", style: "normal" },
    { path: "../fonts/dana-demibold.woff", weight: "600", style: "normal" },
    { path: "../fonts/dana-bold.woff", weight: "700", style: "normal" },
    { path: "../fonts/dana-extrabold.woff", weight: "800", style: "normal" },
    { path: "../fonts/dana-ultrabold.woff", weight: "900", style: "normal" },
    { path: "../fonts/dana-black.woff", weight: "950", style: "normal" },
  ],
  variable: "--font-dana",
  display: "swap",
});

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${dana.className} font-bold ${
          isScrolled
            ? "py-3 bg-black/40 backdrop-blur-md shadow-lg shadow-purple-700/20"
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
              width={200}
              height={50}
              alt="logo"
              className={`filter invert brightness-0 ${
                isMobileMenuOpen ? "hidden" : "block"
              } transition-all duration-400`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => {
                  const section = document.querySelector(href);
                  if (section) {
                    const yOffset =
                      -window.innerHeight / 2 +
                      section.getBoundingClientRect().height / 2;
                    const y =
                      section.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;

                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="text-white hover:text-purple-400 transition-colors"
              >
                {label}
              </button>
            ))}
            <Link href="/download">
              <Button
                variant="outline"
                className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-4 py-6 text-md rounded-lg shadow-md hover:bg-purple-400/20 hover:text-purple-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                دانلود کُپیسا
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
                  className="block cursor-pointer  text-lg text-gray-300 hover:text-purple-400 transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
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
                  className="w-full backdrop-blur-md bg-white/10 border border-white/30 text-white px-4 py-5 text-md rounded-lg shadow-md hover:bg-purple-400/20 hover:text-purple-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
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
