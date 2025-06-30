"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-800/95 via-slate-800/90 to-purple-900/95 backdrop-blur-xl border-t border-white/20 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-16 ">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          {/* Left: Logo + description + social + download */}
          <div className="flex flex-col items-start space-y-8 w-full lg:w-1/3 xl:w-2/5">
            <div className="p-4   transition-all duration-300">
              <Image
                src="/copysa-logo.png"
                width={250}
                height={45}
                alt="Copysa Logo"
                className="filter invert brightness-0 max-w-full h-auto"
              />
            </div>

            <p className="text-gray-300 leading-relaxed text-base md:text-[17px] lg:text-lg max-w-md">
              این دستگاه امکان چاپ آسان اسناد را در هر زمان و مکان فراهم می‌کند.
              با حذف مراحل پیچیده، زمان و هزینه را به‌طور قابل‌توجهی کاهش می‌دهد
              و تجربه‌ای سریع و کارآمد ارائه می‌دهد.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-purple-500/30 hover:border-purple-400/50 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
              >
                <FaInstagram
                  size={22}
                  className="text-gray-300 group-hover:text-purple-300"
                />
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-purple-500/30 hover:border-purple-400/50 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
              >
                <FaTelegramPlane
                  size={22}
                  className="text-gray-300 group-hover:text-purple-300"
                />
              </a>
            </div>

            <Link href="/download" className="w-full max-w-xs">
              <Button
                variant="outline"
                className="backdrop-blur-md bg-white/10 border w-full border-white/30 text-white px-6 py-6 text-md rounded-xl shadow-md hover:bg-purple-400/20 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 cursor-pointer font-medium"
              >
                دانلود کُپیسا
              </Button>
            </Link>
          </div>

          {/* Center: Useful links */}
          <div className="flex flex-col space-y-6 w-full lg:w-1/4">
            <h4 className="text-purple-300 text-xl lg:text-2xl font-bold mb-2 border-b border-purple-400/30 pb-3">
              لینک‌های مفید
            </h4>
            <nav className="space-y-2">
              {[
                { href: "#home", text: "خانه " },
                { href: "#how-it-works", text: "نحوه کارکرد" },
                { href: "#services", text: "خدمات" },
                { href: "#student-panel", text: "پنل دانشجویی" },
                { href: "#faq", text: "سوالات متداول" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => {
                    const section = document.querySelector(link.href);
                    if (!section) return;

                    const sectionRect = section.getBoundingClientRect();
                    const sectionHeight = sectionRect.height;
                    const sectionTop = sectionRect.top + window.scrollY;

                    // Calculate vertical offset to center the section in viewport
                    const yOffset = window.innerHeight / 2 - sectionHeight / 2;

                    const targetScrollY = sectionTop - yOffset;

                    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
                  }}
                  className="block p-4 rounded-lg hover:bg-purple-500/20  hover:text-purple-300 hover:translate-x-2 hover:shadow-md transition-all duration-300 text-base md:text-[17px] lg:text-lg text-gray-300 border border-transparent hover:border-purple-400/20"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Contact + map */}
          <div className="flex flex-col space-y-8 w-full lg:w-2/5">
            <h4 className="text-purple-300 text-xl lg:text-2xl font-bold border-b border-purple-400/30 pb-3">
              ارتباط با ما
            </h4>

            {/* Map container with glass effect */}
            <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/30 transition-all duration-300 group">
              <iframe
                title="آدرس ما"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1745.6510956756165!2d50.8762886!3d28.9487601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb447966d8f5a31%3A0xc9fdf38dca7cf2c!2z2b7Yp9ix2qkg2LnZhNmFINmIINmB2YbYp9mI2LHbjCDYrtmE24zYrCDZgdin2LHYsyAo2KjZiNi02YfYsSk!5e0!3m2!1sfa!2sde!4v1751172691627!5m2!1sfa!2sde"
                className="w-full h-52 md:h-60 lg:h-64 transition-all duration-300 group-hover:scale-105"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Address */}
            <div className="p-5 transition-all duration-300">
              <p className="text-gray-300 leading-relaxed text-base md:text-[17px] lg:text-lg">
                بوشهر، شهرک نیایش، پارک علم و فناوری خلیج فارس، ساختمان گلستان،
                اتاق C1-05 دفتر شرکت ابرپردازش آسیا
              </p>
            </div>

            {/* Phone numbers */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3   transition-all duration-300 flex-1">
                <div className="p-3 rounded-lg bg-purple-500/30 flex-shrink-0">
                  <FaPhoneAlt className="text-purple-300" size={18} />
                </div>
                <span className="text-base md:text-[17px] lg:text-lg font-medium">
                  ۰۷۷-۹۱۰۰۱۰۷۷
                </span>
              </div>
              <div className="flex items-center gap-3 transition-all duration-300 flex-1">
                <div className="p-3 rounded-lg bg-purple-500/30 flex-shrink-0">
                  <FaPhoneAlt className="text-purple-300" size={18} />
                </div>
                <span className="text-base md:text-[17px] lg:text-lg font-medium">
                  ۰۹۱۷-۹۸۸۰۴۵۲
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="relative mt-20 pt-8">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
          <div className="text-center">
            <div className="inline-block">
              <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                کلیه حقوق مادی و معنوی{" "}
                <Link
                  href="/"
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-300 font-medium"
                >
                  کُپیسا
                </Link>{" "}
                نزد{" "}
                <Link
                  href="https://abarpardazesh.com/"
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-300 font-medium"
                >
                  هلدینگ ابر پردازش آسیا
                </Link>{" "}
                محفوظ است. © ۱۴۰۴
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
    </footer>
  );
}
