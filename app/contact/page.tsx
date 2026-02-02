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
    "/img8.PNG",
    "/img2.PNG",
    "/img3.PNG",
    "/img7.PNG"
  ];

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
          <Link href="/contact" className="text-gray-900 hover:text-gray-600 transition-colors underline">
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Let&apos;s Connect
              </h1>
              <p className="text-lg md:text-xl text-gray-900">
                Starting therapy is courageous.
              </p>
              <p className="text-lg md:text-xl text-gray-900">
                Get in touch for questions, or to book a free 15-minute consultation.
              </p>
            </div>

            {/* Flower Images */}
            <div className="relative flex gap-4 mt-8">
              <div className="relative w-48 h-72 md:w-56 md:h-80 rounded-t-full overflow-hidden">
                <Image
                  src="/img8.PNG"
                  alt="Lilac flowers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-48 h-72 md:w-56 md:h-80 rounded-full overflow-hidden">
                <Image
                  src="/img5.PNG"
                  alt="White flowers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* HIPAA Notice */}
          <div className="bg-[#3d4a2c] text-white p-8 md:p-10 h-fit">
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
              <p className="text-lg">Monday – Friday</p>
              <p className="text-lg">10am – 6pm</p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Find me on social.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {socialImages.map((img, index) => (
              <div 
                key={index}
                className="relative aspect-square cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Social media image ${index + 1}`}
                  fill
                  className="object-cover hover:opacity-90 transition-opacity"
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
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Social media image enlarged"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
