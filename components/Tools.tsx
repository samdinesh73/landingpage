import React from 'react'

const Tools = () => {
  return (
    <>
    <section className="py-20 bg-background" id="tools">
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
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
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
            className="lucide lucide-wrench h-4 w-4 text-accent"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
          <span className="text-sm font-medium text-accent">
            Free Seller Tools
          </span>
        </div>
        <h2 className="text-foreground mb-4 font-display">
          Powerful{" "}
          <span className="bg-gradient-accent bg-clip-text">
            E-commerce Tools
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Free calculators and utilities to help you make smarter marketplace
          decisions
        </p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 max-w-6xl mx-auto">
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
        <a
          className="block group h-full"
          href="/resources/amazon-profit-calculator"
          data-discover="true"
        >
          <div className="relative bg-card border border-border rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/50 group-hover:to-primary/20 transition-all duration-500" />
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calculator h-5 w-5 text-primary"
                >
                  <rect width={16} height={20} x={4} y={2} rx={2} />
                  <line x1={8} x2={16} y1={6} y2={6} />
                  <line x1={16} x2={16} y1={14} y2={18} />
                  <path d="M16 10h.01" />
                  <path d="M12 10h.01" />
                  <path d="M8 10h.01" />
                  <path d="M12 14h.01" />
                  <path d="M8 14h.01" />
                  <path d="M12 18h.01" />
                  <path d="M8 18h.01" />
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              Amazon Profit Calculator
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              Calculate exact Amazon India fees, commissions, and final profit
              for your products.
            </p>
            <div className="mt-5 pt-4 border-t border-border/50 flex items-center text-sm font-medium text-primary gap-1.5 group-hover:gap-2.5 transition-all">
              Try Now{" "}
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
                className="lucide lucide-arrow-right h-3.5 w-3.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      </div>
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
        <a
          className="block group h-full"
          href="/resources/flipkart-fee-calculator"
          data-discover="true"
        >
          <div className="relative bg-card border border-border rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/50 group-hover:to-primary/20 transition-all duration-500" />
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-cart h-5 w-5 text-primary"
                >
                  <circle cx={8} cy={21} r={1} />
                  <circle cx={19} cy={21} r={1} />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </div>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              Flipkart Fee Calculator
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              Calculate Flipkart seller fees, FBF charges, commissions, and
              settlement amount.
            </p>
            <div className="mt-5 pt-4 border-t border-border/50 flex items-center text-sm font-medium text-primary gap-1.5 group-hover:gap-2.5 transition-all">
              Try Now{" "}
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
                className="lucide lucide-arrow-right h-3.5 w-3.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      </div>
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
        <a
          className="block group h-full"
          href="/resources/blinkit-fee-calculator"
          data-discover="true"
        >
          <div className="relative bg-card border border-border rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/50 group-hover:to-primary/20 transition-all duration-500" />
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap h-5 w-5 text-primary"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
              </div>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              Blinkit Fee Calculator
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              Calculate Blinkit Q-commerce fees, commissions, handling, and
              logistics charges.
            </p>
            <div className="mt-5 pt-4 border-t border-border/50 flex items-center text-sm font-medium text-primary gap-1.5 group-hover:gap-2.5 transition-all">
              Try Now{" "}
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
                className="lucide lucide-arrow-right h-3.5 w-3.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      </div>
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
        <a
          className="block group h-full"
          href="/resources/amazon-super-url-creator"
          data-discover="true"
        >
          <div className="relative bg-card border border-border rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/50 group-hover:to-primary/20 transition-all duration-500" />
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link h-5 w-5 text-primary"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                New
              </span>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              Amazon Super URL Creator
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              Generate 2-Step URLs, Canonical URLs, and Add-to-Cart links for
              ranking campaigns.
            </p>
            <div className="mt-5 pt-4 border-t border-border/50 flex items-center text-sm font-medium text-primary gap-1.5 group-hover:gap-2.5 transition-all">
              Try Now{" "}
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
                className="lucide lucide-arrow-right h-3.5 w-3.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      </div>
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
        <a
          className="block group h-full"
          href="/resources/keyword-research"
          data-discover="true"
        >
          <div className="relative bg-card border border-border rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/50 group-hover:to-primary/20 transition-all duration-500" />
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search h-5 w-5 text-primary"
                >
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                New
              </span>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              Keyword Research Tool
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              Find high-volume search terms from Amazon's autocomplete to
              optimize listings &amp; PPC.
            </p>
            <div className="mt-5 pt-4 border-t border-border/50 flex items-center text-sm font-medium text-primary gap-1.5 group-hover:gap-2.5 transition-all">
              Try Now{" "}
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
                className="lucide lucide-arrow-right h-3.5 w-3.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      </div>
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
        <a
          className="block group h-full"
          href="/resources/swiggy-instamart-fee-calculator"
          data-discover="true"
        >
          <div className="relative bg-card border border-border rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/50 group-hover:to-primary/20 transition-all duration-500" />
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap h-5 w-5 text-primary"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                New
              </span>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              Swiggy Instamart Fee Calculator
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              Calculate Swiggy Instamart seller fees, commissions, storage &amp;
              fulfillment charges.
            </p>
            <div className="mt-5 pt-4 border-t border-border/50 flex items-center text-sm font-medium text-primary gap-1.5 group-hover:gap-2.5 transition-all">
              Try Now{" "}
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
                className="lucide lucide-arrow-right h-3.5 w-3.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
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
      <div className="text-center">
        <a href="/resources" data-discover="true">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 px-8 bg-accent hover:bg-accent-light text-accent-foreground group rounded-xl shadow-custom-lg">
            View All Tools &amp; Resources
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
              className="lucide lucide-arrow-right ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Tools