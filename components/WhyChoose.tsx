import React from 'react'

const WhyChoose = () => {

  const features = [
  {
    number: "01",
    title: "Dedicated Ecommerce Specialists",
    desc: "Our team understands marketplace algorithms, buyer behavior, advertising strategies, and ecommerce growth systems.",
  },

  {
    number: "02",
    title: "Data-Driven Growth Approach",
    desc: "We use analytics, performance tracking, and optimization strategies to improve visibility and conversions.",
  },

  {
    number: "03",
    title: "End-to-End Account Management",
    desc: "From setup to scaling, we manage your ecommerce operations completely.",
  },

  {
    number: "04",
    title: "Multi-Platform Marketplace Experience",
    desc: "Experience across Amazon, Flipkart, Meesho, Shopify, Quick Commerce, and global ecommerce marketplaces.",
  },

  {
    number: "05",
    title: "Performance-Focused Strategies",
    desc: "Every strategy is built to increase sales, improve ROI, and maximize profitability.",
  },

  {
    number: "06",
    title: "Operational Excellence",
    desc: "Proven processes and streamlined execution for long-term ecommerce growth and scalability.",
  },
]
  return (
   <>
   <section className="py-24 bg-background">
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
      <div className="text-center mb-16">
        <h2 className="text-foreground mb-4 font-display">
          Marketplace{" "}
          <span className="text-theme bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We manage your presence across 25+ major marketplaces in India and
          internationally
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
        <div className="relative bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-custom-lg transition-all duration-300 h-full group">
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary/60 transition-all duration-300" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
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
                className="lucide lucide-shopping-bag h-5 w-5 text-primary"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Indian Marketplaces
              </h3>
            </div>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/30 text-primary text-[10px] ml-auto">
              Domestic
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Flipkart
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Amazon.in
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Myntra
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              AJIO
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Tata CLiQ
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              JioMart
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Nykaa
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Meesho
            </span>
          </div>
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
        <div className="relative bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-custom-lg transition-all duration-300 h-full group">
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary/60 transition-all duration-300" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
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
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Quick Commerce
              </h3>
            </div>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/30 text-primary text-[10px] ml-auto">
              Fast Delivery
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Blinkit
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Zepto
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Swiggy Instamart
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              BB Daily
            </span>
          </div>
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
        <div className="relative bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-custom-lg transition-all duration-300 h-full group">
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary/60 transition-all duration-300" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
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
                className="lucide lucide-globe h-5 w-5 text-primary"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">
                International
              </h3>
            </div>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/30 text-primary text-[10px] ml-auto">
              Global
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Amazon.com
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Amazon.co.uk
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              eBay
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Etsy
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Walmart
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Wayfair
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Noon
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Lazada
            </span>
            <span className="text-sm py-1.5 px-3.5 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              Shopee
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-20 max-w-5xl mx-auto">
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
        <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12 font-display">
          Why Choose Us?
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {features.map((feature, index) => (

    <div key={index} className="flex gap-4 items-start">

      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm flex items-center justify-center">

        {feature.number}

      </div>

      <div>

        <h4 className="font-semibold text-foreground mb-1">

          {feature.title}

        </h4>

        <p className="text-sm text-muted-foreground leading-relaxed">

          {feature.desc}

        </p>

      </div>

    </div>

  ))}
       
      
        
        
        
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default WhyChoose