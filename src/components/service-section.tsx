"use client";

import { FileText, Scan, Hash, BookOpen, Building, Send  } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سرویس‌های چاپ و اسکن کپیسا | Copysa",
  description:
    "خدمات چاپ، اسکن، فکس و تهیه جزوات آموزشی در Copysa. با کیفیت بالا و سرعت بالا چاپ کنید.",
  keywords: ["چاپ", "کپی", "اسکن", "فکس", "جزوه", "Copysa", "خدمات چاپ"],
};

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "کاغذ سفید",
      description: "  دریافت کاغذ سفید در هر زمان",
      icon: FileText,
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-400/30",
    },
    {
      id: 2,
      title: "کپی اسناد",
      description: "اسکن و کپی کردن اسناد",
      icon: Scan,
      color: "from-emerald-400 to-green-500",
      bgColor: "from-emerald-500/10 to-green-500/10",
      borderColor: "border-emerald-400/30",
    },
    {
      id: 3,
      title: "چاپ اسناد",
      description: "ارسال و چاپ اسناد با اپلیکیشن",
      icon: Hash,
      color: "from-purple-400 to-violet-500",
      bgColor: "from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-400/30",
    },
    {
      id: 4,
      title: "جزوات",
      description: "چاپ و تهیه جزوات آموزشی",
      icon: BookOpen,
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-400/30",
    },
    {
      id: 5,
      title: "فرم‌های سازمانی",
      description: "چاپ فرم‌ها و اسناد اداری",
      icon: Building,
      color: "from-indigo-400 to-blue-500",
      bgColor: "from-indigo-500/10 to-blue-500/10",
      borderColor: "border-indigo-400/30",
    },
    {
      id: 6,
      title: "ارسال فکس",
      description: "ارسال فکس دیجیتال و سنتی",
      icon: Send,
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-400/30",
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
            کپیسا
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-vazirmatn">
            مجموعه کاملی از خدمات چاپ و اسکن برای تمام نیازهای شما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`bg-gradient-to-br ${service.bgColor} backdrop-blur-sm ${service.borderColor} border hover:scale-105 transition-all duration-300 group cursor-pointer py-1`}
                >
                  <CardContent className="p-4 text-right">
                    <div className="flex justify-start mb-3">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white font-vazirmatn group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white leading-relaxed font-vazirmatn text-sm">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div
                        className={`h-1 bg-gradient-to-r ${service.color} rounded-full`}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
