import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            نظرات{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              کاربران
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardContent className="p-8 text-right">
              <div className="flex mb-4 justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "ACM واقعاً زندگی دانشجویی من را آسان کرده. دیگر نیازی به نگرانی برای چاپ جزوات ندارم!"
              </p>
              <div className="flex items-center justify-end">
                <div className="text-right mr-4">
                  <p className="font-semibold">سارا احمدی</p>
                  <p className="text-gray-400 text-sm">دانشجوی مهندسی</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardContent className="p-8 text-right">
              <div className="flex mb-4 justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "سرعت و راحتی استفاده از ACM فوق‌العاده است. حتی از محتوای آپلودی‌ام درآمد کسب می‌کنم."
              </p>
              <div className="flex items-center justify-end">
                <div className="text-right mr-4">
                  <p className="font-semibold">علی رضایی</p>
                  <p className="text-gray-400 text-sm">دانشجوی پزشکی</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardContent className="p-8 text-right">
              <div className="flex mb-4 justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "بهترین راه‌حل برای چاپ سریع و بدون دردسر. به همه دوستانم پیشنهاد می‌دهم."
              </p>
              <div className="flex items-center justify-end">
                <div className="text-right mr-4">
                  <p className="font-semibold">مریم کریمی</p>
                  <p className="text-gray-400 text-sm">دانشجوی حقوق</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
