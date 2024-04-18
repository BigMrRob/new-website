"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function CodeToLife() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              See your ideas come to life on
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                All Devices
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/home/responsive-apps.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
