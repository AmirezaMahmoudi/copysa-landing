"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "چه فرمت‌هایی پشتیبانی می‌شود؟",
      answer:
        "Copysa از تمام فرمت‌های رایج شامل PDF، Word، PowerPoint، Excel، تصاویر JPG/PNG/GIF، و فایل‌های متنی پشتیبانی می‌کند. همچنین فرمت‌های خاص مانند AutoCAD و فایل‌های فشرده نیز قابل چاپ هستند.",
    },
    {
      question: "آیا فایل‌هایم امن هستند؟",
      answer:
        "بله، کاملاً امن هستند. تمام فایل‌ها با رمزنگاری AES-256 محافظت می‌شوند و بلافاصله پس از چاپ موفق یا حداکثر پس از ۲۴ ساعت به صورت کامل حذف می‌شوند. هیچ فردی به محتوای فایل‌های شما دسترسی ندارد.",
    },
    {
      question: "چگونه دستگاه ACM پیدا کنم؟",
      answer:
        "در اپلیکیشن Copysa، بخش 'یافتن دستگاه' وجود دارد که نزدیک‌ترین دستگاه‌های ACM را بر اساس موقعیت شما نشان می‌دهد. همچنین می‌توانید از نقشه آنلاین ما در وب‌سایت استفاده کنید.",
    },
    {
      question: "اگر کد QR کار نکرد چه کنم؟",
      answer:
        "اگر کد QR خوانده نشد، می‌توانید از کد OTP عددی استفاده کنید که همراه با QR ارسال می‌شود. همچنین مطمئن شوید که صفحه گوشی تمیز باشد و نور کافی وجود داشته باشد. در صورت مشکل، با پشتیبانی تماس بگیرید.",
    },
    
    {
      question: "آیا می‌توانم چندین فایل را همزمان چاپ کنم؟",
      answer:
        "بله، می‌توانید تا ۱۰ فایل را همزمان انتخاب کرده و برای هر کدام تنظیمات جداگانه اعمال کنید. تمام فایل‌ها با یک کد QR قابل چاپ خواهند بود و به ترتیب انتخاب شما چاپ می‌شوند.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section id="faq" className="relative z-10 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">
            <span className="">
              سوالات متداول
            </span>
          </h2>
          <p className="text-gray-400 text-lg">پاسخ سوالات رایج کاربران درباره کُپیسا</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 py-2"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-right flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <div className="flex items-center">
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {openFaq === index && (
                  <div className="px-6 py-4">
                    <p className="text-gray-300 leading-8 ">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
