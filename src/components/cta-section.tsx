import { Download, Smartphone, Monitor, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
export default function CtaSection() {
  return (
    <section className="relative z-10 px-6 pt-36 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-right">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Copysa {""}
              </span>
              چاپ هوشمند
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              این دستگاه به شما این امکان را می‌دهد که به راحتی اسناد خود را چاپ
              نمایید. شما می‌‌توانید در هر زمان و هر مکان به راحتی اسناد خود را
              چاپ کنید. این دستگاه شما را از پیچیدگی‌های چاپ اسناد رها می‌‌سازد
              و زمان و هزینه خود را به طور چشمگیری کاهش دهد.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link href="/download">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  دانلود رایگان
                  <Download className="mr-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            {/* Platform Icons */}
            <div className="mt-8 flex item-center ">
              <div className="flex items-center justify-start space-x-6">
                <p className="text-md text-gray-400 mb-4">سازگار با:</p>
                <div className=" flex flex-col justify-center items-center text-center">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2">
                    <Smartphone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-sm text-gray-400">Android</span>
                </div>
                <div className=" flex flex-col justify-center items-center text-center">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2">
                    <Monitor className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-400">Windows</span>
                </div>
                <div className=" flex flex-col justify-center items-center text-center">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2">
                    <Globe className="w-6 h-6 text-pink-400" />
                  </div>
                  <span className="text-sm text-gray-400">Web</span>
                </div>
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <div className="flex justify-end">
            <Image src="/device.png" width={375} height={200} alt="mockup" />
          </div>
        </div>
      </div>
    </section>
  );
}
