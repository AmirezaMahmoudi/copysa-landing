"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Metadata } from "next";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "سرویس‌های چاپ و اسکن کُپیسا | Copysa",
  description:
    "خدمات چاپ، اسکن، فکس و تهیه جزوات آموزشی در Copysa. با کیفیت بالا و سرعت بالا چاپ کنید.",
  keywords: ["چاپ", "کپی", "اسکن", "فکس", "جزوه", "Copysa", "خدمات چاپ"],
};

export default function ServicesSection() {
  const t = useTranslations("Services");

  const services = [
    {
      id: 1,
      title: t("servicetitlepaper"),
      subtitle: t("servicesubtitlepaper"),
      description: t("servicedescriptionpaper"),
      iconName: "mdi:file-document-outline",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-400/30",
      features: [
        t("servicefeatures1paper"),
        t("servicefeatures2paper"),
        t("servicefeatures3paper"),
      ],
    },
    {
      id: 2,
      title: t("servicescopytitle"),
      subtitle: t("servicescopysubtitle"),
      description: t("servicescopydescription"),
      iconName: "mdi:file-multiple-outline",
      color: "from-emerald-400 to-green-500",
      bgColor: "from-emerald-500/10 to-green-500/10",
      borderColor: "border-emerald-400/30",
      features: [
        t("servicescopyfeatures0"),
        t("servicescopyfeatures1"),
        t("servicescopyfeatures2"),
      ],
    },
    {
      id: 3,
      title: t("servicesprinttitle"),
      subtitle: t("servicesprintsubtitle"),
      description: t("servicesprintdescription"),
      iconName: "mdi:printer-outline",
      color: "from-purple-400 to-violet-500",
      bgColor: "from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-400/30",
      features: [
        t("servicesprintfeatures0"),
        t("servicesprintfeatures1"),
        t("servicesprintfeatures2"),
      ],
    },
    {
      id: 4,
      title: t("servicesbooklettitle"),
      subtitle: t("servicesbookletsubtitle"),
      description:t("servicesbookletdescription"),
      iconName: "mdi:book-open-page-variant-outline",
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-400/30",
      features: [
        t("servicesbookletfeatures0"),
        t("servicesbookletfeatures1"),
        t("servicesbookletfeatures2"),
      ],
    },
    {
      id: 5,
      title: t("servicesformstitle"),
      subtitle: t("servicesformssubtitle"),
      description: t("servicesformsdescription"),
      iconName: "mdi:office-building-outline",
      color: "from-indigo-400 to-blue-500",
      bgColor: "from-indigo-500/10 to-blue-500/10",
      borderColor: "border-indigo-400/30",
      features: [
        t("servicesformsfeatures0"),
        t("servicesformsfeatures1"),
        t("servicesformsfeatures2"),
      ],
    },
    {
      id: 6,
      title: t("servicesfaxtitle"),
      subtitle: t("servicesfaxsubtitle"),
      description: t("servicesfaxdescription"),
      iconName: "mdi:fax",
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-400/30",
      features: [
        t("servicesfaxfeatures0"),
        t("servicesfaxfeatures1"),
        t("servicesfaxfeatures2"),
      ],
    },
  ];

  return (
    <section id="services" className="relative z-10 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 font-vazirmatn">
            {t("title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-vazirmatn">

            {t("description")}
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
                <CardContent className="p-5  flex flex-col justify-between h-full relative">
                  {/* Large faint background icon */}
                  <Icon
                    icon={service.iconName}
                    className="absolute top-2.5 ltr:right-2.5 rtl:left-2.5 opacity-10 w-28 h-28 text-white"
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
                      {service.description}
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
