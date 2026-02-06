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
    <div className="min-h-screen bg-primary-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary-bg/80 backdrop-blur-md border-b border-gray-400/20 flex items-center justify-between px-8 py-3 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-medium text-text-primary">
          Dr. Maya Reynolds, PsyD
        </Link>
        <nav className="flex gap-8 ml-8">
          <Link href="/blog" className="text-text-primary hover:text-text-secondary transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-text-primary hover:text-text-secondary transition-colors">
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
                src="/maya_pic.PNG"
                alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
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
              Anxiety, Trauma & Burnout Therapy in Santa Monica
            </h1>
            <p className="text-lg md:text-xl text-gray-900 mb-6 md:mb-8">
              Helping high-achieving adults navigate life's challenges with compassion and evidence-based care.
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
      <section className="section-spacing bg-card-bg overflow-hidden fade-in-up border-y border-gray-400">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="flex-1 px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex flex-col">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
                Find relief from what's holding you back.
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                You're high-achieving, thoughtful, and self-aware yet you feel stuck emotionally or constantly on edge. The lingering effects of past experiences, persistent anxiety, or overwhelming burnout are impacting your daily life.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Whether you're struggling with constant worry, difficulty sleeping, or feeling disconnected from yourself and your relationships, you don't have to navigate this alone.
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
          <div className="flex-shrink-0 w-full md:w-1/2 h-[600px] md:h-[700px]">
            <img
              src="https://media.istockphoto.com/id/1496615469/photo/serene-latin-woman-enjoy-sunset-with-gratitude.jpg?s=612x612&w=0&k=20&c=LXeGeLgKznGamU25tLajijCVuV5lxWIZH0RW5qN3k5g="
              alt="Serene peaceful moment at sunset"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-8 fade-in-up">        {/* My Specialties Section */}
        <div className="section-spacing">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-10 md:mb-16">
            How I Can Help
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Anxiety & Panic Card */}
            <div className="bg-card-bg border border-gray-400 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Anxiety & Panic Therapy
              </h3>
              <p className="text-gray-800 leading-relaxed mb-8">
                Feel relief from constant worry, panic attacks, and the physical symptoms of anxiety. Using evidence-based approaches like CBT and mindfulness, I'll help you understand your nervous system and develop tools to feel more grounded and in control.
              </p>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                  <img
                    src="https://bellcad.net/wp-content/uploads/2022/02/Anxiety.jpg"
                    alt="Anxiety relief and calm"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Trauma & EMDR Card */}
            <div className="bg-card-bg border border-gray-400 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Trauma & EMDR Therapy
              </h3>
              <p className="text-gray-800 leading-relaxed mb-8">
                Process past experiences that continue to affect your present. Through EMDR and trauma-informed care, we'll work on nervous system regulation, building safety, and helping you move beyond survival mode into a life where you feel truly present.
              </p>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                  <img
                    src="https://media.istockphoto.com/id/1383621461/vector/frustrated-woman-concept.jpg?s=612x612&w=0&k=20&c=ITH3bwke482eT_ZGOJp-icTDLNgYPqgRAeAtwlYMl40="
                    alt="Trauma healing and recovery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Burnout & Professional Stress Card */}
            <div className="bg-card-bg border border-gray-400 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
               Professional Stress
              </h3>
              <p className="text-gray-800 leading-relaxed mb-8">
                For entrepreneurs, creatives, and professionals feeling disconnected after years of pushing through stress. I specialize in helping high-achievers reconnect with themselves, set sustainable boundaries, and develop healthier patterns of living and working.
              </p>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkp6mAh0Ri02uSji0edhADWU_DOABWjqdPKA&s"
                    alt="Burnout and professional stress relief"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You Don't Have to Do This All Alone Section */}
        <div className="section-spacing fade-in-up">
          <div className="flex flex-col md:flex-row items-stretch overflow-hidden rounded-2xl md:rounded-3xl border border-gray-400">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src="https://managementweekly.org/wp-content/uploads/2022/03/perfectionism_featured.jpg"
                alt="Overcoming perfectionism and feeling stuck"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 bg-card-bg px-6 md:px-10 lg:px-12 py-10 md:py-14 lg:py-16 flex flex-col">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
                  You don't have to stay <em className="italic font-bold">stuck.</em>
                </h2>
                
                <p className="text-lg text-gray-900 mb-6">
                  You may be experiencing:
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-gray-900">
                    <span className="mt-1">•</span>
                    <span>Constant worry, tension in your body, or difficulty sleeping</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-900">
                    <span className="mt-1">•</span>
                    <span>A sense you're always bracing for something to go wrong</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-900">
                    <span className="mt-1">•</span>
                    <span>Past experiences that continue to affect your relationships and confidence</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-900">
                    <span className="mt-1">•</span>
                    <span>Professional burnout and disconnection from what once mattered</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-900">
                    <span className="mt-1">•</span>
                    <span>Difficulty regulating emotions or feeling safe in your own life</span>
                  </li>
                </ul>

                <p className="text-lg text-gray-900">
                  Through a grounded, supportive approach, I'll help you develop insight, resilience, and a stronger relationship with yourself.
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

        {/* Hi, I'm Dr. Maya Reynolds Section */}
        <div className="section-spacing fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-card-bg border border-gray-400 rounded-2xl p-8 md:p-12">
            {/* Text Content */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Hi, I'm Dr. Maya Reynolds.
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                I'm a licensed clinical psychologist based in Santa Monica, offering therapy for adults navigating anxiety, trauma, and burnout. I work with high-achieving, thoughtful individuals who feel stuck emotionally or on edge. My approach combines CBT, EMDR, mindfulness-based practices, and body-oriented techniques in a supportive yet reflective space. Therapy works best when you feel respected, understood, and actively involved. Let's work together to help you develop insight, resilience, and sustainable ways of living.
              </p>
              <Link 
                href="/contact" 
                className="btn-primary"
              >
                LET'S CHAT →
              </Link>
            </div>

            {/* Maya's Image */}
            <div className="flex-shrink-0 relative w-full md:w-auto flex justify-center md:justify-end">
              <div className="relative">
                {/* Arch background shape with Maya's photo */}
                <div className="w-72 h-80 md:w-80 md:h-96 bg-accent-sage rounded-t-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/maya_pic.PNG"
                    alt="Dr. Maya Reynolds"
                    width={320}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Office Section */}
        <div className="section-spacing fade-in-up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Office - Calm Space for Healing
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
              My Santa Monica office is thoughtfully designed to feel grounding and safe, a place where you can pause, reflect, and do meaningful work. With natural light, comfortable seating, and a serene atmosphere, the space reflects my commitment to creating an environment where healing feels possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12">
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

          {/* Office Details */}
          <div className="bg-card-bg border border-gray-400 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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

            <div className="pt-8 border-t border-gray-400 text-center">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Whether you choose to meet in person or online, my priority is creating a space where you feel heard, respected, and supported. The office features calming tones, comfortable furnishings, and an uncluttered aesthetic that helps you focus on your inner work.
              </p>
              <Link 
                href="/office" 
                className="btn-primary"
              >
                LEARN MORE ABOUT OUR OFFICE →
              </Link>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="section-spacing mb-12 md:mb-20 fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Image Section */}
            <div className="flex-shrink-0">
              <div className="w-72 h-80 md:w-80 md:h-96 bg-accent-sage rounded-t-full flex items-center justify-center overflow-hidden">
                <img
                  src="https://img.freepik.com/free-vector/speech-bubble-with-interrogation-sign-problem-icon_24911-114375.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="FAQ questions"
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
                      What is your therapeutic approach?
                    </span>
                    <span className="text-2xl text-gray-900 mt-1">{openFaq === 0 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 0 && (
                    <div className="mt-4 text-lg text-gray-800 pl-0">
                      I use an integrative approach that combines Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. Sessions are structured to feel supportive while leaving space for reflection and depth. My focus is on helping you develop practical tools alongside deeper insight and resilience.
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
                      Do you offer in-person or online therapy?
                    </span>
                    <span className="text-2xl text-gray-900 mt-1">{openFaq === 1 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 1 && (
                    <div className="mt-4 text-lg text-gray-800 pl-0">
                      I offer both in-person therapy at my Santa Monica office and secure telehealth sessions for greater flexibility. My office is designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Many clients appreciate having the option to switch between formats based on their needs.
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
                      Who do you work best with?
                    </span>
                    <span className="text-2xl text-gray-900 mt-1">{openFaq === 2 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 2 && (
                    <div className="mt-4 text-lg text-gray-800 pl-0">
                      I specialize in working with high-achieving, thoughtful adults who feel emotionally stuck or on edge. Many of my clients are entrepreneurs, creatives, or professionals dealing with anxiety, trauma, or burnout. If you're looking for a therapist who combines practical tools with depth-oriented work in a fast-paced yet supportive environment, we may be a good fit.
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
          
          <div className="space-y-6 bg-card-bg border border-gray-400 rounded-2xl p-8">
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
                  PsyD in Clinical Psychology
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
                  Licensed Clinical Psychologist, California
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
                  Specializations
                </span>
                <span className="text-2xl text-gray-900">{openBackground === 2 ? '−' : '+'}</span>
              </button>
              {openBackground === 2 && (
                <div className="mt-4 text-lg text-gray-800">
                  <ul className="space-y-2">
                    <li>• Cognitive Behavioral Therapy (CBT)</li>
                    <li>• EMDR (Eye Movement Desensitization and Reprocessing)</li>
                    <li>• Mindfulness-Based Practices</li>
                    <li>• Trauma-Informed Care</li>
                    <li>• Body-Oriented Techniques</li>
                  </ul>
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
            Ready to take the first step?
          </h2>
          <p className="text-lg text-white mb-4 leading-relaxed">
            If you're looking for a therapist who combines practical tools with depth-oriented work and understands the realities of being a high-achieving adult, I may be a good fit.
          </p>
          <p className="text-lg text-white mb-10 leading-relaxed">
            Reach out today to schedule a consultation and see if we're a match.
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
