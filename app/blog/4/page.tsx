"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function BlogPost4() {
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
            src="https://media.licdn.com/dms/image/v2/C4E12AQFphSwImavfSw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1579021538120?e=2147483647&v=beta&t=9E8FsveukrbbKsNTc5RfWqPxjLVtZhI3hnDd_bk_bQg"
            alt="The Power of Mindfulness in Daily Life"
            className="w-full h-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 leading-tight">
          The Power of Mindfulness in Daily Life
        </h1>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-text-secondary leading-relaxed">
            Mindfulness isn't about emptying your mind or achieving perfect zen. It's about being present with whatever is happening right now (thoughts, emotions, sensations) without judgment or the need to fix or change anything. For busy professionals and high achievers, this simple practice can be transformative.
          </p>

          <p className="text-text-secondary leading-relaxed">
            The benefits of mindfulness are well-documented: reduced anxiety and stress, improved focus and decision-making, better emotional regulation, and enhanced overall well-being. But the real power of mindfulness lies in how it changes your relationship with your thoughts and emotions. Instead of being swept away by worry or stress, you learn to observe them with curiosity and compassion.
          </p>

          <p className="text-text-secondary leading-relaxed">
            You don't need hours of meditation to experience the benefits. Simple practices like mindful breathing for a few minutes, bringing full attention to routine activities like drinking coffee or walking, or doing a body scan before bed can make a significant difference. The key is consistency, not perfection.
          </p>

          <p className="text-text-secondary leading-relaxed">
            In therapy, I integrate mindfulness-based practices with other approaches to help clients develop greater self-awareness and emotional regulation. Whether you're dealing with anxiety, recovering from trauma, or navigating burnout, mindfulness can be a powerful tool for reconnecting with yourself and finding calm amidst life's challenges.
          </p>
        </div>

        {/* Navigation back to blog */}
        <div className="mt-16 pt-8 border-t border-[#C5D1DA] flex justify-end">
          <Link 
            href="/blog" 
            className="text-2xl md:text-3xl font-bold text-text-primary hover:text-text-secondary transition-colors flex items-center gap-2"
          >
            Back to Blog
            <span className="text-3xl">›</span>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
