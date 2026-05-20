import React from 'react'
import { useEffect, useRef, useState } from "react";
const Counter = () => {
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
  className="py-20 md:py-28 bg-background relative"
  aria-label="Company statistics"
>
  <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-muted/20 to-transparent pointer-events-none" />
  <div className="container mx-auto px-4 lg:px-6 relative">
    <cite className="block text-center text-[11px] text-muted-foreground/30 mb-12 not-italic tracking-wider">
      Data as of March 2026 — Sales Strive internal metrics
    </cite>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
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
        <div className="group relative text-center p-6 md:p-8 rounded-2xl bg-card border border-border/40 hover:border-primary/15 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden hover:shadow-custom-card-hover">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-b-full bg-border group-hover:bg-primary/60 group-hover:w-14 transition-all duration-500" />
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-muted/50 mb-5 group-hover:bg-primary/8 group-hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.15)] transition-all duration-500">
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
              className="lucide lucide-trending-up h-[18px] w-[18px] text-muted-foreground/50 group-hover:text-primary transition-colors duration-400"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          </div>
          <h3 className="metric-value text-2xl md:text-[2rem] text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
            <span>500+</span>
          </h3>
          <p className="text-xs md:text-sm font-semibold text-foreground/75 mb-1">
            Brands Managed
          </p>
          <p className="text-[11px] text-muted-foreground/50 hidden md:block">
            Across multiple industries
          </p>
        </div>
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
        <div className="group relative text-center p-6 md:p-8 rounded-2xl bg-card border border-border/40 hover:border-primary/15 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden hover:shadow-custom-card-hover">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-b-full bg-border group-hover:bg-primary/60 group-hover:w-14 transition-all duration-500" />
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-muted/50 mb-5 group-hover:bg-primary/8 group-hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.15)] transition-all duration-500">
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
              className="lucide lucide-users h-[18px] w-[18px] text-muted-foreground/50 group-hover:text-primary transition-colors duration-400"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="metric-value text-2xl md:text-[2rem] text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
            <span>45+</span>
          </h3>
          <p className="text-xs md:text-sm font-semibold text-foreground/75 mb-1">
            Team Members
          </p>
          <p className="text-[11px] text-muted-foreground/50 hidden md:block">
            E-commerce experts
          </p>
        </div>
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
        <div className="group relative text-center p-6 md:p-8 rounded-2xl bg-card border border-border/40 hover:border-primary/15 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden hover:shadow-custom-card-hover">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-b-full bg-border group-hover:bg-primary/60 group-hover:w-14 transition-all duration-500" />
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-muted/50 mb-5 group-hover:bg-primary/8 group-hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.15)] transition-all duration-500">
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
              className="lucide lucide-award h-[18px] w-[18px] text-muted-foreground/50 group-hover:text-primary transition-colors duration-400"
            >
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
              <circle cx={12} cy={8} r={6} />
            </svg>
          </div>
          <h3 className="metric-value text-2xl md:text-[2rem] text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
            <span>9+</span>
          </h3>
          <p className="text-xs md:text-sm font-semibold text-foreground/75 mb-1">
            Years Experience
          </p>
          <p className="text-[11px] text-muted-foreground/50 hidden md:block">
            Since 2016
          </p>
        </div>
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
        <div className="group relative text-center p-6 md:p-8 rounded-2xl bg-card border border-border/40 hover:border-primary/15 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden hover:shadow-custom-card-hover">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-b-full bg-border group-hover:bg-primary/60 group-hover:w-14 transition-all duration-500" />
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-muted/50 mb-5 group-hover:bg-primary/8 group-hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.15)] transition-all duration-500">
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
              className="lucide lucide-globe h-[18px] w-[18px] text-muted-foreground/50 group-hover:text-primary transition-colors duration-400"
            >
              <circle cx={12} cy={12} r={10} />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </div>
          <h3 className="metric-value text-2xl md:text-[2rem] text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
            <span>$100M+</span>
          </h3>
          <p className="text-xs md:text-sm font-semibold text-foreground/75 mb-1">
            Revenue Generated
          </p>
          <p className="text-[11px] text-muted-foreground/50 hidden md:block">
            For our clients
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Counter