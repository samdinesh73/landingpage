import React from 'react'
import { useState } from 'react';
const Brands = () => {
    const brands = [
  {
    name: "Adidas",
    category: "Fashion",
    image: "/brands/adidas.png",
  },
  {
    name: "United Colors of Benetton",
    category: "Fashion",
    image: "/brands/ucb.png",
  },
  {
    name: "Pink Harvest",
    category: "FMCG",
    image: "/brands/pink-harvest.png",
  },
  {
    name: "iKp",
    category: "FMCG",
    image: "/brands/ikp.png",
  },
  {
    name: "Mancode",
    category: "FMCG",
    image: "/brands/mancode.png",
  },
  {
    name: "Syska",
    category: "Electronics",
    image: "/brands/syska.png",
  },
  {
    name: "Lenovo",
    category: "Electronics",
    image: "/brands/lenovo.png",
  },
  {
    name: "Namhya",
    category: "Lifestyle",
    image: "/brands/namhya.png",
  },
  {
    name: "Jade Forest",
    category: "Lifestyle",
    image: "/brands/jade-forest.png",
  },
  {
    name: "Tipsy Tiger",
    category: "Lifestyle",
    image: "/brands/tipsy-tiger.png",
  },
  {
    name: "Rustagi",
    category: "Personal Care",
    image: "/brands/rustagi.png",
  },
  {
    name: "Coal Clean Beauty",
    category: "Personal Care",
    image: "/brands/coal.png",
  },
  {
    name: "Ozone",
    category: "Personal Care",
    image: "/brands/ozone.png",
  },
  {
    name: "Hero",
    category: "Automobile",
    image: "/brands/hero.png",
  },
  {
    name: "American Tourister",
    category: "Home",
    image: "/brands/american-tourister.png",
  },
  {
    name: "Haken",
    category: "Home",
    image: "/brands/haken.png",
  },
  {
    name: "Disney Kids",
    category: "Kids",
    image: "/brands/disney.png",
  },
  {
    name: "Baby Bella",
    category: "Kids",
    image: "/brands/baby-bella.png",
  },
];


const categories = [
  "All Brands",
  "Fashion",
  "FMCG",
  "Electronics",
  "Lifestyle",
  "Personal Care",
  "Automobile",
  "Home",
  "Kids",
];



const [activeCategory, setActiveCategory] = useState("All Brands");

const filteredBrands =
  activeCategory === "All Brands"
    ? brands
    : brands.filter(
        (brand) => brand.category === activeCategory
      );


  return (
   <>
   
   <section
  className="py-24 bg-gradient-subtle"
  style={{ contentVisibility: "auto", containIntrinsicSize: "0px 800px" }}
>
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-foreground mb-4 font-display">
        Brands That{" "}
        <span className="bg-gradient-accent bg-clip-text text-transparent">
          Trust Us
        </span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Working with 500+ leading brands across Fashion, FMCG, Home,
        Electronics, Lifestyle &amp; more
      </p>
    </div>
   <div className="flex flex-wrap justify-center gap-3 mb-12">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`px-6 py-2 rounded-full font-medium transition-all hover:shadow-custom-lg ${
        activeCategory === category
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
      }`}
    >
      {category}
    </button>
  ))}
</div>
   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
  {filteredBrands.map((brand) => (
    <div
      key={brand.name}
      className="aspect-square bg-card border border-border rounded-2xl flex flex-col items-center justify-center p-6 hover:shadow-custom-lg hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
    >
      <div className="flex flex-col items-center justify-center h-full w-full">
        <img
          src={brand.image}
          alt={brand.name}
          loading="lazy"
          decoding="async"
          width={100}
          height={100}
          className="max-h-24 max-w-[100px] w-auto object-contain mb-2"
        />

        <p className="text-xs text-muted-foreground text-center">
          {brand.category}
        </p>
      </div>
    </div>
  ))}
</div>
    <div className="mt-16 bg-gradient-primary rounded-2xl p-10 md:p-12 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgb(255, 255, 255) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgb(255, 255, 255) 0%, transparent 50%)"
        }}
      />
      <div className="relative z-10">
        <p className="text-primary-foreground/70 text-sm font-medium mb-3 uppercase tracking-wider">
          Join 500+ successful brands
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
          Ready to Scale Your Business?
        </h3>
      </div>
    </div>
  </div>
</section>

   
   </>
  )
}

export default Brands