"use client";

import { Settings2, UploadCloud, QrCode, File } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HowItWorksSection() {
  const t = useTranslations("How it works");
  const steps = [
    {
      icon: UploadCloud,
      title: t("uploadTitle"),
      description: t("uploadDesc"),
    },
    {
      icon: Settings2,
      title: t("settingTitle"),
      description: t("settingDesc"),
    },
    {
      icon: QrCode,
      title: t("codeTitle"),
      description: t("codeDesc"),
    },
    {
      icon: File,
      title: t("printTitle"),
      description: t("printDesc"),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative z-10 px-4 py-20 bg-gradient-to-b "
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center ">
          <motion.h2
            id="how-it-works-heading"
            className="text-3xl font-bold mb-3 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className=" ">{t("title")}</span>
          </motion.h2>
          <motion.p
            className="text-white text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t("description")}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <motion.div
            className="space-y-4 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card className="bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 p-1">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center shrink-0">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-3xl blur-2xl scale-105" />
              <div className="relative mx-auto transition-all duration-300 ">
                <Image
                  src="/upload.png"
                  width={500}
                  height={700}
                  alt="تصویر پیش‌نمایش رابط کاربری بارگذاری سند"
                  className="rounded-3xl md:translate-y-5 md:-translate-x-5"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
