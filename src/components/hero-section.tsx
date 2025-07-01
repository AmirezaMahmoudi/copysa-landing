import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-10 px-6 pt-36 pb-20"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            className="text-right"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1
              id="hero-heading"
              className="text-5xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Copysa{" "}
              </span>
              چاپ هوشمند
            </h1>

            <p className="text-lg md:text-xl text-justify text-gray-300 mb-8 leading-relaxed">
              این دستگاه به شما این امکان را می‌دهد که به راحتی اسناد خود را چاپ
              نمایید. شما می‌‌توانید در هر زمان و هر مکان به راحتی اسناد خود را
              چاپ کنید. این دستگاه شما را از پیچیدگی‌های چاپ اسناد رها می‌‌سازد
              و زمان و هزینه خود را به طور چشمگیری کاهش دهد.
            </p>

            {/* Download Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link href="/download" passHref>
                <Button
                  size="lg"
                  className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-6 py-5 text-lg rounded-lg shadow-md hover:bg-white/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  aria-label="دانلود کُپیسا"
                >
                  دانلود کُپیسا
                </Button>
              </Link>
            </div>

            {/* Platforms */}
            <div className="mt-8 flex items-center">
              <p className="text-md text-gray-400 ml-4">سازگار با:</p>
              <div className="flex ">
                {[
                  {
                    icon: "mdi:android",
                    label: "Android",
                    color: "text-green-400",
                  },
                  {
                    icon: "mdi:windows",
                    label: "Windows",
                    color: "text-blue-400",
                  },
                  {
                    icon: "mdi:apple",
                    label: "iOS",
                    color: "text-grey-400",
                  },
                  {
                    icon: "mdi:laptop-mac",
                    label: "macOS",
                    color: "text-grey-400",
                  },
                  {
                    icon: "mdi:linux",
                    label: "Linux",
                    color: "text-grey-400",
                  },
                ].map(({ icon, label, color }, idx) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.2 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:scale-125 transition-all duration-300 rounded-lg flex items-center justify-center mx-3 mb-2">
                      <Icon
                        icon={icon}
                        className={`w-6 h-6 ${color}`}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-sm text-gray-400">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Device Mockup */}
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/device.png"
              width={375}
              height={200}
              alt="پیش‌نمایش دستگاه چاپ Copysa"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
