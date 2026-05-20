import React from 'react'

const Hero = () => {
  return (
    <>
    <section style={{ background: "rgb(106 173 226)" }} className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-hero" aria-label="Hero section"
  itemScope itemType="https://schema.org/WPHeader">
  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute -top-1/3 -left-1/4 w-[80%] h-[80%] bg-primary-light opacity-[0.08] rounded-full blur-[180px] animate-float-slow"></div>
    <div className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-accent opacity-[0.04] rounded-full blur-[180px] animate-float-slow-reverse"></div>
    <div className="absolute top-1/3 right-1/3 w-[30%] h-[30%] bg-primary-light opacity-[0.05] rounded-full blur-[120px] animate-float-slow-reverse"></div>
  </div>
  <div className="container mx-auto px-4 lg:px-6 py-24 md:py-28 relative z-10">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-3 text-center lg:text-left stagger-hero">
          <div className="inline-flex items-center gap-2.5 bg-background/[0.07] backdrop-blur-xl border border-background/[0.08] rounded-full px-4 py-2 mb-8 stats-section hero-stagger-1"
            role="banner"><span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span><span className="text-primary-foreground/90 font-semibold text-[11px] tracking-wide"
              itemProp="foundingDate">Founded 2016</span><span className="text-primary-foreground/30 text-[10px]" aria-hidden="true">·</span>
            <span
              className="text-primary-foreground/80 text-[11px]">500+ Brands</span><span className="text-primary-foreground/30 text-[10px] hidden sm:inline" aria-hidden="true">·</span>
              <span
                className="text-primary-foreground/80 text-[11px] hidden sm:inline">₹1000Cr+ GMV managed</span>
          </div>
          <h1 className="font-display text-[2.25rem] md:text-5xl lg:text-[3.75rem] font-extrabold text-white mb-5 leading-[1.06] tracking-[-0.035em] hero-stagger-2"
            itemProp="headline" style={{ textWrap: 'balance' }}>Scale Your Brand on <span className="relative inline-block">Every Marketplace<span className="absolute -bottom-1.5 left-0 w-full h-[3px] bg-accent/50 rounded-full"></span></span>
          </h1>
          <p className="text-sm md:text-base text-primary-foreground/80 mb-1.5 font-medium tracking-wide hero-stagger-3">India's Leading <a className="text-accent hover:text-accent transition-colors" href="/services/amazon-marketing-agency"
              data-discover="true">Amazon Marketing Agency</a> &amp; E-commerce Partner — 500+ Brands, ₹1000Cr+ GMV managed</p>
          <p
            className="text-[15px] md:text-base text-primary-foreground/75 mb-10 max-w-lg mx-auto lg:mx-0 hero-description leading-relaxed hero-stagger-4"
            itemProp="description">Expert marketplace management across Amazon, Flipkart, Myntra, Blinkit &amp; 15+ platforms. Delhi NCR based, trusted
            since 2016.</p>
            <div className="mb-8 hidden lg:block hero-stagger-4">
              <p className="text-primary-foreground/65 eyebrow mb-3 tracking-[0.16em]">Trusted by Leading Brands</p>
              <div className="relative max-w-2xl py-1">
                <div className="grid grid-cols-3 items-center gap-x-7 gap-y-4 sm:grid-cols-6 md:gap-x-9">
                  <div className="group flex h-12 items-center justify-center md:h-14"><img src="https://swcybernetics.in/brands/optimized/ucb.png" alt="United Colors of Benetton - Sales Strive Client" width="180"
                      height="72" className="max-h-full w-auto max-w-full object-contain saturate-150 contrast-125 brightness-110 drop-shadow-[0_2px_8px_hsl(var(--foreground)/0.18)] transition-all duration-300 group-hover:scale-105 group-hover:saturate-200"
                      loading="lazy" decoding="async" /></div>
                  <div className="group flex h-12 items-center justify-center md:h-14"><img src="https://swcybernetics.in/brands/optimized/syska.png" alt="Syska - Sales Strive Client" width="180" height="72" className="max-h-full w-auto max-w-full object-contain saturate-150 contrast-125 brightness-110 drop-shadow-[0_2px_8px_hsl(var(--foreground)/0.18)] transition-all duration-300 group-hover:scale-105 group-hover:saturate-200"
                      loading="lazy" decoding="async" /></div>
                  <div className="group flex h-12 items-center justify-center md:h-14"><img src="https://swcybernetics.in/brands/optimized/slurrp-farm.png" alt="Slurrp Farm - Sales Strive Client" width="180" height="72"
                      className="max-h-full w-auto max-w-full object-contain saturate-150 contrast-125 brightness-110 drop-shadow-[0_2px_8px_hsl(var(--foreground)/0.18)] transition-all duration-300 group-hover:scale-105 group-hover:saturate-200"
                      loading="lazy" decoding="async" /></div>
                  <div className="group flex h-12 items-center justify-center md:h-14"><img src="https://swcybernetics.in/brands/optimized/pink-harvest-farms.png" alt="Pink Harvest Farms - Sales Strive Client" width="180"
                      height="72" className="max-h-full w-auto max-w-full object-contain saturate-150 contrast-125 brightness-110 drop-shadow-[0_2px_8px_hsl(var(--foreground)/0.18)] transition-all duration-300 group-hover:scale-105 group-hover:saturate-200"
                      loading="lazy" decoding="async" /></div>
                  <div className="group flex h-12 items-center justify-center md:h-14"><img src="https://swcybernetics.in/brands/optimized/mr-makhana.png" alt="Mr Makhana - Sales Strive Client" width="180" height="72"
                      className="max-h-full w-auto max-w-full object-contain saturate-150 contrast-125 brightness-110 drop-shadow-[0_2px_8px_hsl(var(--foreground)/0.18)] transition-all duration-300 group-hover:scale-105 group-hover:saturate-200"
                      loading="lazy" decoding="async" /></div>
                  <div className="group flex h-12 items-center justify-center md:h-14"><img src="https://swcybernetics.in/brands/optimized/runbugz.png" alt="RunBugz - Sales Strive Client" width="180" height="72"
                      className="max-h-full w-auto max-w-full object-contain saturate-150 contrast-125 brightness-110 drop-shadow-[0_2px_8px_hsl(var(--foreground)/0.18)] transition-all duration-300 group-hover:scale-105 group-hover:saturate-200"
                      loading="lazy" decoding="async" /></div>
                </div>
              </div>
            </div>
            <div className="mb-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 hero-stagger-4">
              <div className="rounded-2xl border border-background/[0.08] bg-background/[0.06] px-4 py-3 text-left backdrop-blur-xl">
                <p className="text-lg font-bold text-white md:text-xl">500+</p>
                <p className="mt-1 text-xs font-medium text-primary-foreground/65">Brands Managed</p>
              </div>
              <div className="rounded-2xl border border-background/[0.08] bg-background/[0.06] px-4 py-3 text-left backdrop-blur-xl">
                <p className="text-lg font-bold text-white md:text-xl">₹1000Cr+</p>
                <p className="mt-1 text-xs font-medium text-primary-foreground/65">GMV Delivered</p>
              </div>
              <div className="rounded-2xl border border-background/[0.08] bg-background/[0.06] px-4 py-3 text-left backdrop-blur-xl">
                <p className="text-lg font-bold text-white md:text-xl">10+</p>
                <p className="mt-1 text-xs font-medium text-primary-foreground/65">Years of Expertise</p>
              </div>
            </div>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start hero-stagger-5"><a className="rounded-full border border-background/[0.12] bg-background/[0.06] px-4 py-2 text-xs font-semibold text-primary-foreground/80 backdrop-blur-xl transition-all duration-300 hover:bg-background/[0.1] hover:text-primary-foreground"
                href="/amazon-agency" data-discover="true">Amazon Agency</a><a className="rounded-full border border-background/[0.12] bg-background/[0.06] px-4 py-2 text-xs font-semibold text-primary-foreground/80 backdrop-blur-xl transition-all duration-300 hover:bg-background/[0.1] hover:text-primary-foreground"
                href="/services/amazon-marketing-agency" data-discover="true">Amazon Growth</a><a className="rounded-full border border-background/[0.12] bg-background/[0.06] px-4 py-2 text-xs font-semibold text-primary-foreground/80 backdrop-blur-xl transition-all duration-300 hover:bg-background/[0.1] hover:text-primary-foreground"
                href="/services/gem-onboarding" data-discover="true">GeM Onboarding</a><a className="rounded-full border border-background/[0.12] bg-background/[0.06] px-4 py-2 text-xs font-semibold text-primary-foreground/80 backdrop-blur-xl transition-all duration-300 hover:bg-background/[0.1] hover:text-primary-foreground"
                href="/services/qcommerce-management" data-discover="true">Quick Commerce</a><a className="rounded-full border border-background/[0.12] bg-background/[0.06] px-4 py-2 text-xs font-semibold text-primary-foreground/80 backdrop-blur-xl transition-all duration-300 hover:bg-background/[0.1] hover:text-primary-foreground"
                href="/resources" data-discover="true">Free Tools</a></div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center sm:items-start mb-4 hero-stagger-5"><a href="#contact"><button className="btn-bg inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 bg-accent hover:bg-accent-light text-accent-foreground shadow-custom-md hover:shadow-custom-lg text-[15px] px-8 py-6 group active:scale-[0.97] transition-all duration-300 rounded-full font-semibold" aria-label="Get a free Amazon and marketplace audit">Get Free Marketplace Audit<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></a>
              <a
                href="/case-studies" data-discover="true"><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 text-primary-foreground/80 hover:text-primary-foreground hover:bg-background/8 text-[15px] px-6 py-6 active:scale-[0.97] transition-all duration-300 rounded-full font-medium"
                  aria-label="View our e-commerce case studies and success stories">See Case Studies</button></a>
            </div>
            <div className="lg:hidden mt-8"><button className="w-full bg-background/[0.06] backdrop-blur-xl border border-background/[0.08] rounded-2xl p-4 text-left transition-all duration-300 group active:scale-[0.99]"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-4 w-4 text-accent"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg></div><div><p className="text-white font-semibold text-sm">Get a Free Marketplace Audit</p><p className="text-primary-foreground/65 text-xs mt-0.5">Growth plan in 24 hours</p></div></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 text-primary-foreground/50 transition-transform duration-300"><path d="m6 9 6 6 6-6"></path></svg></div></button>
              <div
                className="overflow-hidden transition-all duration-400 ease-out max-h-0 opacity-0">
                <div className="bg-background/[0.06] backdrop-blur-xl border border-background/[0.08] rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-4 w-4 text-accent"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
                    <span
                      className="eyebrow text-accent">Free Audit</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1.5">Get a Free Marketplace Audit</h2>
                  <p className="text-primary-foreground/70 text-sm mb-6">Growth plan delivered within 24 hours</p>
                  <form className="space-y-4">
                    <div className="space-y-1.5"><label htmlFor="hero-name" className="block text-xs font-semibold text-white/90 tracking-wide">Full name</label>
                      <div
                        className="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/70"
                          aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <input
                          type="text" className="flex w-full border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11 bg-white border-white/40 text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:bg-white h-12 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent/30"
                          id="hero-name" placeholder="e.g. Rahul Sharma" required maxLength={100} autoComplete="name" /></div>
                </div>
                <div className="space-y-1.5"><label htmlFor="hero-phone" className="block text-xs font-semibold text-white/90 tracking-wide">Phone / WhatsApp number</label>
                  <div
                    className="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/70"
                      aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <input
                      type="tel" className="flex w-full border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11 bg-white border-white/40 text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:bg-white h-12 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent/30"
                      id="hero-phone" placeholder="e.g. +91 98113 80023" required maxLength={20} autoComplete="tel" /></div>
            </div>
            <div className="space-y-1.5"><label htmlFor="hero-email" className="block text-xs font-semibold text-white/90 tracking-wide">Work email</label>
              <div
                className="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/70"
                  aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                <input
                  type="email" className="flex w-full border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11 bg-white border-white/40 text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:bg-white h-12 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent/30"
                  id="hero-email" placeholder="e.g. rahul@yourbrand.com" required maxLength={255} autoComplete="email" /></div>
        </div><button className="btn-bg inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 w-full bg-accent hover:bg-accent-light text-accent-foreground shadow-custom-md hover:shadow-custom-lg transition-all duration-300 text-[15px] py-6 font-semibold group active:scale-[0.97] rounded-xl"
          type="submit">Get Free Audit<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></form>
        <div
          className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
          <div className="flex items-center gap-1.5 text-primary-foreground/70 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check h-3 w-3 text-accent/70 flex-shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span>Free report</span></div>
          <div
            className="flex items-center gap-1.5 text-primary-foreground/70 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check h-3 w-3 text-accent/70 flex-shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span>No commitment</span></div>
      <div
        className="flex items-center gap-1.5 text-primary-foreground/70 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check h-3 w-3 text-accent/70 flex-shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span>2hr response</span></div>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div className="lg:col-span-2 hidden lg:block hero-stagger-6">
    <div className="bg-background/[0.06] backdrop-blur-2xl border border-background/[0.08] rounded-3xl p-8 shadow-custom-xl relative overflow-hidden hover:border-background/[0.14] transition-all duration-500 hover:shadow-[0_32px_80px_-20px_rgba(0,0,0,0.3)]">
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent/[0.06] rounded-full blur-[60px]" aria-hidden="true"></div>
      <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-primary-light/[0.06] rounded-full blur-[50px]" aria-hidden="true"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-4 w-4 text-accent"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
          <span
            className="eyebrow text-accent">Free Audit</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-1.5">Get a Free Marketplace Audit</h2>
        <p className="text-primary-foreground/70 text-sm mb-6">Growth plan delivered within 24 hours</p>
        <form className="space-y-4">
          <div className="space-y-1.5"><label htmlFor="hero-name" className="block text-xs font-semibold text-white/90 tracking-wide">Full name</label>
            <div className="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/70"
                aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <input
                type="text" className="flex w-full border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11 bg-white border-white/40 text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:bg-white h-12 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent/30"
                id="hero-name" placeholder="e.g. Rahul Sharma" required maxLength={100} autoComplete="name" /></div>
          </div>
          <div className="space-y-1.5"><label htmlFor="hero-phone" className="block text-xs font-semibold text-white/90 tracking-wide">Phone / WhatsApp number</label>
            <div
              className="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/70"
                aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <input
                type="tel" className="flex w-full border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11 bg-white border-white/40 text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:bg-white h-12 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent/30"
                id="hero-phone" placeholder="e.g. +91 98113 80023" required maxLength={20} autoComplete="tel" /></div>
      </div>
      <div className="space-y-1.5"><label htmlFor="hero-email" className="block text-xs font-semibold text-white/90 tracking-wide">Work email</label>
        <div className="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/70"
            aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          <input
            type="email" className="flex w-full border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11 bg-white border-white/40 text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:bg-white h-12 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent/30"
            id="hero-email" placeholder="e.g. rahul@yourbrand.com" required maxLength={255} autoComplete="email" /></div>
      </div><button className="btn-bg inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 w-full bg-accent hover:bg-accent-light text-accent-foreground shadow-custom-md hover:shadow-custom-lg transition-all duration-300 text-[15px] py-6 font-semibold group active:scale-[0.97] rounded-xl"
        type="submit">Get Free Audit<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></form>
      <div
        className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        <div className="flex items-center gap-1.5 text-primary-foreground/70 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check h-3 w-3 text-accent/70 flex-shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span>Free report</span></div>
        <div
          className="flex items-center gap-1.5 text-primary-foreground/70 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check h-3 w-3 text-accent/70 flex-shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span>No commitment</span></div>
    <div
      className="flex items-center gap-1.5 text-primary-foreground/70 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check h-3 w-3 text-accent/70 flex-shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span>2hr response</span></div>
  </div>
  </div>
  </div>
  </div>
  </div>
  <aside className="mt-12 animate-fade-in lg:hidden" aria-label="Trusted brands" style={{ animationDelay: '0.4s', minHeight: '176px' }}>
    <p className="text-primary-foreground/65 eyebrow mb-4 text-center tracking-[0.18em]">Trusted by Leading Indian &amp; International Brands</p>
    <div className="relative max-w-2xl py-1">
      <div className="grid grid-cols-3 items-center gap-x-7 gap-y-4 sm:grid-cols-6 md:gap-x-9">
        <div className="group flex h-12 items-center justify-center md:h-14"><img src="/brands/optimized/ucb.png" alt="United Colors of Benetton - Sales Strive Client" width="180" height="72"
            className="max-h-full w-auto max-w-full object-contain saturate-150 contrast-125 brightness-110 drop-shadow-[0_2px_8px_hsl(var(--foreground)/0.18)] transition-all duration-300 group-hover:scale-105 group-hover:saturate-200"
            loading="lazy" decoding="async" /></div>
        <div className="group flex h-12 items-center justify-center md:h-14"><img src="/brands/optimized/syska.png" alt="Syska - Sales Strive Client" width="180" height="72" className="max-h-full w-auto max-w-full object-contain saturate-150 contrast-125 brightness-110 drop-shadow-[0_2px_8px_hsl(var(--foreground)/0.18)] transition-all duration-300 group-hover:scale-105 group-hover:saturate-200"
            loading="lazy" decoding="async" /></div>
        <div className="group flex h-12 items-center justify-center md:h-14"><img src="/brands/optimized/slurrp-farm.png" alt="Slurrp Farm - Sales Strive Client" width="180" height="72" className="max-h-full w-auto max-w-full object-contain saturate-150 contrast-125 brightness-110 drop-shadow-[0_2px_8px_hsl(var(--foreground)/0.18)] transition-all duration-300 group-hover:scale-105 group-hover:saturate-200"
            loading="lazy" decoding="async" /></div>
        <div className="group flex h-12 items-center justify-center md:h-14"><img src="/brands/optimized/pink-harvest-farms.png" alt="Pink Harvest Farms - Sales Strive Client" width="180"
            height="72" className="max-h-full w-auto max-w-full object-contain saturate-150 contrast-125 brightness-110 drop-shadow-[0_2px_8px_hsl(var(--foreground)/0.18)] transition-all duration-300 group-hover:scale-105 group-hover:saturate-200"
            loading="lazy" decoding="async" /></div>
        <div className="group flex h-12 items-center justify-center md:h-14"><img src="/brands/optimized/mr-makhana.png" alt="Mr Makhana - Sales Strive Client" width="180" height="72" className="max-h-full w-auto max-w-full object-contain saturate-150 contrast-125 brightness-110 drop-shadow-[0_2px_8px_hsl(var(--foreground)/0.18)] transition-all duration-300 group-hover:scale-105 group-hover:saturate-200"
            loading="lazy" decoding="async" /></div>
        <div className="group flex h-12 items-center justify-center md:h-14"><img src="/brands/optimized/runbugz.png" alt="RunBugz - Sales Strive Client" width="180" height="72" className="max-h-full w-auto max-w-full object-contain saturate-150 contrast-125 brightness-110 drop-shadow-[0_2px_8px_hsl(var(--foreground)/0.18)] transition-all duration-300 group-hover:scale-105 group-hover:saturate-200"
            loading="lazy" decoding="async" /></div>
      </div>
    </div>
  </aside>
  </div>
  </div>
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-primary-foreground/35 hover:text-primary-foreground/50 transition-colors cursor-pointer"
    aria-hidden="true"><span className="text-[9px] uppercase tracking-[0.3em] font-medium">Scroll</span><svg xmlns="http://www.w3.org/2000/svg" width="24"
      height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="lucide lucide-chevron-down h-3.5 w-3.5 animate-bounce"><path d="m6 9 6 6 6-6"></path></svg></div>
</section>
    </>
  )
}

export default Hero