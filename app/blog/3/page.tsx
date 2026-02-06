"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function BlogPost3() {
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
            src="https://physicianburnout.co.uk/wp-content/uploads/2016/06/burnout-recovery.png"
            alt="Burnout Recovery for High Achievers"
            className="w-full h-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 leading-tight">
          Burnout Recovery: Finding Balance as a High Achiever
        </h1>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-text-secondary leading-relaxed">
            Burnout doesn't happen overnight. It's the cumulative effect of pushing through stress, ignoring your body's signals, and maintaining unsustainable patterns over time. For high-achieving professionals, entrepreneurs, and creatives, burnout often feels like a personal failure, but it's actually a sign that your system needs recalibration.
          </p>

          <p className="text-text-secondary leading-relaxed">
            The signs of burnout go beyond exhaustion. You might feel emotionally disconnected from work that once energized you, experience chronic irritability or cynicism, struggle with focus and decision-making, or notice physical symptoms like headaches and sleep disturbances. Many high achievers continue pushing through these warning signs, believing rest is a luxury they can't afford.
          </p>

          <p className="text-text-secondary leading-relaxed">
            Recovery from burnout requires more than a vacation or weekend off. It involves examining the underlying patterns that led to burnout: perfectionism, difficulty setting boundaries, identity tied to productivity, and the belief that your worth depends on constant achievement. Through therapy, you can develop sustainable ways of working and living that honor both your ambition and your well-being.
          </p>

          <p className="text-text-secondary leading-relaxed">
            In my practice, I help high achievers reconnect with themselves beyond their accomplishments, establish healthier boundaries, and develop nervous system regulation skills. Recovery isn't about lowering your standards; it's about creating sustainable success that doesn't come at the cost of your health and relationships. You can achieve your goals without burning out in the process.
          </p>
        </div>

        {/* Navigation to Next Post */}
        <div className="mt-16 pt-8 border-t border-[#C5D1DA] flex justify-end">
          <Link 
            href="/blog/4" 
            className="text-2xl md:text-3xl font-bold text-text-primary hover:text-text-secondary transition-colors flex items-center gap-2"
          >
            Mindfulness in Daily Life
            <span className="text-3xl">›</span>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
