"use client"
import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const statsData = [
  {
    value: 3.2,
    suffix: "%",
    decimals: 1,
    highlight: "Average CTR increase",
    text: "across every niche we've worked in — finance, fitness, tech, lifestyle and more."
  },
  {
    value: 48,
    suffix: " hrs",
    decimals: 0,
    highlight: "Average delivery",
    text: "from brief to finished thumbnail — no weeks of waiting, no back and forth."
  },
  {
    value: 200,
    suffix: "+",
    decimals: 0,
    highlight: "thumbnails delivered",
    text: "for creators ranging from 10K to 1M+ subscribers — at every stage of growth."
  }
];

function Counter({ value, suffix, decimals }: { value: number, suffix: string, decimals: number }) {
  const countRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: countRef.current,
        start: "top 90%",
      },
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.innerText = obj.val.toFixed(decimals) + suffix;
        }
      }
    });
  }, [value, suffix, decimals]);

  return <span ref={countRef}>0{suffix}</span>;
}

export default function Stats() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".stat-item-content", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      y: 20,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-[#f7f8f9] py-16 md:py-24 px-4 flex justify-center">
      <div className="w-full max-w-full md:max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-18rem)] px-4 md:px-0 flex flex-col md:flex-row justify-between items-stretch gap-10 md:gap-0">

        {statsData.map((stat, index) => (
          <React.Fragment key={index}>
            <div className={`stat-item flex flex-col gap-3 md:gap-4 w-full md:max-w-1/3 ${index === 0 ? 'md:pr-12' : index === 1 ? 'md:px-12' : 'md:pl-12'}`}>
              <div className="stat-item-content flex flex-col gap-3 md:gap-4">
                <h3 className="text-[#042449] text-5xl md:text-6xl font-semibold tracking-tighter leading-none">
                  <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </h3>
                <p className="text-[#042449]/60 text-[15px] leading-relaxed tracking-tight">
                  <span className="font-semibold text-[#042449]/90">{stat.highlight}</span> {stat.text}
                </p>
              </div>
            </div>

            {/* Desktop Divider */}
            {index < statsData.length - 1 && (
              <div className="hidden md:block w-px bg-linear-to-b from-transparent via-[#042449]/40 to-transparent shrink-0" />
            )}

            {/* Mobile Divider */}
            {index < statsData.length - 1 && (
              <div className="md:hidden h-px w-full bg-linear-to-r from-transparent via-[#042449]/40 to-transparent" />
            )}
          </React.Fragment>
        ))}

      </div>
    </section>
  );
}
