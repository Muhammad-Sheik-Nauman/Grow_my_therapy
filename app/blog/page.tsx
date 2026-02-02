"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Blog() {
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
  const blogPosts = [
    {
      id: 1,
      date: "3/11/19",
      title: "Blog Post One",
      image: "/img3.PNG",
    },
    {
      id: 2,
      date: "3/11/19",
      title: "Blog Post Two",
      image: "/img4.PNG",
    },
    {
      id: 3,
      date: "3/11/19",
      title: "Blog Post Three",
      image: "/img5.PNG",
    },
    {
      id: 4,
      date: "3/11/19",
      title: "Blog Post Four",
      image: "/img8.PNG",
    },
  ];

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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="w-full">
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-t-full overflow-hidden">
              <Image
                src="/img1.PNG"
                alt="The Lilac Blog"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The Lilac Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              My tiny corner of the internet where I talk about all things healing, heart, and wholeness.
            </p>
            <p className="text-lg md:text-xl font-medium text-gray-900">
              Glad you&apos;re here.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="space-y-4">
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <p className="text-sm text-gray-600">{post.date}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {post.title}
                </h2>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-block text-gray-900 underline hover:text-gray-600 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-accent-olive py-16 md:py-20 px-6 md:px-8 fade-in-up">
        <div className="max-w-3xl mx-auto text-center">
          <div className="border-2 border-white p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe
            </h2>
            <p className="text-white text-lg mb-8">
              Sign up with your email address to receive news and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 w-full sm:w-64 text-gray-900 placeholder-gray-500 bg-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium uppercase tracking-wider hover:bg-white hover:text-accent-olive transition-colors"
              >
                SIGN UP
              </button>
            </form>
            <p className="text-white text-sm mt-6">
              We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
