"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function BlogPost2() {
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
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-medium text-text-primary">
          Dr. Maya Reynolds, PsyD
        </Link>
        <nav className="flex gap-8">
          <Link href="/blog" className="text-text-primary hover:text-text-secondary transition-colors underline">
            Blog
          </Link>
          <Link href="/contact" className="text-text-primary hover:text-text-secondary transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* Blog Post Content */}
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-20 fade-in-up">
        {/* Date */}
        <p className="text-sm font-medium text-text-primary mb-6 uppercase tracking-wider">
          MAR 11
        </p>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzGnULugV6hzeoLJFys8nd9nxpL3RGpo2pw&s"
            alt="EMDR Therapy for Trauma Healing"
            className="w-full h-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 leading-tight">
          Healing from Trauma: The EMDR Approach
        </h1>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-text-secondary leading-relaxed">
            Trauma doesn't just live in our memories; it can become stored in our bodies and nervous systems, affecting how we feel, think, and move through the world. For many people, traditional talk therapy alone isn't enough to fully process traumatic experiences. That's where EMDR (Eye Movement Desensitization and Reprocessing) comes in.
          </p>

          <p className="text-text-secondary leading-relaxed">
            EMDR is an evidence-based therapy that helps your brain reprocess traumatic memories in a way that reduces their emotional intensity. Through bilateral stimulation (typically guided eye movements), EMDR allows you to access disturbing memories while simultaneously activating your brain's natural healing mechanisms. This process helps transform how these memories are stored, making them feel less overwhelming and intrusive.
          </p>

          <p className="text-text-secondary leading-relaxed">
            What makes EMDR unique is that you don't need to talk extensively about the trauma itself. The therapy works by helping your brain make new connections and integrate memories in a healthier way. Many clients report feeling lighter, more present, and less triggered by past experiences after EMDR sessions.
          </p>

          <p className="text-text-secondary leading-relaxed">
            In my practice, I combine EMDR with trauma-informed care and nervous system regulation techniques. Together, we create a safe foundation before processing trauma, ensuring you feel grounded and in control throughout the healing journey. If you've been carrying the weight of past experiences, EMDR can help you move beyond survival mode and into a life where you feel truly present.
          </p>
        </div>

        {/* Navigation to Next Post */}
        <div className="mt-16 pt-8 border-t border-[#C5D1DA] flex justify-end">
          <Link 
            href="/blog/3" 
            className="text-2xl md:text-3xl font-bold text-text-primary hover:text-text-secondary transition-colors flex items-center gap-2"
          >
            Burnout Recovery: Finding Balance
            <span className="text-3xl">›</span>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
