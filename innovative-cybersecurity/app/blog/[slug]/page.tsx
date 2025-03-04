import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { addInternalLinks } from "@/lib/internalLinker";
import posts from "@/lib/blogData.json";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug.toString() === resolvedParams.slug);

  if (!post) return notFound();

  const linkedContent = addInternalLinks(post.content);

  return (
    <div>
      {/* Hero Section - Full Width */}
      <div className="w-screen bg-indigo-500 flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1 max-w-7xl order-1 md:order-1 text-left md:px-12">
          <h1 className="text-5xl text-slate-100 font-bold leading-tight">
            {post.title}
          </h1>
          <h2 className="text-xl text-slate-200 mt-2">{post.subtitle}</h2>
          <span className="text-slate-200 text-sm block mt-2">{post.date}</span>
        </div>
        <div className="flex-1 max-w-7xl order-1 md:order-2">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 text-slate-900">
        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Subscribe Form */}
          <div className="md:col-span-1 border-r border-indigo-600 pr-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-slate-700 mb-4">
              Get the latest cybersecurity updates straight to your inbox.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 border w-full"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-slate-100 px-4 py-2 hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none md:col-span-2">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: (props) => (
                  <h1 className="text-4xl font-bold mt-6" {...props} />
                ),
                h2: (props) => (
                  <h2
                    className="text-3xl font-semibold mt-6 text-slate-800"
                    {...props}
                  />
                ),
                h3: (props) => (
                  <h3 className="text-1xl mt-4 text-slate-800" {...props} />
                ),
                p: (props) => (
                  <p
                    className="text-slate-800 mt-2 leading-relaxed max-w-2xl"
                    {...props}
                  />
                ),
                ul: (props) => (
                  <ul
                    className="list-disc list-inside mt-2 space-y-1 text-slate-800"
                    {...props}
                  />
                ),
                li: (props) => (
                  <li className="ml-4 text-slate-800" {...props} />
                ),
                a: (props) => (
                  <a className="text-indigo-600 hover:underline" {...props} />
                ),
              }}
            >
              {linkedContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
