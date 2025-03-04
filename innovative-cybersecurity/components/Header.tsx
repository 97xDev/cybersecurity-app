import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-100 shadow-md border-b border-slate-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-indigo-500 text-3xl font-semibold tracking-wide"
        >
          CyberSecure
        </Link>
        <div className="flex space-x-2">
          <Link
            href="/solutions"
            className="relative text-indigo-500 font-medium transition duration-300 py-6 px-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Solutions
          </Link>
          <Link
            href="/blog"
            className="relative text-indigo-500 font-medium transition duration-300 py-6 px-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="relative text-indigo-500 font-medium transition duration-300 py-6 px-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
