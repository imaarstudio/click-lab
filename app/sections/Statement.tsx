"use client"
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Statement() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.from(".statement-text", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(".path-strike", {
      strokeDashoffset: 0,
      duration: 0.6,
      ease: "power2.inOut"
    }, "-=0.5")
    .from(".statement-highlight", {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-[#f7f8f9] py-24 md:py-20 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col items-center gap-4 md:gap-6 text-center">

        {/* Main Statement */}
        <p className="statement-text text-[#115199] text-3xl md:text-5xl font-semibold tracking-tight leading-snug md:leading-snug">
          You spent hours on that video. {"Don't let a"} <br className="hidden md:block" />
          <span className="relative inline-block mr-2 md:mr-3">
            {/* Strikethrough line */}
            <span className="relative text-[#042449]/50">
              bad thumbnail
              {/* Hand-drawn SVG Strikethrough */}
              <svg 
                className="absolute -left-2 -right-2 top-1/2 translate-y-[-40%] w-[calc(100%+16px)] h-[1em] text-[#FF4D4F] pointer-events-none" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                <path 
                  className="path-strike"
                  d="M 2,55 Q 30,40 60,55 T 98,45" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="8" 
                  strokeLinecap="round"
                  pathLength="100"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
                />
              </svg>
            </span>
          </span>
          <span className="text-[#115199]">be the reason nobody watches it.</span>
        </p>

        {/* Highlighted Emphasis */}
        <div className="statement-highlight inline-flex items-center px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl bg-linear-to-b from-[#6EC2F3]/30 to-[#1C87FF]/30">
          <span className="text-[#1C87FF] text-3xl md:text-5xl font-semibold tracking-tight">
            We make sure they do.
          </span>
        </div>

      </div>
    </section>
  );
}

export default Statement;
