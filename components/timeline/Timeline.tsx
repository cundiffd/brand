// Copyright © Spatial Corporation. All rights reserved.

"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { FC, useLayoutEffect, useRef, useState } from "react";

import { Indiana, Merrillville, Microsoft, Spatial } from "../symbol";

const ICON_SIZE = 128;
const MARKER_SIZE = 16;

const milestones = [
  { component: () => <div style={{ height: ICON_SIZE, width: ICON_SIZE }} />, color: "transparent" },
  { component: () => <Merrillville style={{ height: ICON_SIZE }} />, color: "#754ACC" },
  { component: () => <Indiana style={{ height: ICON_SIZE }} />, color: "#990000" },
  { component: () => <Microsoft style={{ height: ICON_SIZE }} />, color: "#0078D7" },
  { component: () => <Spatial style={{ height: ICON_SIZE }} />, color: "#000000" }
];

/**
 * Create a new timeline component.
 * @returns A timeline component.
 */
export const Timeline: FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [containerTop, setContainerTop] = useState(0);

  const [stops, setStops] = useState<number[]>([0, 0, 0, 0, 0]);

  useLayoutEffect(() => {
    if (!container.current) {
      return;
    }

    const rect = container.current.getBoundingClientRect();
    const top = window.scrollY + rect.top;

    setContainerTop(top);
    setStops(Array.from(container.current.querySelectorAll<HTMLLIElement>("li")).map((li) => li.offsetTop + ICON_SIZE / 2 - MARKER_SIZE / 2));
  }, []);

  const { scrollY } = useScroll();

  const y = useSpring(
    stops.length > 0
      ? useTransform(scrollY, [containerTop, containerTop + stops[stops.length - 1]], [stops[0], stops[stops.length - 1]])
      : useTransform(scrollY, [0, 1], [0, 0]),
    { stiffness: 200, damping: 30 }
  );

  const color = useTransform(
    y,
    stops,
    milestones.map((m) => m.color)
  );

  const splash = stops.map((stop, i) => useTransform(y, [stop - 512, stop, stop + 720], [0, 1, 0]));

  return (
    <div ref={container} className="relative py-96">
      {milestones.map((milestone, i) => (
        <motion.div
          key={i}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none -z-10"
          style={{
            width: "300vw",
            height: "300vw",
            backgroundColor: milestone.color,
            scale: splash[i],
            opacity: splash[i]
          }}
        />
      ))}

      <motion.div className="absolute left-1/2 -translate-x-1/2 -z-20" style={{ y, color, width: MARKER_SIZE, height: MARKER_SIZE }}>
        <div className="relative size-full">
          <div className="absolute top-0 left-0 size-full rounded-full bg-white" />
          <div className="absolute top-0 left-0 size-full rounded-full bg-white animate-ping" />
        </div>
      </motion.div>

      <ul className="flex flex-col items-center gap-360 relative">
        {milestones.map((milestone, i) => {
          return (
            <li key={i}>
              <motion.div>
                <milestone.component />
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
