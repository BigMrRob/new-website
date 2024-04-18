"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HomeHero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "myRxMedSaver",
    link: "/",
    thumbnail: "/projects/myrxmedsaver-project.png",
  },

  {
    title: "Masters",
    link: "https:/www.masters.com",
    thumbnail: "/projects/masters-project.png",
  },
  {
    title: "United Financial Power Dialer",
    link: "/",
    thumbnail: "/projects/uf-power-dialer-project.png",
  },
  {
    title: "Robinson Editions",
    link: "/",
    thumbnail: "/projects/robinson-editions-project.png",
  },
  {
    title: "Legacy Assureance Mobile",
    link: "/",
    thumbnail: "/projects/legacy-assurance-mobile-project.jpg",
  },
  {
    title: "Wimbledon",
    link: "https://wimbledon.com",
    thumbnail: "/projects/wimbledon-project.png",
  },
  {
    title: "Panoptica",
    link: "https://panoptica.app",
    thumbnail: "/projects/panoptica-project.png",
  },
  {
    title: "Outshift",
    link: "https://outshfit.cisco.com",
    thumbnail: "/projects/outshift-project.png",
  },
  {
    title: "Cisco Research",
    link: "https://research.cisco.com",
    thumbnail: "/projects/cisco-research-project.png",
  },

  {
    title: "Sydney Health",
    link: "https://apps.apple.com/us/app/sydney-health/id1463423283",
    thumbnail: "/projects/sydney-health-project.png",
  },
];
