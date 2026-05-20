import React from 'react'

const Cta = () => {
  return (
    <>
    <section className="py-12 bg-gradient-to-r from-primary/5 via-primary/10 to-accent/5">
  <div className="container mx-auto px-4">
    <div
      className="transition-all"
      style={{
        opacity: 1,
        transform: "translate(0px, 0px)",
        filter: "blur(0px)",
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-10 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
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
                className="lucide lucide-trending-up h-4 w-4 text-white"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
              <span className="text-white text-sm font-medium">
                New Guide for US Sellers
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Hire Amazon VAs from India — Save 70% on Costs
            </h3>
            <p className="text-white/90 text-base md:text-lg mb-4 max-w-2xl">
              Complete 2025 guide: Tasks VAs handle, hiring platforms, interview
              questions, management tips &amp; how to scale your Amazon business
              affordably.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-white/80 text-sm mb-6">
              <div className="flex items-center gap-1">
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
                  className="lucide lucide-users h-4 w-4"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>For US Amazon Sellers</span>
              </div>
              <div className="flex items-center gap-1">
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
                  className="lucide lucide-clock h-4 w-4"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>20 min read</span>
              </div>
            </div>
            <a
              href="/knowledge-base/amazon-virtual-assistant-india-usa-sellers"
              data-discover="true"
            >
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-primary hover:bg-white/90 shadow-lg font-semibold gap-2">
                Read the Complete Guide
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
                  className="lucide lucide-arrow-right h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </a>
          </div>
          <div className="flex flex-row lg:flex-col gap-4 lg:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center min-w-[100px]">
              <div className="text-2xl md:text-3xl font-bold text-white">
                $4-12
              </div>
              <div className="text-white/70 text-xs">Per Hour</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center min-w-[100px]">
              <div className="text-2xl md:text-3xl font-bold text-white">
                60-80%
              </div>
              <div className="text-white/70 text-xs">Cost Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center min-w-[100px]">
              <div className="text-2xl md:text-3xl font-bold text-white">
                24/7
              </div>
              <div className="text-white/70 text-xs">Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Cta