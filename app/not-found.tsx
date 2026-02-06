import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5f0ed] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <Link href="/" className="text-xl font-medium text-gray-900">
          Dr. Maya Reynolds, PsyD
        </Link>
        <nav className="flex gap-8">
          <Link href="/blog" className="text-gray-900 hover:text-gray-600 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-gray-600 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* 404 Content */}
      <main className="flex-grow max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-gray-900">
            We couldn&apos;t find the page you were looking for. This is either because:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-900">
            <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
            <li>The page you are looking for has been moved or deleted.</li>
          </ul>

          <p className="text-gray-900">
            You can return to our homepage by{" "}
            <Link href="/" className="underline hover:text-gray-600">
              clicking here
            </Link>
            , or you can try searching for the content you are seeking by{" "}
            <Link href="/" className="underline hover:text-gray-600">
              clicking here
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
