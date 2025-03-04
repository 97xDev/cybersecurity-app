import Link from "next/link";
import Image from "next/image";
import posts from "@/lib/blogData.json";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold leading-tight">
              Cutting-Edge Cybersecurity Solutions
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Protect your business with the latest in cybersecurity technology
              and expert strategies.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-indigo-500 text-slate-200 font-semibold px-6 py-3  hover:bg-indigo-600 transition"
            >
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/cybersecurity-home-hero.jpg"
              alt="Cybersecurity"
              width={600}
              height={400}
              className=" shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-slate-100 text-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold">Why Choose Us?</h2>
            <p className="text-slate-600 mt-2">
              Our cybersecurity solutions provide unmatched protection for your
              digital assets. With a combination of cutting-edge technology,
              expert insights, and proactive threat mitigation, we ensure your
              business stays ahead of evolving cyber threats.
            </p>
            <p className="text-slate-600 mt-2">
              From robust network security to real-time monitoring and response,
              we tailor solutions to meet your specific needs and keep your
              operations secure.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-slate-200 p-6  shadow-md">
              <h3 className="text-xl font-semibold">
                Advanced Threat Detection
              </h3>
              <p className="text-slate-600 mt-2">
                Identify and neutralize cyber threats before they impact your
                business.
              </p>
            </div>
            <div className="bg-slate-200 p-6  shadow-md">
              <h3 className="text-xl font-semibold">24/7 Monitoring</h3>
              <p className="text-slate-600 mt-2">
                Continuous surveillance to safeguard your data around the clock.
              </p>
            </div>
            <div className="bg-slate-200 p-6  shadow-md">
              <h3 className="text-xl font-semibold">Data Encryption</h3>
              <p className="text-slate-600 mt-2">
                Secure sensitive information with industry-leading encryption
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-indigo-500 text-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl text-slate-100 font-bold text-center">
            Latest Insights
          </h2>
          <p className="text-center text-slate-200 mt-2">
            Stay informed with the latest trends in cybersecurity.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={"/blog/" + post.slug}
                className="group flex flex-col bg-slate-100  shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl leading-[1.2] font-semibold group-hover:text-indigo-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mt-2">{post.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
