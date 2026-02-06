"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Footer from "@/components/Footer";

export default function Office() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary-bg/80 backdrop-blur-md border-b border-gray-400/20 flex items-center justify-between px-8 py-3 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-medium text-text-primary">
          Dr. Maya Reynolds, PsyD
        </Link>
        <nav className="flex gap-8">
          <Link href="/blog" className="text-text-primary hover:text-text-secondary transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-text-primary hover:text-text-secondary transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-20 fade-in-up">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              A Calm Space for Healing
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              My Santa Monica office is thoughtfully designed to feel grounding and safe, a place where you can pause, reflect, and do meaningful work. With natural light, comfortable seating, and a serene atmosphere, the space reflects my commitment to creating an environment where healing feels possible.
            </p>
          </div>
        </div>

        {/* Office Images Section */}
        <div className="section-spacing fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16">
            {/* Office Image 1 */}
            <div className="bg-card-bg border border-gray-400 overflow-hidden rounded-2xl hover:shadow-lg transition-shadow">
              <img
                src="/doc1.PNG"
                alt="Dr. Maya Reynolds therapy office"
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Office Image 2 */}
            <div className="bg-card-bg border border-gray-400 overflow-hidden rounded-2xl hover:shadow-lg transition-shadow">
              <img
                src="/doc2.PNG"
                alt="Therapy practice space in Santa Monica"
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Office Details Section */}
        <div className="section-spacing mb-20 fade-in-up">
          <div className="bg-card-bg border border-gray-400 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              What to Expect
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {/* Location */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Location
                </h3>
                <p className="text-gray-800">
                  Santa Monica, California
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Accessible and centrally located
                </p>
              </div>

              {/* Session Options */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Session Options
                </h3>
                <p className="text-gray-800">
                  In-person & Telehealth
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Flexible formats to meet your needs
                </p>
              </div>

              {/* Environment */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Environment
                </h3>
                <p className="text-gray-800">
                  Private & Comfortable
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  A space designed for safety and healing
                </p>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-gray-400">
              <p className="text-lg text-gray-800 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                Whether you choose to meet in person or online, my priority is creating a space where you feel heard, respected, and supported. The office features calming tones, comfortable furnishings, and an uncluttered aesthetic that helps you focus on your inner work.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                The therapy room is designed with your comfort in mind with soft lighting, comfortable seating, and a peaceful atmosphere that encourages openness and reflection. Privacy and confidentiality are paramount, and the space is arranged to help you feel at ease from the moment you arrive.
              </p>
            </div>
          </div>
        </div>

        {/* About the Practice Section */}
        <div className="section-spacing mb-20 fade-in-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              About the Practice
            </h2>
            
            <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
              <p>
                My Santa Monica practice offers a warm, professional environment where you can explore your thoughts and feelings without judgment. The office is conveniently located with easy access to parking and public transportation.
              </p>
              
              <p>
                Each session provides a dedicated hour where you have my full attention in a space designed specifically for therapeutic work. The room is soundproof to ensure complete privacy, and the atmosphere is intentionally calming to help you feel grounded and present.
              </p>
              
              <p>
                For those who prefer or require virtual sessions, I offer secure, HIPAA-compliant telehealth options that maintain the same quality of care and therapeutic relationship as in-person sessions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="section-spacing mb-20 fade-in-up">
          <div className="bg-accent-olive rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Schedule a Visit?
            </h2>
            <p className="text-lg text-white mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether you'd like to meet in person at the Santa Monica office or connect via telehealth, I'm here to support you. Reach out today to schedule a consultation.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-6 md:px-8 py-3 border-2 border-white text-white font-medium text-sm md:text-base uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors"
            >
              GET IN TOUCH →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
