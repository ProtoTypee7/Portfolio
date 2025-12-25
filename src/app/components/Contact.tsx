export default function Contact() {
  return (
    <section className="py-36 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-20 items-start">
        
       
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-purple-400 mb-8">
            Get in touch
          </h2>

          <p className="text-base md:text-lg text-gray-400 max-w-md leading-relaxed">
            I’m always open to discussing new opportunities, projects,
            or collaborations. If you have an idea or just want to say
            hi, feel free to drop a message.
          </p>
        </div>

        <div className="p-8 md:p-10 rounded-2xl bg-white/5 space-y-7">
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3.5 rounded-lg
                         bg-black/40 border border-white/10
                         text-white text-sm
                         cursor-not-allowed"
              disabled
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-3.5 rounded-lg
                         bg-black/40 border border-white/10
                         text-white text-sm
                         cursor-not-allowed"
              disabled
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Your message..."
              className="w-full p-3.5 rounded-lg
                         bg-black/40 border border-white/10
                         text-white text-sm
                         resize-none cursor-not-allowed"
              disabled
            />
          </div>

          <button
            className="w-full py-3.5 rounded-lg
                       bg-cyan-400 text-black
                       text-sm font-medium
                       cursor-not-allowed"
            disabled
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
