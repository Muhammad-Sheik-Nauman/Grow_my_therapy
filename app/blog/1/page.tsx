"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function BlogPost1() {
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
            src="https://resilientmindcounseling.com/wp-content/uploads/2024/02/Understanding-Anxiety-Disorders.jpg.webp"
            alt="Understanding Anxiety"
            className="w-full h-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 leading-tight">
          Understanding Anxiety: What It Is and How to Manage It
        </h1>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-text-secondary leading-relaxed">
            Anxiety is more than just feeling stressed or worried. It's a persistent sense of unease that can affect your daily life, relationships, and overall well-being. While everyone experiences anxiety from time to time, chronic anxiety can be debilitating and may require professional support.
          </p>

          <p className="text-text-secondary leading-relaxed">
            Understanding anxiety starts with recognizing its physical symptoms: racing heart, shortness of breath, tension in your body, and difficulty sleeping. These are your nervous system's way of responding to perceived threats, even when there's no immediate danger present.
          </p>

          <p className="text-text-secondary leading-relaxed">
            The good news is that anxiety is highly treatable. Through evidence-based approaches like Cognitive Behavioral Therapy (CBT), mindfulness practices, and nervous system regulation techniques, you can learn to manage anxiety effectively and reclaim your sense of calm and control.
          </p>

          <p className="text-text-secondary leading-relaxed">
            If you're struggling with persistent worry, panic attacks, or overwhelming anxiety, know that you don't have to navigate this alone. Professional support can help you develop the tools and insights needed to feel more grounded and present in your life.
          </p>
        </div>

        {/* Navigation to Next Post */}
        <div className="mt-16 pt-8 border-t border-[#C5D1DA] flex justify-end">
          <Link 
            href="/blog/2" 
            className="text-2xl md:text-3xl font-bold text-text-primary hover:text-text-secondary transition-colors flex items-center gap-2"
          >
            Healing from Trauma: EMDR
            <span className="text-3xl">›</span>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
