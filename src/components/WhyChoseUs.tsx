"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import content from "@/data/content"

function WhyChoseUs() {
  return (
    <div >
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChoseUs
