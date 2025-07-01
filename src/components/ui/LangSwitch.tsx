"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";

export default function LocaleSwitcher() {
  const t = useTranslations("Lang");
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const nextLocale: Locale = locale === "en" ? "fa" : "en";

  const handleToggle = () => {
    startTransition(() => {
      setUserLocale(nextLocale);
    });
  };

  return (
    <div className="flex  items-center space-x-2">
      <Button
        onClick={handleToggle}
        variant="ghost"
        size="lg"
        disabled={isPending}
        className="px-4  rounded-md border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-inner hover:text-purple-400 hover:bg-purple-400/20 transition"
      >
        <Languages />
        {nextLocale === "en" ? "EN" : "Fa"}
      </Button>
    </div>
  );
}
