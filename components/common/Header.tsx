import React from 'react'

const Header = () => {
  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-background border-b border-border/10">
  <div className="container mx-auto px-4 lg:px-6">
    <div
      className="flex items-center justify-between transition-all duration-500 ease-out"
      style={{ height: 72 }}
    >
      <a
        className="flex items-center flex-shrink-0"
        aria-label="Sales Strive Home"
        href="/"
        data-discover="true"
      >
        <img
          src="/assets/swc-logo-Cn9HnPNX.png"
          alt="ss"
          width={142}
          height={40}
          className="w-auto transition-all duration-500 ease-out"
          style={{ height: 34 }}
        />
      </a>
      <div className="hidden md:flex items-center gap-0.5">
        <a
          className="relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 group text-primary"
          href="/"
          data-discover="true"
        >
          Home
          <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[1.5px] bg-primary rounded-full animate-[scaleIn_0.3s_ease-out]" />
        </a>
        <a
          className="relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 group text-foreground/55 hover:text-foreground hover:bg-muted/40"
          href="/about"
          data-discover="true"
        >
          About
          <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary/40 rounded-full transition-all duration-300 group-hover:w-3" />
        </a>
        <a
          className="relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 group text-foreground/55 hover:text-foreground hover:bg-muted/40"
          href="/brands"
          data-discover="true"
        >
          Brands
          <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary/40 rounded-full transition-all duration-300 group-hover:w-3" />
        </a>
        <a
          className="relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 group text-foreground/55 hover:text-foreground hover:bg-muted/40"
          href="/case-studies"
          data-discover="true"
        >
          Case Studies
          <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary/40 rounded-full transition-all duration-300 group-hover:w-3" />
        </a>
        <div className="flex items-center">
          <a
            className="relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 text-foreground/55 hover:text-foreground"
            href="/services"
            data-discover="true"
          >
            Services
          </a>
          <button
            type="button"
            id="radix-:r0:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
            className="text-foreground/40 hover:text-foreground transition-colors outline-none p-1 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down transition-transform"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
        <div className="flex items-center">
          <a
            className="relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 text-foreground/55 hover:text-foreground"
            href="/resources"
            data-discover="true"
          >
            Seller Tools
          </a>
          <button
            type="button"
            id="radix-:r2:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
            className="text-foreground/40 hover:text-foreground transition-colors outline-none p-1 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down transition-transform"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
        <a
          className="items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 py-2 hidden xl:inline-flex text-[13px] font-medium px-3.5 text-foreground/65 hover:text-foreground hover:bg-muted/40 ml-2"
          href="/case-studies"
          data-discover="true"
        >
          Results
        </a>
        <div className="hidden xl:flex items-center gap-1.5 rounded-full border border-border/40 bg-muted/25 px-2 py-1 ml-2">
          <a
            className="rounded-full px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
            href="/amazon-agency"
            data-discover="true"
          >
            Amazon Agency
          </a>
          <a
            className="rounded-full px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
            href="/services/amazon-ppc-agency"
            data-discover="true"
          >
            Amazon PPC
          </a>
          <a
            className="rounded-full px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
            href="/case-studies"
            data-discover="true"
          >
            Results
          </a>
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 py-2 bg-accent hover:bg-accent-light text-accent-foreground active:scale-[0.97] transition-all duration-300 rounded-full text-[13px] font-semibold px-6 ml-3 shadow-custom-sm hover:shadow-custom-md h-9">
          Book a Call
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
        </button>
      </div>
      <button
        className="md:hidden text-foreground/60 hover:text-foreground p-2 -mr-2 transition-colors"
        aria-label="Open menu"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:r4:"
        data-state="closed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu"
        >
          <line x1={4} x2={20} y1={12} y2={12} />
          <line x1={4} x2={20} y1={6} y2={6} />
          <line x1={4} x2={20} y1={18} y2={18} />
        </svg>
      </button>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header