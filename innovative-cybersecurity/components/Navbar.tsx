import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 p-5 shadow-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-indigo-400 text-2xl font-bold tracking-wide"
        >
          CyberSecure Inc.
        </Link>
        <div className="space-x-4">
          <Link
            href="/blog"
            className="text-slate-300 hover:text-indigo-400 transition duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-slate-300 hover:text-indigo-400 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
