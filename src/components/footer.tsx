import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-10 border-t border-white/10 backdrop-blur-lg bg-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Logo */}
        <Image
          src="/copysa-logo.png"
          width={200}
          height={50}
          alt="Copysa Logo"
          className="filter invert brightness-0"
        />

        {/* Nav Links */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-white text-sm font-medium">
            <li>
              <a
                href="#how-it-works"
                className="hover:text-cyan-400 transition-colors"
              >
                نحوه کارکرد
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-cyan-400 transition-colors"
              >
                خدمات
              </a>
            </li>
            <li>
              <a
                href="#student-panel"
                className="hover:text-cyan-400 transition-colors"
              >
                پنل دانشجویی
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-cyan-400 transition-colors">
                سوالات متداول
              </a>
            </li>
          </ul>
        </nav>

        {/* Download Button */}
        <Link href="/download">
        <Button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 px-6 py-3 text-sm rounded-lg transition-all duration-300">
          دانلود کپیسا
        </Button>
        </Link>

        {/* Copyright */}
        <div className="text-gray-400 text-xs pt-4 border-t border-white/10 w-full">
          کلیه حقوق این سایت نزد شرکت ابر پردازش آسیا محفوظ است. © ۱۴۰۴
        </div>
      </div>
    </footer>
  );
}
