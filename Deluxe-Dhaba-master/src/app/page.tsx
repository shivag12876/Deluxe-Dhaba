import About from "@/components/About";
import Team from "@/components/Team";
import Hero from "@/components/Hero";
import HomeMenu from "@/components/HomeMenu";
import WhatWeOffer from "@/components/WhatWeOffer";
import Testinomial from "@/components/Testinomial";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <About />
      <Team />
      <WhatWeOffer />
      <Testinomial />
      <FAQ />
    </>
  );
}
