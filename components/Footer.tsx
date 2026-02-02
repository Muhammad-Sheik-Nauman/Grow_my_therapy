import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-card-bg py-10 md:py-12 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Lilac Template Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Lilac Template
            </h3>
            <address className="not-italic text-gray-800 mb-6">
              <p>123 Example Road</p>
              <p>Minneapolis, MN</p>
            </address>
            <div className="space-y-2">
              <p>
                <a href="mailto:email@example.com" className="text-gray-900 underline hover:text-gray-600">
                  email@example.com
                </a>
              </p>
              <p>
                <a href="tel:5555555555" className="text-gray-900 underline hover:text-gray-600">
                  (555) 555-5555
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hours
            </h3>
            <p className="text-gray-800">Monday – Friday</p>
            <p className="text-gray-800">10am – 6pm</p>
          </div>

          {/* Find Links */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Find
            </h3>
            <nav className="space-y-2">
              <p>
                <Link href="/" className="text-gray-900 underline hover:text-gray-600">
                  Home
                </Link>
              </p>
              <p>
                <Link href="/contact" className="text-gray-900 underline hover:text-gray-600">
                  Contact
                </Link>
              </p>
              <p>
                <Link href="/blog" className="text-gray-900 underline hover:text-gray-600">
                  Blog
                </Link>
              </p>
            </nav>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-footer-bottom py-6 md:py-8 px-6 md:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-900">
            <Link href="/privacy" className="underline hover:text-gray-600">
              Privacy & Cookies Policy
            </Link>
            <Link href="/estimate" className="underline hover:text-gray-600">
              Good Faith Estimate
            </Link>
            <Link href="/terms" className="underline hover:text-gray-600">
              Website Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="underline hover:text-gray-600">
              Disclaimer
            </Link>
          </div>
          <p className="text-sm text-gray-900">
            Website Template Credits:{" "}
            <a href="https://gobloomcreative.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
              Go Bloom Creative
            </a>
          </p>
          <p className="text-sm text-gray-900">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>
        </div>
      </div>
    </>
  );
}
