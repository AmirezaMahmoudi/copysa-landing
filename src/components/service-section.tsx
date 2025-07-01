"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Metadata } from "next";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
  title: "سرویس‌های چاپ و اسکن کُپیسا | Copysa",
  description:
    "خدمات چاپ، اسکن، فکس و تهیه جزوات آموزشی در Copysa. با کیفیت بالا و سرعت بالا چاپ کنید.",
  keywords: ["چاپ", "کپی", "اسکن", "فکس", "جزوه", "Copysa", "خدمات چاپ"],
};

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "کاغذ سفید",
      subtitle: "دریافت سریع کاغذ",
      description: "دریافت کاغذ سفید در هر زمان",
      iconName: "mdi:file-document-outline",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-400/30",
      features: [
        "قیمت مقرون‌به‌صرفه",
        "در دسترس در سایزهای متنوع",
        "پشتیبانی ۲۴ ساعته برای تأمین سریع",
      ],
    },
    {
      id: 2,
      title: "کپی اسناد",
      subtitle: "کپی فوری اسناد مهم",
      description: "اسکن و کپی کردن اسناد",
      iconName: "mdi:file-multiple-outline",
      color: "from-emerald-400 to-green-500",
      bgColor: "from-emerald-500/10 to-green-500/10",
      borderColor: "border-emerald-400/30",
      features: [
        "سرعت اجرای بسیار بالا",
        "استفاده از پیشرفته‌ترین فناوری پردازش تصویر",
        "کیفیت خروجی فوق‌العاده بالا",
      ],
    },
    {
      id: 3,
      title: "چاپ اسناد",
      subtitle: "ارسال و چاپ از راه دور",
      description: "ارسال و چاپ اسناد با اپلیکیشن",
      iconName: "mdi:printer-outline",
      color: "from-purple-400 to-violet-500",
      bgColor: "from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-400/30",
      features: [
        "پشتیبانی از انواع فرمت‌ها ",
        "قابلیت چاپ در ابعاد متنوع",
        "امنیت بالا و حفظ محرمانگی اسناد",
      ],
    },
    {
      id: 4,
      title: "جزوات",
      subtitle: "چاپ جزوات برای دانشجویان",
      description: "چاپ و تهیه جزوات آموزشی",
      iconName: "mdi:book-open-page-variant-outline",
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-400/30",
      features: [
        "برگرفته از منابع معتبر دانشگاهی",
        "هزینه مناسب و اقتصادی  ",
        "امکان نشر سریع و آسان برای اساتید و دانشجویان",
      ],
    },
    {
      id: 5,
      title: "فرم‌های سازمانی",
      subtitle: "چاپ فرم‌ها و اسناد اداری",
      description: "چاپ فرم‌ها و اسناد اداری",
      iconName: "mdi:office-building-outline",
      color: "from-indigo-400 to-blue-500",
      bgColor: "from-indigo-500/10 to-blue-500/10",
      borderColor: "border-indigo-400/30",
      features: [
        " چاپ فرم‌های رسمی ",
        "دسترسی به آرشیو گسترده از فرم‌های سازمانی",
        "تسریع فرآیندهای اداری و کاهش اتلاف وقت",
      ],
    },
    {
      id: 6,
      title: "ارسال فکس",
      subtitle: "ارسال فکس داخلی و بین‌المللی",
      description: "ارسال فکس دیجیتال و سنتی",
      iconName: "mdi:fax",
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-400/30",
      features: [
        "امکان ارسال فکس آنلاین بدون نیاز به دستگاه",
        "دریافت تأییدیه تحویل برای هر پیام",
        "ارسال سریع با شماره‌گیر خودکار",
      ],
    },
  ];

  return (
    <section id="services" className="relative z-10 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 font-vazirmatn">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              خدمات
            </span>{" "}
            کُپیسا
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-vazirmatn">
            مجموعه کاملی از خدمات چاپ و اسکن برای تمام نیازهای شما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`bg-gradient-to-br ${service.bgColor} backdrop-blur-sm ${service.borderColor} border hover:scale-105 transition-all duration-300 group cursor-pointer py-1 h-full`}
              >
                <CardContent className="p-5 text-right flex flex-col justify-between h-full relative">
                  {/* Large faint background icon */}
                  <Icon
                    icon={service.iconName}
                    className="absolute top-2.5 left-2.5 opacity-10 w-28 h-28 text-white"
                  ></Icon>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <Icon
                          icon={service.iconName}
                          className="w-7 h-7 text-white"
                        ></Icon>
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-white font-vazirmatn mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300 font-vazirmatn mb-3">
                      {service.subtitle}
                    </p>

                    <ul className="text-white text-md space-y-2 font-vazirmatn">
                      {service.features?.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-green-400">✔</span> {item}
                        </li>
                      ))}
                    </ul>
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
