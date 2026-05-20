import React from 'react'

const Contact = () => {
  return (
    <>
    
    <section
  id="contact"
  className="py-20 md:py-28 bg-gradient-hero scroll-mt-20 relative overflow-hidden noise-texture"
>
  <div
    className="absolute inset-0 overflow-hidden pointer-events-none"
    aria-hidden="true"
  >
    <div className="absolute -top-1/4 -right-1/4 w-[50%] h-[50%] bg-primary-light opacity-[0.06] rounded-full blur-[150px] animate-float-slow" />
    <div className="absolute -bottom-1/4 -left-1/4 w-[40%] h-[40%] bg-accent opacity-[0.03] rounded-full blur-[120px] animate-float-slow-reverse" />
  </div>
  <div className="container mx-auto px-4 lg:px-6 relative z-10">
    <div className="max-w-3xl mx-auto">
      <div className="grid md:grid-cols-5 gap-10 md:gap-12">
        <div className="md:col-span-2 text-center md:text-left">
          <span className="eyebrow text-accent/70 mb-3 block">Contact Us</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 font-display leading-tight">
            Let's Grow Your Brand
          </h2>
          <p className="text-sm text-white/45 mb-8 leading-relaxed">
            Share your details and our team will contact you with the right next
            step.
          </p>
          <div className="mb-6 grid gap-3">
            <div className="rounded-2xl border border-background/[0.08] bg-background/[0.05] px-4 py-3 text-left text-sm text-white/70 backdrop-blur-sm">
              Quick customer callback
            </div>
            <div className="rounded-2xl border border-background/[0.08] bg-background/[0.05] px-4 py-3 text-left text-sm text-white/70 backdrop-blur-sm">
              No long qualification form
            </div>
            <div className="rounded-2xl border border-background/[0.08] bg-background/[0.05] px-4 py-3 text-left text-sm text-white/70 backdrop-blur-sm">
              Priority response from our team
            </div>
          </div>
          <div className="space-y-4 hidden md:block">
            <a
              href="tel:+919811380023"
              className="flex items-center gap-3 text-white/50 hover:text-accent transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-xl bg-white/[0.06] group-hover:bg-accent/15 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_16px_-4px_hsl(var(--accent)/0.3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone h-4 w-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="text-sm">+91 98113 80023</span>
            </a>
            <a
              href="mailto:contact@swcybernetics.in"
              className="flex items-center gap-3 text-white/50 hover:text-accent transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-xl bg-white/[0.06] group-hover:bg-accent/15 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_16px_-4px_hsl(var(--accent)/0.3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail h-4 w-4"
                >
                  <rect width={20} height={16} x={2} y={4} rx={2} />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span className="text-sm">contact@swcybernetics.in</span>
            </a>
            <div className="pt-4 flex flex-wrap gap-x-4 gap-y-2">
              <div className="flex items-center gap-1.5 text-white/30 text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check h-3 w-3 text-accent/50"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/30 text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check h-3 w-3 text-accent/50"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>24hr response</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/30 text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check h-3 w-3 text-accent/50"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>No commitment</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="bg-background/[0.04] backdrop-blur-sm border border-background/[0.06] rounded-2xl p-6 md:p-7">
            <form className="space-y-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-white/70 flex items-center gap-1.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user h-3 w-3 text-white/35"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                  Name
                </label>
                <input
                  type="text"
                  className="flex w-full border px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/[0.06] border-white/[0.08] text-white placeholder:text-white/25 focus:border-accent/50 focus:bg-white/[0.08] rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent/15 text-sm h-12"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  maxLength={100}
                  defaultValue=""
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="number"
                    className="text-xs font-medium text-white/70 flex items-center gap-1.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone h-3 w-3 text-white/35"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="flex w-full border px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/[0.06] border-white/[0.08] text-white placeholder:text-white/25 focus:border-accent/50 focus:bg-white/[0.08] rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent/15 text-sm h-12"
                    id="number"
                    name="number"
                    placeholder="Phone number"
                    required
                    maxLength={20}
                    defaultValue=""
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-white/70 flex items-center gap-1.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail h-3 w-3 text-white/35"
                    >
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Email
                  </label>
                  <input
                    type="email"
                    className="flex w-full border px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/[0.06] border-white/[0.08] text-white placeholder:text-white/25 focus:border-accent/50 focus:bg-white/[0.08] rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent/15 text-sm h-12"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    maxLength={255}
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-white/70 flex items-center gap-1.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-square h-3 w-3 text-white/35"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Message{" "}
                  <span className="text-white/30 font-normal">(optional)</span>
                </label>
                <textarea
                  className="flex w-full border px-3 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white/[0.06] border-white/[0.08] text-white placeholder:text-white/25 focus:border-accent/50 focus:bg-white/[0.08] rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent/15 text-sm min-h-[110px] py-3"
                  id="message"
                  name="message"
                  placeholder="Tell us about your brand, marketplaces, current GMV, or what you'd like to discuss..."
                  maxLength={1000}
                  rows={4}
                  defaultValue={""}
                />
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 py-2 h-12 w-full px-8 text-sm bg-accent hover:bg-accent-light text-accent-foreground transition-all rounded-full font-semibold shadow-custom-md hover:shadow-custom-lg active:scale-[0.97] group"
                type="submit"
              >
                Book Strategy Call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
              <p className="text-xs text-white/45 text-center leading-relaxed">
                You'll get a reply on WhatsApp within 2 hours (Mon–Sat, 10am–7pm
                IST). No spam, no sales pitch.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Contact