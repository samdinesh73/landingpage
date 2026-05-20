import React from 'react'

const WhyChooseTable = () => {
  return (
   <>
   
   <section className="py-20 bg-background">
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
        <h2 className="text-foreground mb-3 font-display">
          Why Choose{" "}
          <span className="text-theme bg-clip-text text-transparent">
            Sales Strive?
          </span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          See how we compare against doing it yourself or hiring a generic
          agency
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
      <div className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left py-4 px-5 text-sm font-semibold text-foreground">
                Feature
              </th>
              <th className="py-4 px-4 text-center bg-primary/8">
                <span className="text-sm font-bold text-primary">
                  Sales Strive
                </span>
              </th>
              <th className="py-4 px-4 text-center text-sm font-semibold text-muted-foreground">
                DIY
              </th>
              <th className="py-4 px-4 text-center text-sm font-semibold text-muted-foreground">
                Other Agencies
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border/50 hover:bg-muted/20 transition-colors">
              <td className="py-3.5 px-5 text-sm text-foreground font-medium">
                Dedicated Account Manager
              </td>
              <td className="py-3.5 px-4 text-center bg-primary/5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
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
                    className="lucide lucide-check h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/5">
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
                    className="lucide lucide-x h-4 w-4 text-destructive/50"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
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
                    className="lucide lucide-check h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="border-t border-border/50 hover:bg-muted/20 transition-colors">
              <td className="py-3.5 px-5 text-sm text-foreground font-medium">
                Amazon SPN Verified Partner
              </td>
              <td className="py-3.5 px-4 text-center bg-primary/5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
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
                    className="lucide lucide-check h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/5">
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
                    className="lucide lucide-x h-4 w-4 text-destructive/50"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="text-xs text-muted-foreground font-medium">
                  Some
                </span>
              </td>
            </tr>
            <tr className="border-t border-border/50 hover:bg-muted/20 transition-colors">
              <td className="py-3.5 px-5 text-sm text-foreground font-medium">
                Multi-Marketplace Expertise (15+)
              </td>
              <td className="py-3.5 px-4 text-center bg-primary/5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
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
                    className="lucide lucide-check h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/5">
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
                    className="lucide lucide-x h-4 w-4 text-destructive/50"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/5">
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
                    className="lucide lucide-x h-4 w-4 text-destructive/50"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="border-t border-border/50 hover:bg-muted/20 transition-colors">
              <td className="py-3.5 px-5 text-sm text-foreground font-medium">
                AI-Powered Listing Optimization
              </td>
              <td className="py-3.5 px-4 text-center bg-primary/5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
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
                    className="lucide lucide-check h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/5">
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
                    className="lucide lucide-x h-4 w-4 text-destructive/50"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/5">
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
                    className="lucide lucide-x h-4 w-4 text-destructive/50"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="border-t border-border/50 hover:bg-muted/20 transition-colors">
              <td className="py-3.5 px-5 text-sm text-foreground font-medium">
                Weekly Performance Reports
              </td>
              <td className="py-3.5 px-4 text-center bg-primary/5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
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
                    className="lucide lucide-check h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/5">
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
                    className="lucide lucide-x h-4 w-4 text-destructive/50"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="text-xs text-muted-foreground font-medium">
                  Monthly
                </span>
              </td>
            </tr>
            <tr className="border-t border-border/50 hover:bg-muted/20 transition-colors">
              <td className="py-3.5 px-5 text-sm text-foreground font-medium">
                Q-Commerce Onboarding
              </td>
              <td className="py-3.5 px-4 text-center bg-primary/5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
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
                    className="lucide lucide-check h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/5">
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
                    className="lucide lucide-x h-4 w-4 text-destructive/50"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="text-xs text-muted-foreground font-medium">
                  Some
                </span>
              </td>
            </tr>
            <tr className="border-t border-border/50 hover:bg-muted/20 transition-colors">
              <td className="py-3.5 px-5 text-sm text-foreground font-medium">
                International Expansion Support
              </td>
              <td className="py-3.5 px-4 text-center bg-primary/5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
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
                    className="lucide lucide-check h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/5">
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
                    className="lucide lucide-x h-4 w-4 text-destructive/50"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/5">
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
                    className="lucide lucide-x h-4 w-4 text-destructive/50"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="border-t border-border/50 hover:bg-muted/20 transition-colors">
              <td className="py-3.5 px-5 text-sm text-foreground font-medium">
                24/7 Account Monitoring
              </td>
              <td className="py-3.5 px-4 text-center bg-primary/5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
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
                    className="lucide lucide-check h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/5">
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
                    className="lucide lucide-x h-4 w-4 text-destructive/50"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/5">
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
                    className="lucide lucide-x h-4 w-4 text-destructive/50"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="border-t border-border/50 hover:bg-muted/20 transition-colors">
              <td className="py-3.5 px-5 text-sm text-foreground font-medium">
                Transparent Pricing
              </td>
              <td className="py-3.5 px-4 text-center bg-primary/5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
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
                    className="lucide lucide-check h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
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
                    className="lucide lucide-check h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="text-xs text-muted-foreground font-medium">
                  Varies
                </span>
              </td>
            </tr>
            <tr className="border-t border-border/50 hover:bg-muted/20 transition-colors">
              <td className="py-3.5 px-5 text-sm text-foreground font-medium">
                Proven Track Record (500+ Brands)
              </td>
              <td className="py-3.5 px-4 text-center bg-primary/5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
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
                    className="lucide lucide-check h-4 w-4 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-destructive/5">
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
                    className="lucide lucide-x h-4 w-4 text-destructive/50"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="text-xs text-muted-foreground font-medium">
                  Limited
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

   
   </>
  )
}

export default WhyChooseTable