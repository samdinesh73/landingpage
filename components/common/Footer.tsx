import React from 'react'

const Footer = () => {
  return (
   <>
   <footer
  className="bg-foreground text-background pt-20 pb-10 relative"
  itemScope
  itemType="https://schema.org/WPFooter"
>
  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
  <div className="container mx-auto px-4 lg:px-6">
    <nav
      aria-label="Footer navigation"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14"
    >
      <div className="lg:col-span-1">
        <img
          src="/assets/swc-logo-Cn9HnPNX.png"
          alt="Sales Strive"
          width={171}
          height={48}
          className="h-7 w-auto mb-5"
        />
        <p className="text-background/40 text-xs leading-relaxed mb-5">
          Full-stack E-commerce agency helping brands scale on marketplaces in
          India and abroad since 2016.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://www.facebook.com/swcybernetics"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-background/5 hover:bg-accent/15 flex items-center justify-center text-background/35 hover:text-accent transition-all duration-300"
            aria-label="Facebook"
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
              className="lucide lucide-facebook h-3.5 w-3.5"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://in.linkedin.com/company/sw-cybernetics"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-background/5 hover:bg-accent/15 flex items-center justify-center text-background/35 hover:text-accent transition-all duration-300"
            aria-label="LinkedIn"
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
              className="lucide lucide-linkedin h-3.5 w-3.5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width={4} height={12} x={2} y={9} />
              <circle cx={4} cy={4} r={2} />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/swcybernetics/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-background/5 hover:bg-accent/15 flex items-center justify-center text-background/35 hover:text-accent transition-all duration-300"
            aria-label="Instagram"
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
              className="lucide lucide-instagram h-3.5 w-3.5"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@swcybernetics"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-background/5 hover:bg-accent/15 flex items-center justify-center text-background/35 hover:text-accent transition-all duration-300"
            aria-label="YouTube"
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
              className="lucide lucide-youtube h-3.5 w-3.5"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="md:block">
        <button className="md:hidden w-full flex items-center justify-between text-sm font-semibold mb-2 py-2 active:opacity-70 transition-opacity">
          <span>Services</span>
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
            className="lucide lucide-chevron-down h-3.5 w-3.5 transition-transform duration-300"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <h4 className="hidden md:block text-[10px] font-semibold mb-4 uppercase tracking-[0.15em] text-background/60">
          Services
        </h4>
        <div className="md:block overflow-hidden transition-all duration-300 ease-out max-h-0 md:max-h-none opacity-0 md:opacity-100">
          <ul className="space-y-2 text-xs text-background/40">
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/amazon-account-management"
                data-discover="true"
              >
                Amazon Account Management
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/amazon-advertising-agency"
                data-discover="true"
              >
                Amazon Advertising Agency
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/amazon-ppc-agency"
                data-discover="true"
              >
                Amazon PPC Management
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/amazon-ppc-management-cost-india"
                data-discover="true"
              >
                Amazon PPC Pricing
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/amazon-account-health-audit"
                data-discover="true"
              >
                Free Account Health Audit
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold"
                href="/amazon-agency"
                data-discover="true"
              >
                Amazon Agency
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/amazon-marketing-agency"
                data-discover="true"
              >
                Amazon Marketing Agency
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/flipkart-onboarding"
                data-discover="true"
              >
                Flipkart Onboarding
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/myntra-onboarding"
                data-discover="true"
              >
                Myntra Onboarding
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/catalog-management"
                data-discover="true"
              >
                Catalog Management
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/advertising-promotions"
                data-discover="true"
              >
                Advertising &amp; PPC
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/blinkit-onboarding"
                data-discover="true"
              >
                Blinkit Onboarding
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/gem-onboarding"
                data-discover="true"
              >
                GeM Registration &amp; Tendering
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/gem-services"
                data-discover="true"
              >
                GeM Services
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/sell-on-gem"
                data-discover="true"
              >
                Sell on GeM
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/gem-audit"
                data-discover="true"
              >
                GeM Audit
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/gem-account-management"
                data-discover="true"
              >
                GeM Account Management
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/swiggy-instamart-onboarding"
                data-discover="true"
              >
                Swiggy Instamart
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/zepto-onboarding"
                data-discover="true"
              >
                Zepto Onboarding
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/ecommerce-agency-india"
                data-discover="true"
              >
                Ecommerce Agency India
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/d2c-brand-agency"
                data-discover="true"
              >
                Marketplace Brand Agency
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/amazon-a-plus-content"
                data-discover="true"
              >
                Amazon A+ Content
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/services/global-sales"
                data-discover="true"
              >
                Global Sales (US &amp; 15+ Countries)
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-medium text-background/55"
                href="/services"
                data-discover="true"
              >
                View All Services →
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:block">
        <button className="md:hidden w-full flex items-center justify-between text-sm font-semibold mb-2 py-2 active:opacity-70 transition-opacity">
          <span>Locations</span>
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
            className="lucide lucide-chevron-down h-3.5 w-3.5 transition-transform duration-300"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <h4 className="hidden md:block text-[10px] font-semibold mb-4 uppercase tracking-[0.15em] text-background/60">
          Locations
        </h4>
        <div className="md:block overflow-hidden transition-all duration-300 ease-out max-h-0 md:max-h-none opacity-0 md:opacity-100">
          <ul className="space-y-2 text-xs text-background/40">
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/amazon-agency-delhi"
                data-discover="true"
              >
                Amazon Agency Delhi
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/amazon-agency-mumbai"
                data-discover="true"
              >
                Amazon Agency Mumbai
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/amazon-agency-bangalore"
                data-discover="true"
              >
                Amazon Agency Bangalore
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/amazon-agency-hyderabad"
                data-discover="true"
              >
                Amazon Agency Hyderabad
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/amazon-agency-pune"
                data-discover="true"
              >
                Amazon Agency Pune
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/amazon-agency-chennai"
                data-discover="true"
              >
                Amazon Agency Chennai
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/amazon-agency-kolkata"
                data-discover="true"
              >
                Amazon Agency Kolkata
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/amazon-agency-gurgaon"
                data-discover="true"
              >
                Amazon Agency Gurgaon
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-medium text-background/55"
                href="/locations"
                data-discover="true"
              >
                View All Locations →
              </a>
            </li>
          </ul>
          <h4 className="text-[10px] font-semibold mt-5 mb-2 uppercase tracking-[0.15em] text-background/45">
            Q-Commerce
          </h4>
          <ul className="space-y-1.5 text-xs text-background/40">
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/blinkit-onboarding-delhi"
                data-discover="true"
              >
                Blinkit Delhi
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/gem-onboarding-delhi"
                data-discover="true"
              >
                GeM Delhi NCR
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/gem-onboarding-noida"
                data-discover="true"
              >
                GeM Noida
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/blinkit-onboarding-mumbai"
                data-discover="true"
              >
                Blinkit Mumbai
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/blinkit-onboarding-bangalore"
                data-discover="true"
              >
                Blinkit Bangalore
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/zepto-onboarding-mumbai"
                data-discover="true"
              >
                Zepto Mumbai
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations/swiggy-instamart-onboarding-delhi"
                data-discover="true"
              >
                Instamart Delhi
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:block">
        <button className="md:hidden w-full flex items-center justify-between text-sm font-semibold mb-2 py-2 active:opacity-70 transition-opacity">
          <span>Free Tools</span>
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
            className="lucide lucide-chevron-down h-3.5 w-3.5 transition-transform duration-300"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <h4 className="hidden md:block text-[10px] font-semibold mb-4 uppercase tracking-[0.15em] text-background/60">
          Free Tools
        </h4>
        <div className="md:block overflow-hidden transition-all duration-300 ease-out max-h-0 md:max-h-none opacity-0 md:opacity-100">
          <ul className="space-y-2 text-xs text-background/40">
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/tools/free-amazon-audit"
                data-discover="true"
              >
                ★ Free Amazon Audit
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/reports/india-ecommerce-benchmark-2026"
                data-discover="true"
              >
                ★ 2026 Benchmark Report
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/reports/state-of-q-commerce-2026"
                data-discover="true"
              >
                ★ State of Q-commerce 2026
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/tools/agency-comparison"
                data-discover="true"
              >
                ★ Agency Comparison Tool
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/embed"
                data-discover="true"
              >
                ★ Embed our Calculators
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/founder/videos"
                data-discover="true"
              >
                ★ Weekly Videos
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/tools/roi-quiz"
                data-discover="true"
              >
                ★ 90-sec ROI Quiz
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/pricing"
                data-discover="true"
              >
                ★ Transparent Pricing
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/roi-guarantee"
                data-discover="true"
              >
                ★ 4× ROI Guarantee
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/research"
                data-discover="true"
              >
                ★ 2026 Research Hub
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/onboarding"
                data-discover="true"
              >
                ★ Client Onboarding
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/industry"
                data-discover="true"
              >
                ★ Industry Playbooks
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/compare"
                data-discover="true"
              >
                ★ Compare Agencies
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/press/expert-quotes"
                data-discover="true"
              >
                ★ Expert Quote Bank
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/press/stat-library"
                data-discover="true"
              >
                ★ Stat Library 2026
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/partners/badge-program"
                data-discover="true"
              >
                ★ Partner Badge Program
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/amazon-agency-for"
                data-discover="true"
              >
                ★ Amazon Agency × Category × City
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/flipkart-agency-for"
                data-discover="true"
              >
                ★ Flipkart Agency × Category × City
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/blinkit-agency-for"
                data-discover="true"
              >
                ★ Blinkit Agency × Category × City
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/zepto-agency-for"
                data-discover="true"
              >
                ★ Zepto Agency × Category × City
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-semibold text-accent"
                href="/instamart-agency-for"
                data-discover="true"
              >
                ★ Instamart Agency × Category × City
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/press/pitches"
                data-discover="true"
              >
                For Journalists
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/partnerships/co-marketing"
                data-discover="true"
              >
                Co-marketing
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/founder/speaking"
                data-discover="true"
              >
                Book a Keynote
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/resources/amazon-profit-calculator"
                data-discover="true"
              >
                Amazon Profit Calculator
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/resources/flipkart-fee-calculator"
                data-discover="true"
              >
                Flipkart Fee Calculator
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/resources/blinkit-fee-calculator"
                data-discover="true"
              >
                Blinkit Fee Calculator
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/resources/amazon-advertising-roi-calculator"
                data-discover="true"
              >
                ROI Calculator
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/resources/listing-grader"
                data-discover="true"
              >
                Listing Grader
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/resources/swiggy-instamart-fee-calculator"
                data-discover="true"
              >
                Instamart Fee Calculator
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/resources/keyword-research"
                data-discover="true"
              >
                Keyword Research
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/guides/sell-on-flipkart"
                data-discover="true"
              >
                How to Sell on Flipkart
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/guides/gem-registration"
                data-discover="true"
              >
                GeM Registration Guide
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/guides/gem-service-seller-registration"
                data-discover="true"
              >
                GeM Service Seller Guide
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/guides/gem-catalog-errors"
                data-discover="true"
              >
                GeM Catalog Errors
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/guides/gem-bid-disqualified"
                data-discover="true"
              >
                GeM Bid Disqualified
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/guides/sell-on-meesho"
                data-discover="true"
              >
                How to Sell on Meesho
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/guides/amazon-vs-flipkart-vs-meesho"
                data-discover="true"
              >
                Amazon vs Flipkart vs Meesho
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/knowledge-base"
                data-discover="true"
              >
                Knowledge Base
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/case-studies"
                data-discover="true"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/entity-profile"
                data-discover="true"
              >
                Entity Profile
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300 font-medium text-background/55"
                href="/resources"
                data-discover="true"
              >
                View All Tools →
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="text-[10px] font-semibold mb-4 uppercase tracking-[0.15em] text-background/60">
          Contact Us
        </h4>
        <div className="space-y-3 text-xs">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 text-background/40 hover:text-accent transition-colors group"
          >
            <div className="w-7 h-7 rounded-lg bg-background/5 group-hover:bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all">
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
                className="lucide lucide-map-pin h-3 w-3"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx={12} cy={10} r={3} />
              </svg>
            </div>
            <span className="leading-relaxed">
              D-34, Sector-11, Noida, Uttar Pradesh, 201301
            </span>
          </a>
          <a
            href="tel:+919811380023"
            className="flex items-center gap-2.5 text-background/40 hover:text-accent transition-colors group"
          >
            <div className="w-7 h-7 rounded-lg bg-background/5 group-hover:bg-accent/10 flex items-center justify-center flex-shrink-0 transition-all">
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
                className="lucide lucide-phone h-3 w-3"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span>+91 98113 80023</span>
          </a>
          <a
            href="mailto:contact@swcybernetics.in"
            className="flex items-center gap-2.5 text-background/40 hover:text-accent transition-colors group"
          >
            <div className="w-7 h-7 rounded-lg bg-background/5 group-hover:bg-accent/10 flex items-center justify-center flex-shrink-0 transition-all">
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
                className="lucide lucide-mail h-3 w-3"
              >
                <rect width={20} height={16} x={2} y={4} rx={2} />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <span>contact@swcybernetics.in</span>
          </a>
        </div>
        <div className="mt-6">
          <h4 className="text-[10px] font-semibold mb-3 uppercase tracking-[0.15em] text-background/45">
            Company
          </h4>
          <ul className="space-y-2 text-xs text-background/40">
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/about"
                data-discover="true"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/careers"
                data-discover="true"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/brands"
                data-discover="true"
              >
                Our Brands
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/case-studies"
                data-discover="true"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/founder/amogh-sachdev"
                data-discover="true"
              >
                Our Founder
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/founder/podcasts"
                data-discover="true"
              >
                Podcast Appearances
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/press"
                data-discover="true"
              >
                Press &amp; Media
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/global/amazon-agency-uk"
                data-discover="true"
              >
                Amazon UK Agency
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/global/amazon-agency-uae"
                data-discover="true"
              >
                Amazon UAE Agency
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/global/amazon-agency-sg"
                data-discover="true"
              >
                Amazon Singapore Agency
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/global/amazon-agency-au"
                data-discover="true"
              >
                Amazon Australia Agency
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/global/amazon-agency-de"
                data-discover="true"
              >
                Amazon Germany Agency
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors duration-300"
                href="/locations"
                data-discover="true"
              >
                All Locations
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      className="text-center text-[11px] text-background/30 mb-6 tracking-wide"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <span itemProp="name">Sales Strive</span> ·{" "}
      <span
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
      >
        <span itemProp="addressLocality">Delhi NCR</span>,{" "}
        <span itemProp="addressCountry">India</span>
      </span>{" "}
      ·{" "}
      <a
        href="tel:+919811380023"
        className="hover:text-accent transition-colors duration-300"
        itemProp="telephone"
      >
        +91-9811380023
      </a>{" "}
      ·{" "}
      <a
        href="mailto:contact@swcybernetics.in"
        className="hover:text-accent transition-colors duration-300"
        itemProp="email"
      >
        contact@swcybernetics.in
      </a>
    </div>
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-[11px] text-background/25 mb-10">
      <a
        className="hover:text-accent transition-colors duration-300"
        href="/cancellation-policy"
        data-discover="true"
      >
        Cancellation Policy
      </a>
      <a
        className="hover:text-accent transition-colors duration-300"
        href="/refund-policy"
        data-discover="true"
      >
        Refund Policy
      </a>
      <a
        className="hover:text-accent transition-colors duration-300"
        href="/privacy-policy"
        data-discover="true"
      >
        Privacy Policy
      </a>
      <a
        className="hover:text-accent transition-colors duration-300"
        href="/terms-conditions"
        data-discover="true"
      >
        Terms &amp; Conditions
      </a>
      <a
        className="hover:text-accent transition-colors duration-300"
        href="/sitemap"
        data-discover="true"
      >
        Sitemap
      </a>
    </div>
    <div className="border-t border-background/6 pt-6">
      <p className="text-[11px] text-background/25 text-center flex items-center justify-center gap-1.5 tracking-wide">
        © 2026 Sales Strive Pvt Ltd. Made with{" "}
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
          className="lucide lucide-heart h-3 w-3 text-accent fill-accent"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>{" "}
        in India
      </p>
    </div>
  </div>
</footer>

   </>
  )
}

export default Footer