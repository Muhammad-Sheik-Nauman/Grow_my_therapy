import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-primary-bg py-10 md:py-12 px-6 md:px-8 border-t border-[#C5D1DA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Dr. Maya Reynolds Info */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Dr. Maya Reynolds, PsyD
            </h3>
            <address className="not-italic text-text-secondary mb-6">
              <p>123th Street #5</p>
              <p>Santa Monica, CA 90401</p>
            </address>
            <div className="space-y-2">
              <p>
                <a href="mailto:contact@drmayareynolds.com" className="text-text-primary underline hover:text-text-secondary">
                  contact@drmayareynolds.com
                </a>
              </p>
              <p>
                <a href="tel:5555555555" className="text-text-primary underline hover:text-text-secondary">
                  (555) 555-5555
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Hours
            </h3>
            <p className="text-text-secondary">Monday to Friday</p>
            <p className="text-text-secondary">10am to 6pm</p>
          </div>

          {/* Find Links */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Find
            </h3>
            <nav className="space-y-2">
              <p>
                <Link href="/" className="text-text-primary underline hover:text-text-secondary">
                  Home
                </Link>
              </p>
              <p>
                <Link href="/contact" className="text-text-primary underline hover:text-text-secondary">
                  Contact
                </Link>
              </p>
              <p>
                <Link href="/blog" className="text-text-primary underline hover:text-text-secondary">
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
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy & Cookies Policy
            </Link>
            <span className="text-white">•</span>
            <Link href="/estimate" className="hover:text-gray-300 transition-colors">
              Good Faith Estimate
            </Link>
            <span className="text-white">•</span>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Website Terms & Conditions
            </Link>
            <span className="text-white">•</span>
            <Link href="/disclaimer" className="hover:text-gray-300 transition-colors">
              Disclaimer
            </Link>
          </div>
          <p className="text-sm text-white">
            Website Template Credits:{" "}
            <a href="https://gobloomcreative.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              Go Bloom Creative
            </a>
          </p>
          <p className="text-sm text-white">
            All Rights Reserved © 2024 Dr. Maya Reynolds Psychology Services.
          </p>
        </div>
      </div>
    </>
  );
}
