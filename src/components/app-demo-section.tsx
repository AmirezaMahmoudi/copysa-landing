export default function AppDemoSection() {
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              نحوه کارکرد
            </span>
          </h2>
          <p className="text-gray-400 text-lg">در سه مرحله ساده فایل‌هایتان را چاپ کنید</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">۱</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">آپلود فایل</h3>
            <p className="text-gray-400">فایل خود را از گوشی یا کامپیوتر آپلود کنید</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">۲</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">دریافت کد</h3>
            <p className="text-gray-400">کد QR یا شناسه منحصر به فرد دریافت کنید</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">۳</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">چاپ فوری</h3>
            <p className="text-gray-400">در دستگاه ACM کد را اسکن کنید و چاپ کنید</p>
          </div>
        </div>
      </div>
    </section>
  )
}
