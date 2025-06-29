"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Lazy-load non-critical sections
const HeroSection = lazy(() => import("@/components/hero-section"));
const HowItWorksSection = lazy(
  () => import("@/components/how-it-works-section")
);
const ServicesSection = lazy(() => import("@/components/service-section"));
const PrivacySection = lazy(() => import("@/components/student-plan-section"));
const FaqSection = lazy(() => import("@/components/faq-section"));

export default function CopysaLandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Animation variant for reuse
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-900 text-white overflow-hidden"
      dir="rtl"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      <Suspense
        fallback={<div className="text-center py-10">در حال بارگذاری...</div>}
      >
        <motion.div {...fadeInUp}>
          <HeroSection />
        </motion.div>
        <motion.div
          className="  bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          <HowItWorksSection />
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <ServicesSection />
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
        >
          <PrivacySection />
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
        >
          <FaqSection />
        </motion.div>
      </Suspense>

      <Footer />
    </div>
  );
}
