import React from 'react'
import { useEffect, useRef, useState } from "react";
const MarketPlace = () => {
    const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    
    <>

<section
  className="py-20 md:py-28 bg-muted/20 relative"
  id="services"
  itemScope
  itemType="https://schema.org/ItemList"
>
  <div className="absolute top-0 inset-x-0 section-divider" />
  <div className="container mx-auto px-4 lg:px-6">
    <div
     ref={ref} className="transition-all"
      style={{
        opacity: 1,
        transform: "translate(0px, 0px)",
        filter: "blur(0px)",
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      <div className="text-center mb-14 md:mb-18">
        <span className="eyebrow text-primary/70 mb-4 block">
          Amazon SPN verified growth partner
        </span>
        <h2 className="text-foreground mb-4 font-display">
          Amazon scaling &amp;{" "}
          <span className="gradient-text">marketplace services</span>
        </h2>
        <p className="text-sm md:text-[15px] text-muted-foreground/70 max-w-xl mx-auto leading-relaxed">
          Start with Amazon growth, PPC, advertising, catalog optimization, and
          Seller Central operations — then expand across Flipkart, quick
          commerce, GeM, and global marketplaces.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          <a
            className="rounded-full border border-border/50 bg-background px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/25 hover:text-foreground hover:shadow-custom-sm"
            href="/amazon-agency"
            data-discover="true"
          >
            Amazon Agency
          </a>
          <a
            className="rounded-full border border-border/50 bg-background px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/25 hover:text-foreground hover:shadow-custom-sm"
            href="/services/amazon-agency-india"
            data-discover="true"
          >
            Amazon Growth
          </a>
          <a
            className="rounded-full border border-border/50 bg-background px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/25 hover:text-foreground hover:shadow-custom-sm"
            href="/services/amazon-marketing-agency"
            data-discover="true"
          >
            Amazon Marketing
          </a>
          <a
            className="rounded-full border border-border/50 bg-background px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/25 hover:text-foreground hover:shadow-custom-sm"
            href="/services/amazon-ppc-agency"
            data-discover="true"
          >
            Amazon PPC
          </a>
          <a
            className="rounded-full border border-border/50 bg-background px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/25 hover:text-foreground hover:shadow-custom-sm"
            href="/services/amazon-advertising-agency"
            data-discover="true"
          >
            Amazon Ads
          </a>
          <a
            className="rounded-full border border-border/50 bg-background px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/25 hover:text-foreground hover:shadow-custom-sm"
            href="/services/gem-services"
            data-discover="true"
          >
            GeM
          </a>
          <a
            className="rounded-full border border-border/50 bg-background px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/25 hover:text-foreground hover:shadow-custom-sm"
            href="/services/qcommerce-management"
            data-discover="true"
          >
            Quick Commerce
          </a>
          <a
            className="rounded-full border border-border/50 bg-background px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/25 hover:text-foreground hover:shadow-custom-sm"
            href="/services/global-sales"
            data-discover="true"
          >
            Global Sales
          </a>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3 max-w-5xl mx-auto">
      <div
       ref={ref} className="transition-all"
        style={{
    opacity: 1,
  transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
    filter: "blur(0px)",
    transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
  }}
      >
        <a className="block group" href="/amazon-agency" data-discover="true">
          <div className="relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] bg-primary/[0.02] border-primary/12 hover:border-primary/25 hover:shadow-custom-card-hover">
            <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full" />
            <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-primary/8 group-hover:bg-primary/12 group-hover:shadow-[0_0_16px_-4px_hsl(var(--primary)/0.2)]">
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
                className="lucide lucide-award h-[18px] w-[18px] transition-colors duration-300 text-primary/70 group-hover:text-primary"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                <circle cx={12} cy={8} r={6} />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Amazon Agency (SPN Verified)
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                India's leading Amazon agency — 500+ brands, ₹1000Cr+ GMV
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
      <div
       ref={ref} className="transition-all"
        style={{
    opacity: 1,
  transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
    filter: "blur(0px)",
    transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
  }}
      >
        <a
          className="block group"
          href="/services/amazon-marketing-agency"
          data-discover="true"
        >
          <div className="relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] bg-primary/[0.02] border-primary/12 hover:border-primary/25 hover:shadow-custom-card-hover">
            <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full" />
            <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-primary/8 group-hover:bg-primary/12 group-hover:shadow-[0_0_16px_-4px_hsl(var(--primary)/0.2)]">
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
                className="lucide lucide-shopping-cart h-[18px] w-[18px] transition-colors duration-300 text-primary/70 group-hover:text-primary"
              >
                <circle cx={8} cy={21} r={1} />
                <circle cx={19} cy={21} r={1} />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Amazon Marketing Agency
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                SPN-verified full-stack Amazon growth
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
      <div
       ref={ref} className="transition-all"
        style={{
    opacity: 1,
  transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
    filter: "blur(0px)",
    transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
  }}
      >
        <a
          className="block group"
          href="/services/amazon-agency-india"
          data-discover="true"
        >
          <div className="relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] bg-primary/[0.02] border-primary/12 hover:border-primary/25 hover:shadow-custom-card-hover">
            <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full" />
            <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-primary/8 group-hover:bg-primary/12 group-hover:shadow-[0_0_16px_-4px_hsl(var(--primary)/0.2)]">
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
                className="lucide lucide-target h-[18px] w-[18px] transition-colors duration-300 text-primary/70 group-hover:text-primary"
              >
                <circle cx={12} cy={12} r={10} />
                <circle cx={12} cy={12} r={6} />
                <circle cx={12} cy={12} r={2} />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Amazon Scaling Program
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                Scale listings, PPC, catalog, FBA &amp; profitability
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
      <div
       ref={ref} className="transition-all"
        style={{
    opacity: 1,
  transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
    filter: "blur(0px)",
    transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
  }}
      >
        <a
          className="block group"
          href="/services/amazon-advertising-agency"
          data-discover="true"
        >
          <div className="relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] bg-primary/[0.02] border-primary/12 hover:border-primary/25 hover:shadow-custom-card-hover">
            <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full" />
            <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-primary/8 group-hover:bg-primary/12 group-hover:shadow-[0_0_16px_-4px_hsl(var(--primary)/0.2)]">
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
                className="lucide lucide-megaphone h-[18px] w-[18px] transition-colors duration-300 text-primary/70 group-hover:text-primary"
              >
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Amazon Advertising Agency
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                Sponsored Ads, DSP &amp; ROAS-led campaign growth
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>


      <div  
 ref={ref} className="transition-all"
  style={{
    opacity: 1,
  transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
    filter: "blur(0px)",
    transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
  }}
>
        <a
          className="block group"
          href="/services/amazon-ppc-agency"
          data-discover="true"
        >
          <div className="relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] bg-primary/[0.02] border-primary/12 hover:border-primary/25 hover:shadow-custom-card-hover">
            <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full" />
            <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-primary/8 group-hover:bg-primary/12 group-hover:shadow-[0_0_16px_-4px_hsl(var(--primary)/0.2)]">
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
                className="lucide lucide-trending-up h-[18px] w-[18px] transition-colors duration-300 text-primary/70 group-hover:text-primary"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Amazon PPC Management
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                Lower ACOS and improve contribution margin
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
      



      <div
       ref={ref} className="transition-all"
        style={{
    opacity: 1,
  transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
    filter: "blur(0px)",
    transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
  }}
      >
        <a
          className="block group"
          href="/services/amazon-store-management"
          data-discover="true"
        >
          <div className="relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] bg-primary/[0.02] border-primary/12 hover:border-primary/25 hover:shadow-custom-card-hover">
            <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full" />
            <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-primary/8 group-hover:bg-primary/12 group-hover:shadow-[0_0_16px_-4px_hsl(var(--primary)/0.2)]">
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
                className="lucide lucide-star h-[18px] w-[18px] transition-colors duration-300 text-primary/70 group-hover:text-primary"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Amazon Store Management
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                End-to-end Amazon store operations
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
      <div
       ref={ref} className="transition-all"
        style={{
    opacity: 1,
  transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
    filter: "blur(0px)",
    transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
  }}
      >
        <a
          className="block group"
          href="/services/marketplace-activation"
          data-discover="true"
        >
          <div className={`relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] 
          ${
    show ? "bg-primary/[0.02]" : "bg-card"
  } border-border/40 hover:border-border hover:shadow-custom-card-hover`}>
            <div className={`${show ? "bg-primary/8" : "bg-muted/50"} flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/6`}>
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
                className={`lucide lucide-store  h-[18px] w-[18px] transition-colors duration-300 ${show ? "text-primary/70 " : "text-muted-foreground/50"} group-hover:text-primary`}
              >
                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                <path d="M2 7h20" />
                <path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Marketplace Activation
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                Complete setup across all major platforms
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
      <div
       ref={ref} className="transition-all"
        style={{
    opacity: 1,
  transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
    filter: "blur(0px)",
    transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
  }}
      >
        <a
          className="block group"
          href="/services/catalog-management"
          data-discover="true"
        >
          <div className={`relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] 
          ${
    show ? "bg-primary/[0.02]" : "bg-card"
  } border-border/40 hover:border-border hover:shadow-custom-card-hover`}>
            <div className={`${show ? "bg-primary/8" : "bg-muted/50"} flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/6`}>
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
                className={`  lucide lucide-package  h-[18px] w-[18px] transition-colors duration-300 ${show ? "text-primary/70 " : "text-muted-foreground/50"} group-hover:text-primary`}
              >
                <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                <path d="M12 22V12" />
                <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" />
                <path d="m7.5 4.27 9 5.15" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Product Listing Optimization
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                SEO-driven titles, bullets &amp; A+ Content
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
     <div
     ref={ref} className="transition-all"
      style={{
        opacity: show ? 1 : 0,
        transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
        filter: show ? "blur(0px)" : "blur(3px)",
        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        
      }}
    >
        <a
          className="block group"
          href="/services/pricing-management"
          data-discover="true"
        >
          <div className={`relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] 
          ${
    show ? "bg-primary/[0.02]" : "bg-card"
  } border-border/40 hover:border-border hover:shadow-custom-card-hover`}>
            <div className={`${show ? "bg-primary/8" : "bg-muted/50"} flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/6`}>
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
                className={`lucide lucide-dollar-sign h-[18px] w-[18px] transition-colors duration-300 ${show ? "text-primary/70 " : "text-muted-foreground/50"} group-hover:text-primary`}
              >
                <line x1={12} x2={12} y1={2} y2={22} />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Pricing Management
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                Dynamic pricing for maximum profit
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
      <div
       ref={ref} className="transition-all"
        style={{
        opacity: show ? 1 : 0,
        transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
        filter: show ? "blur(0px)" : "blur(3px)",
        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        
      }}
      >
        <a
          className="block group"
          href="/services/inventory-management"
          data-discover="true"
        >
          <div className={`relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] 
          ${
    show ? "bg-primary/[0.02]" : "bg-card"
  } border-border/40 hover:border-border hover:shadow-custom-card-hover`}>
            <div className={`${show ? "bg-primary/8" : "bg-muted/50"} flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/6`}>
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
                className={`lucide lucide-network  h-[18px] w-[18px] transition-colors duration-300 ${show ? "text-primary/70 " : "text-muted-foreground/50"} group-hover:text-primary`}
              >
                <rect x={16} y={16} width={6} height={6} rx={1} />
                <rect x={2} y={16} width={6} height={6} rx={1} />
                <rect x={9} y={2} width={6} height={6} rx={1} />
                <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                <path d="M12 12V8" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Inventory Management
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                Real-time tracking and optimization
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
      <div
       ref={ref} className="transition-all"
        style={{
        opacity: show ? 1 : 0,
        transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
        filter: show ? "blur(0px)" : "blur(3px)",
        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        
      }}
      >
        <a
          className="block group"
          href="/services/reviews-management"
          data-discover="true"
        >
          <div className={`relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] 
          ${
    show ? "bg-primary/[0.02]" : "bg-card"
  } border-border/40 hover:border-border hover:shadow-custom-card-hover`}>
            <div className={`${show ? "bg-primary/8" : "bg-muted/50"} flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/6`}>
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
                className={`lucide lucide-message-square  h-[18px] w-[18px] transition-colors duration-300 ${show ? "text-primary/70 " : "text-muted-foreground/50"} group-hover:text-primary`}
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Reviews Management
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                Build trust and drive conversions
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
      <div
       ref={ref} className="transition-all"
        style={{
        opacity: show ? 1 : 0,
        transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
        filter: show ? "blur(0px)" : "blur(3px)",
        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        
      }}
      >
        <a
          className="block group"
          href="/services/advertising-promotions"
          data-discover="true"
        >
          <div className={`relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] 
          ${
    show ? "bg-primary/[0.02]" : "bg-card"
  } border-border/40 hover:border-border hover:shadow-custom-card-hover`}>
            <div className={`${show ? "bg-primary/8" : "bg-muted/50"} flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/6`}>
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
                className={`lucide lucide-trending-up  h-[18px] w-[18px] transition-colors duration-300 ${show ? "text-primary/70 " : "text-muted-foreground/50"} group-hover:text-primary`}
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Advertising &amp; Promotions
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                Data-driven campaigns with low ACOS
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
      <div
       ref={ref} className="transition-all"
        style={{
        opacity: show ? 1 : 0,
        transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
        filter: show ? "blur(0px)" : "blur(3px)",
        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        
      }}
      >
        <a
          className="block group"
          href="/services/return-management"
          data-discover="true"
        >
          <div className={`relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] 
          ${
    show ? "bg-primary/[0.02]" : "bg-card"
  } border-border/40 hover:border-border hover:shadow-custom-card-hover`}>
            <div className={`${show ? "bg-primary/8" : "bg-muted/50"} flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/6`}>
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
                className={`lucide lucide-refresh-cw  h-[18px] w-[18px] transition-colors duration-300 ${show ? "text-primary/70 " : "text-muted-foreground/50"} group-hover:text-primary`}
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M8 16H3v5" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Return Management
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                Efficient returns and value recovery
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
      <div
       ref={ref} className="transition-all"
        style={{
        opacity: show ? 1 : 0,
        transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
        filter: show ? "blur(0px)" : "blur(3px)",
        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        
      }}
      >
        <a
          className="block group"
          href="/services/qcommerce-management"
          data-discover="true"
        >
          <div className={`relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] 
          ${
    show ? "bg-primary/[0.02]" : "bg-card"
  } border-border/40 hover:border-border hover:shadow-custom-card-hover`}>
            <div className={`${show ? "bg-primary/8" : "bg-muted/50"} flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/6`}>
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
                className={`lucide lucide-chart-column  h-[18px] w-[18px] transition-colors duration-300 ${show ? "text-primary/70 " : "text-muted-foreground/50"} group-hover:text-primary`}
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                <path d="M18 17V9" />
                <path d="M13 17V5" />
                <path d="M8 17v-3" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Q-commerce Onboarding
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                Blinkit, Zepto &amp; Instamart setup
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
      <div
       ref={ref} className="transition-all"
        style={{
        opacity: show ? 1 : 0,
        transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
        filter: show ? "blur(0px)" : "blur(3px)",
        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        
      }}
      >
        <a
          className="block group"
          href="/services/gem-services"
          data-discover="true"
        >
          <div className={`relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] 
          ${
    show ? "bg-primary/[0.02]" : "bg-card"
  } border-border/40 hover:border-border hover:shadow-custom-card-hover`}>
            <div className={`${show ? "bg-primary/8" : "bg-muted/50"} flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/6`}>
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
                className={`lucide lucide-building2  h-[18px] w-[18px] transition-colors duration-300 ${show ? "text-primary/70 " : "text-muted-foreground/50"} group-hover:text-primary`}
              >
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                <path d="M10 6h4" />
                <path d="M10 10h4" />
                <path d="M10 14h4" />
                <path d="M10 18h4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                GeM Services
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                Sell on GeM, audits, catalogs &amp; management
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
      <div
       ref={ref} className="transition-all"
        style={{
        opacity: show ? 1 : 0,
        transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
        filter: show ? "blur(0px)" : "blur(3px)",
        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        
      }}
      >
        <a
          className="block group"
          href="/services/flipkart-account-management"
          data-discover="true"
        >
          <div className={`relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] 
          ${
    show ? "bg-primary/[0.02]" : "bg-card"
  } border-border/40 hover:border-border hover:shadow-custom-card-hover`}>
            <div className={`${show ? "bg-primary/8" : "bg-muted/50"} flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/6`}>
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
                className={`lucide lucide-shopping-bag  h-[18px] w-[18px] transition-colors duration-300 ${show ? "text-primary/70 " : "text-muted-foreground/50"} group-hover:text-primary`}
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                Flipkart Seller Management
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                Full Flipkart Seller Hub management
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
      <div
       ref={ref} className="transition-all"
        style={{
        opacity: show ? 1 : 0,
        transform: show
          ? "translate(0px, 0px)"
          : "translate(0px, 16px)",
        filter: show ? "blur(0px)" : "blur(3px)",
        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        
      }}
      >
        <a
          className="block group"
          href="/services/gem-audit"
          data-discover="true"
        >
          <div className={`relative flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] 
          ${
    show ? "bg-primary/[0.02]" : "bg-card"
  } border-border/40 hover:border-border hover:shadow-custom-card-hover`}>
            <div className={`${show ? "bg-primary/8" : "bg-muted/50"} flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/6`}>
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
                className={`lucide lucide-clipboard-check  h-[18px] w-[18px] transition-colors duration-300 ${show ? "text-primary/70 " : "text-muted-foreground/50"} group-hover:text-primary`}
              >
                <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="m9 14 2 2 4-4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                GeM Audit
              </h3>
              <p className="text-xs text-muted-foreground/55 mt-0.5 leading-snug">
                Find growth blockers inside live GeM accounts
              </p>
            </div>
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
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-border group-hover:text-primary/60 flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </a>
      </div>
    </div>
    <div
     ref={ref} className="transition-all"
      style={{
        opacity: 0,
        transform: "translate(0px, 16px)",
        filter: "blur(3px)",
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      <div className="text-center mt-12 space-y-4">
        <p className="text-sm text-muted-foreground">
          Need a tailored plan across marketplaces, GeM, or quick commerce?
        </p>
        <a
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-full px-7 text-sm font-semibold shadow-custom-sm hover:shadow-custom-md"
          href="/services"
          data-discover="true"
        >
          View All Services
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
            className="lucide lucide-arrow-right h-4 w-4 group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default MarketPlace