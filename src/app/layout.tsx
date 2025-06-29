import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "700"], // optional: customize weights
});
export const metadata: Metadata = {
  title: "کُپیسا | چاپ سریع و امن اسناد",
  description:
    "کُپیسا یک نرم‌افزار هوشمند برای چاپ سریع، امن و آسان اسناد از طریق موبایل یا کامپیوتر با استفاده از کد QR و فایل‌های رمزنگاری‌شده.",
  keywords: [
    "چاپ اسناد",
    "چاپ آنلاین",
    "کُپیسا",
    "پرینت با موبایل",
    "پرینت سریع",
    "پرینت امن",
    "نرم‌افزار چاپ",
    "Copysa",
  ],
  authors: [{ name: "Copysa", url: "https://copysa.ir" }],
  themeColor: "#0f172a",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "کُپیسا | چاپ سریع و امن اسناد با QR",
    description:
      "چاپ امن و آسان اسناد با اپلیکیشن Copysa، پشتیبانی از فرمت‌های متنوع، رمزنگاری فایل‌ها و دستگاه‌های قابل دسترس در سراسر شهر.",
    url: "https://copysa.ir",
    siteName: "Copysa",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "https://copysa.ir/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "کُپیسا - چاپ سریع و امن اسناد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "کُپیسا | چاپ سریع و امن اسناد",
    description:
      "چاپ امن و آسان اسناد با اپلیکیشن Copysa، با کد QR و رمزنگاری فایل‌ها.",
    images: ["https://copysa.ir/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="کُپیسا یک نرم‌افزار هوشمند برای چاپ سریع، امن و آسان اسناد از طریق موبایل یا کامپیوتر با استفاده از کد QR و فایل‌های رمزنگاری‌شده."
        />
      </head>
      <body className={`${vazirmatn.className} antialiased`}>{children}</body>
    </html>
  );
}
