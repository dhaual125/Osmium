"use client";
import type React from "react";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useTransform, useScroll, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSvgHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(contentRef.current);
    setSvgHeight(contentRef.current.offsetHeight);

    return () => resizeObserver.disconnect();
  }, []);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });

  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
    stiffness: 500,
    damping: 90,
  });

  const pathDefinition = useMemo(
    () => `M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`,
    [svgHeight]
  );

  // Motion values for animating styles
  const boxShadow = useMotionValue("rgba(0, 0, 0, 0.24) 0px 3px 8px");
  const backgroundColor = useMotionValue("var(--emerald-500)");
  const borderColor = useMotionValue("var(--emerald-600)");

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      boxShadow.set(latest > 0 ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px");
      backgroundColor.set(latest > 0 ? "white" : "var(--emerald-500)");
      borderColor.set(latest > 0 ? "white" : "var(--emerald-600)");
    });
  }, [scrollYProgress, boxShadow, backgroundColor, borderColor]);

  return (
    <motion.div ref={ref} className={cn("relative w-full max-w-4xl mx-auto h-full", className)}>
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          style={{ boxShadow: boxShadow.get() }}
          className="ml-[27px] h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            style={{
              backgroundColor: backgroundColor.get(),
              borderColor: borderColor.get(),
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={pathDefinition}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            strokeWidth="2"
            transition={{
              duration: 10,
            }}
          />

          <motion.path
            d={pathDefinition}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
