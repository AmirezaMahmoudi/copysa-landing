"use client";

import { GraduationCap, Wallet , Percent } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "پنل دانشجویی کُپیسا | Copysa Student Panel",
  description:
    "مدیریت جزوات، دریافت اعتبار و اشتراک فایل در پنل دانشجویی کُپیسا. ویژه دانشجویان با امکان تخفیف برای خدمات چاپ.",
  keywords: [
    "پنل دانشجویی",
    "کُپیسا",
    "جزوه",
    "فایل آموزشی",
    "تخفیف چاپ",
    "Copysa Student",
  ],
};

export default function StudentPanelSection() {
  return (
    <section id="student-panel" className="relative z-10 px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          className="text-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 ">
            <span className="">
              پنل دانشجویی
            </span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed space-y-4 mb-3">
            پنل دانشجویی، بستری اختصاصی برای دانشجویان است تا بتوانند فایل‌های
            آموزشی خود را آپلود، مدیریت و به اشتراک بگذارند. این پنل با ارائه
            امکاناتی مانند کسب اعتبار از چاپ فایل‌ها و تخفیف‌های ویژه، تجربه‌ای
            کاربردی و سودمند را برای دانشجویان فراهم می‌کند.
          </p>
          <div className="flex justify-start">
            <Link href="https://edu.copysa.ir/auth/signup">
            <Button
              size="lg"
              className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-6 py-5 text-lg rounded-lg shadow-md hover:bg-white/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
              ثبت نام در پنل دانشجویی
            </Button>
              </Link>
          </div>
          <h3 className="mt-2">
            * توجه داشته باشید برای عضویت در پنل دانشجویی می‌بایست اول در کُپیسا
            <Link
              href="https://app.copysa.ir/auth/signup"
              className="underline text-cyan-400"
            >
              {" "}
              ثبت نام
            </Link>{" "}
            کنید.
          </h3>
        </motion.div>

        {/* Feature Cards */}
        <div className="space-y-6">
          {[
            {
              icon: GraduationCap,
              title: " اشتراک جزوات",
              description:
                "آپلود و اشتراک‌گذاری آسان جزوه‌ها و فایل‌های آموزشی با دیگر دانشجویان.",
            },
            {
              icon: Wallet,
              title: " کسب درآمد",
              description:
                "با چاپ فایل شما توسط دیگران، اعتبار دریافت کنید و درآمد کسب کنید.",
            },
            {
              icon: Percent,
              title: " تخفیف‌های ویژه ",
              description:
                "استفاده از تخفیف‌های اختصاصی برای خدمات چاپ و امکانات دیگر.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 py-3 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-3 py-2 flex items-start gap-4 text-right">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 ">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
