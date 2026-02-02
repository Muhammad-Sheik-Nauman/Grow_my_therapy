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
    <div className="min-h-screen bg-[#f5f0ed]">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-medium text-gray-900">
          Lilac Template
        </Link>
        <nav className="flex gap-8">
          <Link href="/blog" className="text-gray-900 hover:text-gray-600 transition-colors underline">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-gray-600 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* Blog Post Content */}
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-20 fade-in-up">
        {/* Date */}
        <p className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wider">
          MAR 11
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          Blog Post One
        </h1>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-gray-800 leading-relaxed">
            It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Don't worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what's going to separate this one from the rest. If you read the words back and don't hear your own voice in your head, that's a good sign you still have more work to do.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Be clear, be confident and don't overthink it. The beauty of your story is that it's going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.
          </p>
        </div>

        {/* Navigation to Next Post */}
        <div className="mt-16 pt-8 border-t border-gray-300 flex justify-end">
          <Link 
            href="/blog/2" 
            className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-2"
          >
            Blog Post Two
            <span className="text-3xl">›</span>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
