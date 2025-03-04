import Link from "next/link";
import Image from "next/image";
import posts from "@/lib/blogData.json";

export default function Blog() {
  const featuredPost = posts[0];
  const newPosts = posts.slice(1, 3);
  const allOtherPosts = posts.slice(5);

  return (
    <div className="container mx-auto max-w-7xl mt-10 p-6">
      <h1 className="text-7xl font-bold text-slate-900 text-left mb-4">
        CyberSecure Blog
      </h1>
      <div className="h-[2px] mb-12 bg-indigo-600" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        <Link
          href={"/blog/" + featuredPost.slug}
          className="group block bg-indigo-500 overflow-hidden hover:shadow-xl transition"
        >
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            width={800}
            height={400}
            className="w-full h-96 object-cover"
          />
          <div className="py-12 px-6">
            <h1 className="text-3xl font-bold text-slate-100 my-2">
              {featuredPost.title}
            </h1>
            <p className="text-slate-200 mt-2 text-lg">
              {featuredPost.subtitle}
            </p>
            {/* <div className="mt-4 flex flex-wrap gap-2">
              {featuredPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-600 px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div> */}
          </div>
        </Link>
        {/* New Articles Column */}
        <div className="flex flex-col justify-start">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">New</h2>
          <div className="space-y-6">
            {newPosts.map((post, index) => (
              <Link
                key={post.id}
                href={"/blog/" + post.slug}
                className="group block"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">{post.date}</p>
                  </div>
                </div>
                {index !== newPosts.length - 1 && (
                  <div className="h-[2px] mt-6 bg-indigo-600" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* All Articles Section */}
      <div className="mt-12">
        <h2 className="text-5xl font-bold text-slate-900 mb-6">Trending</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {allOtherPosts.map((post) => (
            <Link key={post.id} href={"/blog/" + post.slug}>
              <div className="group cursor-pointer bg-slate-100 shadow-lg overflow-hidden hover:shadow-xl transition">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mt-2">{post.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
