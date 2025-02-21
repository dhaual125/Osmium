"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { Cover } from "@/components/ui/cover";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">

        {/* Cover Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6">
            <Cover className="text-black">
              Acclerate
            </Cover>
            <span className="bg-gradient-to-b from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
              Your learning
            </span>
            <br />
            <span className="bg-gradient-to-b from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
              Like never before <br /> <br />
            </span>
            <span className="text-[24px]">
              finding the best lectures, and giving you smart insights for better preparation.
            </span>
          </h1>
        </div>
      </div>
    </TracingBeam>
  );
}
