import { Smartphone, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function DownloadPage() {
  const t = useTranslations("Download");

  const downloads = [
    {
      title: t("bazzar"),
      icon: Smartphone,
      gradient: "from-green-500 to-green-600",
      version: t("bazzardesc"),
      buttonText: t("bazzarbtn"),
      buttonGradient: "from-green-500 to-green-600",
      ringColor: "green-400",
      href: "https://cafebazaar.ir/app/com.apax.copysa",
    },
    {
      title: t("webapp"),
      icon: Globe,
      gradient: "from-blue-500 to-blue-600",
      version: t("webappdesc"),
      buttonText: t("webappbtn"),
      buttonGradient: "from-blue-500 to-blue-600",
      ringColor: "blue-400",
      href: "https://app.copysa.ir/",
    },
  ];

  const features = [
    {
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      title: t("secure"),
      description: t("securedesc"),
    },
    {
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/20",
      title: t("compatible"),
      description: t("compatibledesc"),
    },
    {
      iconColor: "text-pink-400",
      bgColor: "bg-pink-500/20",
      title: t("ui"),
      description: t("uidesc"),
    },
    {
      iconColor: "text-green-400",
      bgColor: "bg-green-500/20",
      title: t("support"),
      description: t("supportdesc"),
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex underline items-center text-gray-300 hover:text-indigo-400 mb-6 sm:mb-8 transition-colors duration-200"
        >
          {t("back")}
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Download Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {downloads.map((dl, i) => {
            const Icon = dl.icon;
            return (
              <Card
                key={i}
                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${dl.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {dl.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-400">
                    {dl.version}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center w-full">
                  <Link href={dl.href} className="w-1/2">
                    <Button
                      className={` bg-gradient-to-r w-full ${dl.buttonGradient} hover:brightness-110 text-white py-3 focus:ring-2 focus:ring-${dl.ringColor}`}
                    >
                      {dl.buttonText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            {t("featuresTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 space-x-reverse"
              >
                <div
                  className={`w-10 h-10 ${f.bgColor} rounded-lg flex items-center justify-center mx-3`}
                >
                  <CheckCircle className={`w-6 h-6 ${f.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-400">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
