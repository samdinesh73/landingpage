"use client";

import Badges from "@/components/Badges";
import BeforeAfter from "@/components/BeforeAfter";
import Brands from "@/components/Brands";
import CaseStudy from "@/components/CaseStudy";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import Cta from "@/components/Cta";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import MarketPlace from "@/components/MarketPlace";
import Metrics from "@/components/Metrics";
import Pills from "@/components/Pills";
import ServiceScale from "@/components/Scale";
import Testimonial from "@/components/Testimonial";
import Tools from "@/components/Tools";
import WhyChoose from "@/components/WhyChoose";
import WhyChooseTable from "@/components/WhyChooseTable";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  return (
   
<>












<Hero/>


<Pills/>
<Badges/>

<Counter/>



<MarketPlace/>
<ServiceScale/>
<WhyChoose/>
<Brands/>
< BeforeAfter/>
<CaseStudy/>
<Testimonial/>
<WhyChooseTable/>
<Certifications/>
<Cta/>
<Tools/>
<Explore/>
<Metrics/>
<Contact/>
</>
  );
}
