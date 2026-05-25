import React from 'react'

const Pills = () => {
  return (
    <>
    <div className="sticky top-18 z-40 border-y border-border/40 bg-background/90 backdrop-blur-xl shadow-custom-sm/10">
  <div className="container mx-auto overflow-x-auto px-4 lg:px-6">
    <nav
      className="flex min-w-max items-center gap-2 py-2.5"
      aria-label="Homepage sections"
    >
      <a
        href="#services"
        className="rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-300 border-primary/25 bg-primary/5 text-primary shadow-custom-sm"
      >
        Services
      </a>
      <a
        href="#marketplaces"
        className="rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-300 border-border/50 bg-background text-muted-foreground hover:border-border hover:text-foreground"
      >
        Platforms
      </a>
      <a
        href="#proof"
        className="rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-300 border-border/50 bg-background text-muted-foreground hover:border-border hover:text-foreground"
      >
        Proof
      </a>
      <a
        href="#tools"
        className="rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-300 border-border/50 bg-background text-muted-foreground hover:border-border hover:text-foreground"
      >
        Tools
      </a>
      <a
        href="#contact"
        className="rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-300 border-border/50 bg-background text-muted-foreground hover:border-border hover:text-foreground"
      >
        Contact
      </a>
    </nav>
  </div>
</div>
    </>
  )
}

export default Pills