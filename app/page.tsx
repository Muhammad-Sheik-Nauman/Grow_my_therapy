"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openBackground, setOpenBackground] = useState<number | null>(null);

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleBackground = (index: number) => {
    setOpenBackground(openBackground === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f5f0ed]">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-medium text-gray-900">
          Lilac Template
        </Link>
        <nav className="flex gap-8">
          <Link href="/blog" className="text-gray-900 hover:text-gray-600 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-gray-600 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 fade-in-up">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="w-72 h-96 md:w-80 md:h-[420px] lg:w-96 lg:h-[500px] rounded-t-full overflow-hidden bg-accent-blue">
              <Image
                src="/img1.PNG"
                alt="Person holding lilac flowers"
                width={384}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              Live your life in full bloom
            </h1>
            <p className="text-lg md:text-xl text-gray-900 mb-6 md:mb-8">
              Therapy for Adults in Minneapolis, MN.
            </p>
            <Link 
              href="/contact" 
              className="btn-primary"
            >
              CONNECT WITH ME →
            </Link>
          </div>
        </div>
      </main>

      {/* Live a Fulfilling Life Section */}
      <section className="section-spacing bg-card-bg overflow-hidden fade-in-up">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="flex-1 px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex flex-col">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
                Live a fulfilling life.
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Life can be challenging—especially when you're trying to balance your personal and professional life.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-400">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-base font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                GET IN TOUCH →
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src="/img2.PNG"
              alt="Coffee and flowers on a desk"
              width={600}
              height={480}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-8 fade-in-up">        {/* My Specialties Section */}
        <div className="section-spacing">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-10 md:mb-16">
            My Specialties
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Self-Esteem Card */}
            <div className="bg-card-bg border border-gray-400 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Self-Esteem
              </h3>
              <p className="text-gray-800 leading-relaxed mb-8">
                Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.
              </p>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                  <Image
                    src="/img3.PNG"
                    alt="Person standing by window"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Relationships Card */}
            <div className="bg-card-bg border border-gray-400 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Relationships
              </h3>
              <p className="text-gray-800 leading-relaxed mb-8">
                Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.
              </p>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                  <Image
                    src="/img4.PNG"
                    alt="Person sitting outdoors"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Burnout Card */}
            <div className="bg-card-bg border border-gray-400 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Burnout
              </h3>
              <p className="text-gray-800 leading-relaxed mb-8">
                Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.
              </p>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                  <Image
                    src="/img5.PNG"
                    alt="Person sitting by bookshelf"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You Don't Have to Do This All Alone Section */}
        <div className="section-spacing fade-in-up">
          <div className="flex flex-col md:flex-row items-stretch overflow-hidden rounded-2xl md:rounded-3xl">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <Image
                src="/img6.PNG"
                alt="Person looking up peacefully"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 bg-accent-purple px-6 md:px-10 lg:px-12 py-10 md:py-14 lg:py-16 flex flex-col">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
                  You don't have to do this <em className="italic font-bold">all alone.</em>
                </h2>
                
                <p className="text-lg text-gray-900 mb-6">
                  If you are facing any of these, there's hope:
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-gray-900">
                    <span className="mt-1">•</span>
                    <span>Persistent feelings of sadness or hopelessness</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-900">
                    <span className="mt-1">•</span>
                    <span>Trouble focusing or making decisions</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-900">
                    <span className="mt-1">•</span>
                    <span>Difficulty maintaining relationships</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-900">
                    <span className="mt-1">•</span>
                    <span>Feeling constantly exhausted or unmotivated</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-900">
                    <span className="mt-1">•</span>
                    <span>A pervasive sense of being overwhelmed</span>
                  </li>
                </ul>

                <p className="text-lg text-gray-900">
                  With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-400">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-base font-medium text-gray-900 hover:text-gray-600 transition-colors"
                >
                  WORK WITH ME →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hi, I'm Lilac Section */}
        <div className="section-spacing fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Text Content */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Hi, I'm Lilac.
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.
              </p>
              <Link 
                href="/contact" 
                className="btn-primary"
              >
                LET'S CHAT →
              </Link>
            </div>

            {/* Flower Images */}
            <div className="flex-shrink-0 relative w-full md:w-auto flex justify-center md:justify-end">
              <div className="relative">
                {/* Arch background shape with flower */}
                <div className="w-72 h-80 md:w-80 md:h-96 bg-accent-blue rounded-t-full flex items-start justify-center pt-12 md:pt-16">
                  <Image
                    src="/img7.PNG"
                    alt="Lilac flowers"
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                </div>
                {/* Circular flower overlay */}
                <div className="absolute -bottom-12 -right-8">
                  <Image
                    src="/img7.PNG"
                    alt="White flowers"
                    width={180}
                    height={180}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="section-spacing mb-12 md:mb-20 fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Image Section */}
            <div className="flex-shrink-0">
              <div className="w-72 h-80 md:w-80 md:h-96 bg-accent-blue rounded-t-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/img8.PNG"
                  alt="Lavender flowers in vase"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* FAQ Content */}
            <div className="flex-1 max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12">
                FAQs
              </h2>
              
              <div className="space-y-6">
                {/* FAQ Item 1 */}
                <div className="border-t border-gray-400 pt-6">
                  <button 
                    onClick={() => toggleFaq(0)}
                    className="flex items-start justify-between gap-4 w-full text-left group"
                  >
                    <span className="text-2xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors flex-1">
                      Do you take insurance?
                    </span>
                    <span className="text-2xl text-gray-900 mt-1">{openFaq === 0 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 0 && (
                    <div className="mt-4 text-lg text-gray-800 pl-0">
                      Answer goes here.
                    </div>
                  )}
                </div>

                {/* FAQ Item 2 */}
                <div className="border-t border-gray-400 pt-6">
                  <button 
                    onClick={() => toggleFaq(1)}
                    className="flex items-start justify-between gap-4 w-full text-left group"
                  >
                    <span className="text-2xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors flex-1">
                      What are your rates?
                    </span>
                    <span className="text-2xl text-gray-900 mt-1">{openFaq === 1 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 1 && (
                    <div className="mt-4 text-lg text-gray-800 pl-0">
                      Answer goes here.
                    </div>
                  )}
                </div>

                {/* FAQ Item 3 */}
                <div className="border-t border-gray-400 pt-6">
                  <button 
                    onClick={() => toggleFaq(2)}
                    className="flex items-start justify-between gap-4 w-full text-left group"
                  >
                    <span className="text-2xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors flex-1">
                      Do you have any openings?
                    </span>
                    <span className="text-2xl text-gray-900 mt-1">{openFaq === 2 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 2 && (
                    <div className="mt-4 text-lg text-gray-800 pl-0">
                      Answer goes here.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Professional Background Section */}
        <div className="section-spacing mb-12 md:mb-20 max-w-3xl mx-auto px-4 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            My Professional Background
          </h2>
          
          <div className="space-y-6">
            {/* Education */}
            <div className="border-t border-gray-400 pt-6">
              <button 
                onClick={() => toggleBackground(0)}
                className="flex items-center justify-between w-full text-left group"
              >
                <span className="text-2xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                  Education
                </span>
                <span className="text-2xl text-gray-900">{openBackground === 0 ? '−' : '+'}</span>
              </button>
              {openBackground === 0 && (
                <div className="mt-4 text-lg text-gray-800">
                  Answer goes here.
                </div>
              )}
            </div>

            {/* Licensure */}
            <div className="border-t border-gray-400 pt-6">
              <button 
                onClick={() => toggleBackground(1)}
                className="flex items-center justify-between w-full text-left group"
              >
                <span className="text-2xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                  Licensure
                </span>
                <span className="text-2xl text-gray-900">{openBackground === 1 ? '−' : '+'}</span>
              </button>
              {openBackground === 1 && (
                <div className="mt-4 text-lg text-gray-800">
                  Answer goes here.
                </div>
              )}
            </div>

            {/* Certifications */}
            <div className="border-t border-gray-400 pt-6">
              <button 
                onClick={() => toggleBackground(2)}
                className="flex items-center justify-between w-full text-left group"
              >
                <span className="text-2xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                  Certifications
                </span>
                <span className="text-2xl text-gray-900">{openBackground === 2 ? '−' : '+'}</span>
              </button>
              {openBackground === 2 && (
                <div className="mt-4 text-lg text-gray-800">
                  Answer goes here.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Get Started CTA Section */}
      <section className="bg-accent-olive py-12 md:py-16 lg:py-20 px-6 md:px-8 fade-in-up">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
            Get started today.
          </h2>
          <p className="text-lg text-white mb-4 leading-relaxed">
            Ready to take the first step towards a happier, healthier you?
          </p>
          <p className="text-lg text-white mb-10 leading-relaxed">
            Contact me to book your first session. I look forward to starting this therapeutic journey with you.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-6 md:px-8 py-3 border-2 border-white text-white font-medium text-sm md:text-base uppercase tracking-wider hover:bg-white hover:bg-accent-olive transition-colors"
          >
            GET IN TOUCH →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
