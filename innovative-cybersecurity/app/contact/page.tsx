export default function Contact() {
  return (
    <div className="container mx-auto max-w-7xl mt-20 mb-20 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Heading & Text */}
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Get in Touch</h1>
          <p className="text-slate-800 mt-4 leading-tight">
            Our sales team is available M-F from 9am to 5pm EST. Our chat
            support is available 24/7/365. If you need cybersecurity solutions
            or have any questions, please fill out the form and our team will
            get back to you.
          </p>
          <p className="text-slate-800 mt-4">
            You can also reach us via email at{" "}
            <span className="text-indigo-400 font-medium">
              support@cybersecure.com
            </span>
          </p>
        </div>

        {/* Right Column - Contact Form */}
        <form className="bg-slate-800 p-6 shadow-md">
          <div className="mb-4">
            <label className="block text-slate-300 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-2 p-3 bg-slate-900 text-slate-200 border border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-300 font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full mt-2 p-3 bg-slate-900 text-slate-200 border border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-300 font-medium">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full mt-2 p-3 bg-slate-900 text-slate-200 border border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-slate-300 font-medium">Message</label>
            <textarea
              rows={5}
              placeholder="Your message..."
              className="w-full mt-2 p-3 bg-slate-900 text-slate-200 border border-slate-700 resize-none focus:ring-2 focus:ring-indigo-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
