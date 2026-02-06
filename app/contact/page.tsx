"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Contact() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const socialImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlybJ-td_YhMZRu9VXWnKBoafr0MOy04K5Hw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj122L9UtpFfyoSwuLJPuBtXys4MzCcU8P6w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgeJZEBQvChvxsrmRQKbRJu3I85oQiueykA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VkvJnd5Duo6GvOOqJ4pbrWkl832J0tgcKA&s"
  ];

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
          </Link>          <Link href="/contact" className="text-text-primary hover:text-text-secondary transition-colors underline">
            Contact
          </Link>
        </nav>
      </header>

      {/* Let's Connect Section */}
      <section className="bg-accent-blue py-16 md:py-20 px-6 md:px-8 fade-in-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Text Content and Images */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
                Let&apos;s Connect
              </h1>
              <p className="text-lg md:text-xl text-text-primary">
                Starting therapy is courageous.
              </p>
              <p className="text-lg md:text-xl text-text-primary">
                Get in touch for questions, or to book a free 15-minute consultation.
              </p>
            </div>

            {/* Flower Images */}
            <div className="relative w-fit mt-8">
              <div className="relative w-48 h-72 md:w-56 md:h-80 rounded-t-full overflow-hidden bg-accent-sage">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDgdPu3y_HakNKTm8cAumGLnXaSXRz7oUvA&s"
                  alt="Peaceful therapy space"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-8 -bottom-6 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/maya_pic.PNG"
                  alt="Dr. Maya Reynolds"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* HIPAA Notice */}
          <div className="bg-accent-olive text-white p-8 md:p-10 h-fit">
            <p className="text-sm md:text-base leading-relaxed">
              <span className="font-bold">PLEASE NOTE:</span> If you opt to use a "Form Block" on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
            </p>
          </div>
        </div>
      </section>

      {/* Book an Appointment Section */}
      <section className="bg-card-bg py-16 md:py-20 px-6 md:px-8 fade-in-up">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Book an appointment.
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Add some text here if you like, and add your scheduling widget below (you can get one by signing up for a scheduling account through Squarespace, the top-tier plan is HIPAA compliant OR you can use your client portal).
          </p>
          
          {/* Placeholder for scheduling widget */}
          <div className="mt-12 bg-white p-12 shadow-sm max-w-2xl mx-auto">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Schedule Your Consultation</h3>
              <p className="text-gray-600">
                If you&apos;re the owner, please log into your account to start a free trial or subscribe.
              </p>
              <button className="px-6 py-3 bg-gray-900 text-white font-medium uppercase tracking-wider hover:bg-gray-700 transition-colors">
                GO TO ACCOUNT
              </button>
              <p className="text-sm text-gray-500 mt-8">
                Powered by <span className="font-semibold">acuity scheduling</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Office Section with Map */}
      <section className="bg-accent-olive py-16 md:py-20 px-6 md:px-8 fade-in-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Office Info */}
          <div className="text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              My Office
            </h2>
            <div className="space-y-4">
              <p className="text-lg">123 Example Street</p>
              <p className="text-lg">Minneapolis, MN</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">Hours</h3>
              <p className="text-lg">Monday to Friday</p>
              <p className="text-lg">10am to 6pm</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="relative w-full h-80 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90470.01074077625!2d-93.34429914335938!3d44.97066489999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f7aee07!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            />
          </div>
        </div>
      </section>

      {/* Find Me on Social Section */}
      <section className="py-16 md:py-20 px-6 md:px-8 fade-in-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-12">
            Find me on social.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {socialImages.map((img, index) => (
              <div 
                key={index}
                className="relative aspect-square cursor-pointer overflow-hidden bg-card-bg border border-gray-400 rounded-2xl hover:shadow-lg transition-shadow"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Social media image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:opacity-80 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Social media image enlarged"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
