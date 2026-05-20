import React from 'react'
import { useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  Rocket,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
const CaseStudy = () => {

    const marketplaceFilters = [
  "All",
  "Amazon",
  "Flipkart",
  "Q-Commerce",
  "Myntra/AJIO",
  "Nykaa",
  "GeM",
];

const metricFilters = [
  "All",
  "Revenue Growth",
  "ACOS/ROAS",
  "Inventory",
  "Onboarding",
  "Brand Protection",
];

const caseStudies = [
  {
    marketplace: "Amazon",
    metric: "ACOS/ROAS",
    badge: "Fashion & Apparel",
    title: "Fashion - Nightwear",

    challenge:
      "Unable to scale Amazon sales despite substantial PPC spending. ACOS at 45%.",

    solution:
      "Optimized listings, cleaned catalog, activated Prime, and managed PPC strategically.",

    stats: [
      {
        icon: "down",
        label: "ACOS Reduced",
        value: "45% → 18%",
      },

      {
        icon: "up",
        label: "Sales Increase",
        value: "65%",
      },

      {
        icon: "rocket",
        label: "Timeline",
        value: "90 days",
      },
    ],
  },

  {
    marketplace: "Amazon",
    metric: "Inventory",
    badge: "FMCG",
    title: "FMCG - Dairy & Oils",

    challenge:
      "Facing extensive competition from private labels with very high ACOS on Amazon.",

    solution:
      "Optimized stock levels, improved conversion rates while maintaining profitability.",

    stats: [
      {
        icon: "down",
        label: "ACOS Maintained",
        value: "< 1%",
      },

      {
        icon: "up",
        label: "Inventory Health",
        value: "98%",
      },

      {
        icon: "rocket",
        label: "Brand Searches",
        value: "+500%",
      },
    ],
  },

  {
    marketplace: "Flipkart",
    metric: "Onboarding",
    badge: "Automobile",
    title: "Automobile - Parts & Accessories",

    challenge:
      "Wanted to establish omni-channel presence across various point of sales.",

    solution:
      "Built cloud-based backend, launched 4 business units on Amazon and Flipkart.",

    stats: [
      {
        icon: "rocket",
        label: "Business Units",
        value: "4 Launched",
      },

      {
        icon: "up",
        label: "Monthly GMV",
        value: "₹1.2Cr",
      },

      {
        icon: "down",
        label: "Channels",
        value: "2 Platforms",
      },
    ],
  },

  {
    marketplace: "Amazon",
    metric: "Brand Protection",
    badge: "Consumer Electronics",
    title: "Electronics - Audio & Wearables",

    challenge:
      "Counterfeit products eroding brand trust and cannibalizing sales on Amazon.",

    solution:
      "Brand Registry, IP enforcement, catalog cleanup, and authorized-seller-only strategy.",

    stats: [
      {
        icon: "down",
        label: "Counterfeits Removed",
        value: "120+",
      },

      {
        icon: "up",
        label: "Sales Recovery",
        value: "+85%",
      },

      {
        icon: "rocket",
        label: "Timeline",
        value: "60 days",
      },
    ],
  },

  {
    marketplace: "Amazon",
    metric: "Onboarding",
    badge: "Health & Wellness",
    title: "Health & Wellness - Supplements",

    challenge:
      "Amazon account suspended due to policy violations on health claims in listings.",

    solution:
      "Full account reinstatement, listing compliance overhaul, and appeal strategy.",

    stats: [
      {
        icon: "rocket",
        label: "Account Reinstated",
        value: "14 days",
      },

      {
        icon: "up",
        label: "Listings Compliant",
        value: "100%",
      },

      {
        icon: "down",
        label: "Sales Post-Reinstate",
        value: "+40%",
      },
    ],
  },

  {
    marketplace: "Q-Commerce",
    metric: "Revenue Growth",
    badge: "Food & Beverages",
    title: "Organic Food - Snacks & Superfoods",

    challenge:
      "Low visibility on Blinkit and Zepto despite strong D2C brand recall.",

    solution:
      "Q-commerce onboarding, dark store activation, and category-specific ad campaigns.",

    stats: [
      {
        icon: "rocket",
        label: "Dark Stores Active",
        value: "350+",
      },

      {
        icon: "up",
        label: "Q-Commerce Revenue",
        value: "₹45L/mo",
      },

      {
        icon: "down",
        label: "Repeat Orders",
        value: "+120%",
      },
    ],
  },
] as const;


const [activeMarketplace, setActiveMarketplace] =
    useState("All");

  const [activeMetric, setActiveMetric] =
    useState("All");

  const filteredStudies = caseStudies.filter(
    (study) => {
      const marketplaceMatch =
        activeMarketplace === "All" ||
        study.marketplace === activeMarketplace;

      const metricMatch =
        activeMetric === "All" ||
        study.metric === activeMetric;

      return marketplaceMatch && metricMatch;
    }
  );

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "up":
        return (
          <TrendingUp className="h-5 w-5 text-primary" />
        );

      case "down":
        return (
          <TrendingDown className="h-5 w-5 text-green-600" />
        );

      default:
        return (
          <Rocket className="h-5 w-5 text-accent" />
        );
    }
  };

  return (
   <>
   <section id="case-studies" className="py-24 bg-gradient-subtle">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4">
        Case Studies
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        From stuck to scaled —{" "}
        <span className="bg-gradient-accent bg-clip-text  ">
          real brand turnarounds
        </span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Brands plateaued at ₹3L–₹12L/month broke through to ₹68L–₹2Cr+ on our
        watch. Filter by marketplace and metric to find the case closest to your
        growth goal.
      </p>
    </div>
    <div className="max-w-5xl mx-auto mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="rounded-xl border border-border bg-card p-5 text-center hover:shadow-custom-xl transition-all">
        <div className="text-xs text-muted-foreground mb-2">
          Sports Nutrition
        </div>
        <div className="flex items-baseline justify-center gap-2 mb-1">
          <span className="text-sm text-muted-foreground line-through opacity-60">
            ₹3L
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
            className="lucide lucide-arrow-right h-3 w-3 text-primary self-center"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
          <span className="text-2xl font-bold bg-gradient-accent bg-clip-text  ">
            ₹68L
          </span>
        </div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
          per month • 7 mo
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-5 text-center hover:shadow-custom-xl transition-all">
        <div className="text-xs text-muted-foreground mb-2">
          Premium Haircare
        </div>
        <div className="flex items-baseline justify-center gap-2 mb-1">
          <span className="text-sm text-muted-foreground line-through opacity-60">
            ₹6L
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
            className="lucide lucide-arrow-right h-3 w-3 text-primary self-center"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
          <span className="text-2xl font-bold bg-gradient-accent bg-clip-text  ">
            ₹94L
          </span>
        </div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
          per month • 9 mo
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-5 text-center hover:shadow-custom-xl transition-all">
        <div className="text-xs text-muted-foreground mb-2">Baby Care</div>
        <div className="flex items-baseline justify-center gap-2 mb-1">
          <span className="text-sm text-muted-foreground line-through opacity-60">
            ₹8L
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
            className="lucide lucide-arrow-right h-3 w-3 text-primary self-center"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
          <span className="text-2xl font-bold bg-gradient-accent bg-clip-text  ">
            ₹1.4Cr
          </span>
        </div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
          per month • 8 mo
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-5 text-center hover:shadow-custom-xl transition-all">
        <div className="text-xs text-muted-foreground mb-2">Cookware</div>
        <div className="flex items-baseline justify-center gap-2 mb-1">
          <span className="text-sm text-muted-foreground line-through opacity-60">
            ₹12L
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
            className="lucide lucide-arrow-right h-3 w-3 text-primary self-center"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
          <span className="text-2xl font-bold bg-gradient-accent bg-clip-text  ">
            ₹2.1Cr
          </span>
        </div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
          per month • 11 mo
        </div>
      </div>
    </div>
    <div className="max-w-5xl mx-auto mb-10 space-y-5">

        {/* Marketplace */}

        <div>
          <p className="text-sm font-semibold text-foreground mb-3">
            Marketplace
          </p>

          <div className="flex flex-wrap gap-2">
            {marketplaceFilters.map((item) => (
              <button
                key={item}
                onClick={() =>
                  setActiveMarketplace(item)
                }
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-9 rounded-md px-3 ${
                  activeMarketplace === item
                    ? "bg-primary text-primary-foreground"
                    : "border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics */}

        <div>
          <p className="text-sm font-semibold text-foreground mb-3">
            Results metric
          </p>

          <div className="flex flex-wrap gap-2">
            {metricFilters.map((item) => (
              <button
                key={item}
                onClick={() => setActiveMetric(item)}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-9 rounded-md px-3 ${
                  activeMetric === item
                    ? "bg-primary text-primary-foreground"
                    : "border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredStudies.map((study, index) => (

          <div key={index}>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full border-border hover:shadow-custom-xl transition-all duration-300 overflow-hidden group">

              <div className="h-2 bg-gradient-primary group-hover:bg-gradient-accent transition-all duration-300" />

              <div className="p-8">

                {/* Header */}

                <div className="mb-6">

                  <div className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground mb-2 text-xs px-2.5 py-1">
                    {study.badge}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>

                </div>

                {/* Challenge */}

                <div className="mb-6">

                  <h4 className="text-sm font-semibold text-destructive mb-2 uppercase tracking-wide">
                    Challenge
                  </h4>

                  <p className="text-muted-foreground text-sm">
                    {study.challenge}
                  </p>

                </div>

                {/* Solution */}

                <div className="mb-6">

                  <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                    Solution
                  </h4>

                  <p className="text-muted-foreground text-sm">
                    {study.solution}
                  </p>

                </div>

                {/* Stats */}

                <div className="mb-6">

                  <div className="space-y-3">

                    {study.stats.map((stat, idx) => (

                      <div
                        key={idx}
                        className="flex items-center gap-3"
                      >

                        {renderIcon(stat.icon)}

                        <div>

                          <p className="text-xs text-muted-foreground">
                            {stat.label}
                          </p>

                          <p className="text-sm font-bold text-foreground">
                            {stat.value}
                          </p>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

                {/* Actions */}

                <div className="grid gap-3">

                  <a className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Read Case Study

                    <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                  </a>

                  <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">

                    <CalendarCheck className="h-4 w-4" />

                    Book a call for similar results

                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>
    <div className="text-center mt-12">
      <a
        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-lg"
        href="/case-studies"
        data-discover="true"
      >
        View All 24 Case Studies
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
          className="lucide lucide-arrow-right h-5 w-5"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>

   
   </>
  )
}

export default CaseStudy