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
      title: "Understanding Anxiety: What It Is and How to Manage It",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hqXN8GFDiwsTPTZtoEvgiERQGFCsq5oVpg&s",
    },
    {
      id: 2,
      date: "3/11/19",
      title: "Healing from Trauma: The EMDR Approach",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzGnULugV6hzeoLJFys8nd9nxpL3RGpo2pw&s",
    },
    {
      id: 3,
      date: "3/11/19",
      title: "Burnout Recovery: Finding Balance as a High Achiever",
      image: "https://physicianburnout.co.uk/wp-content/uploads/2016/06/burnout-recovery.png",
    },
    {
      id: 4,
      date: "3/11/19",
      title: "The Power of Mindfulness in Daily Life",
      image: "https://media.licdn.com/dms/image/v2/C4E12AQFphSwImavfSw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1579021538120?e=2147483647&v=beta&t=9E8FsveukrbbKsNTc5RfWqPxjLVtZhI3hnDd_bk_bQg",
    },
  ];

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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="w-full">
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-t-full overflow-hidden bg-accent-sage">
              <Image
                src="/maya_pic.PNG"
                alt="Dr. Maya Reynolds"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              Dr. Maya's Blog
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              Insights on anxiety, trauma, and sustainable well-being.
            </p>
            <p className="text-lg md:text-xl font-medium text-text-primary">
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
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <p className="text-sm text-text-secondary">{post.date}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                  {post.title}
                </h2>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-block text-text-primary underline hover:text-text-secondary transition-colors"
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
                className="px-4 py-3 w-full sm:w-64 text-text-primary placeholder-text-secondary bg-white"
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
