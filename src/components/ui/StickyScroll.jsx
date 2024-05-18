import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "bg-gradient-to-br from-pink-500 to-emerald-500",
    "bg-gradient-to-br from-pink-500 to-indigo-500",
    "bg-gradient-to-br from-orange-500 to-yellow-500",
  ];

  return (
    <div className="h-[25rem]  bg-custom-bg " >
      <div className="bg-black/70 flex overflow-y-auto h-full relative justify-between px-28  rounded-md p-10" ref={ref} >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <h2
                  style={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-slate-100 transition-opacity"
                >
                  {item.title}
                </h2>
                <p
                  style={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-kg text-slate-300 max-w-sm mt-10 transition-opacity"
                >
                  {item.description}
                </p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          className={`${contentClassName} hidden lg:block h-80 w-96 rounded-md   sticky top-10 overflow-hidden`}
        >
          {content[activeCard].content ?? null}
        </div>
      </div>
    </div>
  );
};
