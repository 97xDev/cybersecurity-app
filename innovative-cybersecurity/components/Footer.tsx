import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10">
      <div className="container mx-auto px-6 md:flex md:justify-between md:items-center">
        {/* Company Info */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold text-white">CyberSecure Inc.</h2>
          <p className="mt-2 text-sm text-slate-400">
            Protecting businesses with cutting-edge cybersecurity solutions.
            Your data, our priority.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/solutions" className="hover:text-white transition">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Resources</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-white transition"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-white transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-slate-400 border-t border-slate-700 pt-4">
        &copy; {new Date().getFullYear()} CyberSecure Inc. All Rights Reserved.
      </div>
    </footer>
  );
}
