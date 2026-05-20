import React from 'react'
import { useState } from "react";
const BeforeAfter = () => {



const caseStudies = {
  "Beauty Brand": {
    subtitle: "Beauty Brand — Personal Care category",

    cards: [
      {
        title: "Monthly Revenue",
        oldValue: "₹8L/mo",
        newValue: "₹2Cr/mo",
      },

      {
        title: "ACOS",
        oldValue: "42%",
        newValue: "18%",
      },

      {
        title: "Organic Rank",
        oldValue: "Page 4",
        newValue: "Page 1",
      },

      {
        title: "Reviews",
        oldValue: "120",
        newValue: "2,400+",
      },
    ],
  },

  "Snack Brand": {
    subtitle: "Snack Brand — FMCG category",

    cards: [
      {
        title: "Blinkit Revenue",
        oldValue: "₹8L/mo",
        newValue: "₹42L/mo",
      },

      {
        title: "Dark Stores",
        oldValue: "80",
        newValue: "600+",
      },

      {
        title: "Fill Rate",
        oldValue: "72%",
        newValue: "95%+",
      },

      {
        title: "ROAS",
        oldValue: "1.8x",
        newValue: "4.2x",
      },
    ],
  },

  "Fashion Brand": {
    subtitle: "Fashion Brand — Apparel category",

    cards: [
      {
        title: "GMV",
        oldValue: "₹15L/mo",
        newValue: "₹1.2Cr/mo",
      },

      {
        title: "Return Rate",
        oldValue: "28%",
        newValue: "14%",
      },

      {
        title: "Catalog Score",
        oldValue: "3.2/10",
        newValue: "9.1/10",
      },

      {
        title: "Platforms",
        oldValue: "1",
        newValue: "6",
      },
    ],
  },
} as const;

type BrandType = keyof typeof caseStudies;


  const [activeBrand, setActiveBrand] =
    useState<BrandType>("Beauty Brand");

  const activeData = caseStudies[activeBrand];
    
  return (
    <>
    
    <section className="py-20 bg-gradient-subtle">
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
      <div className="text-center mb-12">
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
            className="lucide lucide-trending-up h-4 w-4 text-accent"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
          <span className="text-sm font-medium text-accent">Real Results</span>
        </div>
        <h2 className="text-foreground mb-4 font-display">
          Before &amp; After{" "}
          <span className="text-theme  bg-clip-text text-transparent">
            Transformation
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See the measurable impact we deliver for our clients
        </p>
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
       <div className="flex justify-center gap-2 mb-10 flex-wrap">

          {Object.keys(caseStudies).map((brand) => (

            <button
              key={brand}
              onClick={() =>
                setActiveBrand(brand as BrandType)
              }
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeBrand === brand
                  ? "bg-primary text-primary-foreground shadow-custom-lg"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {brand}
            </button>

          ))}

        </div>
    </div>
          <div
        className="max-w-4xl mx-auto"
        style={{
          opacity: 1,
          transform: "none",
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">

          {activeData.cards.map((card, index) => (

            <div
              key={index}
              className="relative bg-card border border-border rounded-2xl p-6 text-center hover:shadow-custom-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
            >

              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/60 transition-all duration-500" />

              <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mb-4">
                {card.title}
              </p>

              <div className="flex flex-col items-center gap-1.5">

                <span className="text-base text-muted-foreground/50 line-through">
                  {card.oldValue}
                </span>

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
                  className="h-3.5 w-3.5 text-accent"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>

                <span className="text-2xl md:text-3xl font-extrabold text-primary font-display">
                  {card.newValue}
                </span>

              </div>

            </div>

          ))}

        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {activeData.subtitle}
        </p>

      </div>

  </div>
</section>

    </>
  )
}

export default BeforeAfter