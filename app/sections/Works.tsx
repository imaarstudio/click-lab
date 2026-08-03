"use client"
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpIcon, SparkleIcon } from '../components/icons';

// Register ScrollTrigger if not already done globally
gsap.registerPlugin(ScrollTrigger);

function Works() {
  const container = useRef(null);

  useGSAP(() => {
    // Header reveal
    gsap.from(".works-header > *", {
      scrollTrigger: {
        trigger: ".works-header",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out"
    });

    // Cards reveal progressively with stable row staggering
    gsap.set(".work-card", { y: 40, opacity: 0 });
    ScrollTrigger.batch(".work-card", {
      start: "top 85%",
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true
        });
      }
    });

  }, { scope: container });

  const works = [
    {
      title: "The Scent That Makes Girls Can't Resist",
      creator: "Samuel Onuha",
      views: "1.2M views",
      percent: "24",
    },
    {
      title: "iOS 18.6 is HUGE! (Hidden Features)",
      creator: "TechDaily",
      views: "890k views",
      percent: "45",
    },
    {
      title: "20 Minute Intense Chest Workout (No Equipment)",
      creator: "BullyJuice",
      views: "15M views",
      percent: "89",
    },
    {
      title: "How I Bought My Dream Rolls Royce at 21",
      creator: "Sebastian Ghiorghiu",
      views: "3.2M views",
      percent: "52",
    },
    {
      title: "Ghost of Yotei - Official Reveal Trailer Reaction",
      creator: "Gaming Central",
      views: "2.5M views",
      percent: "38",
    },
    {
      title: "Secret Hack: CapCut Tips and Tricks You Need to Know",
      creator: "Creator Tools",
      views: "540k views",
      percent: "60",
    },
    {
      title: "LOCKED IN. (My 30 Day Body Transformation)",
      creator: "Iman Gadzhi",
      views: "1.8M views",
      percent: "72",
    },
    {
      title: "The Journey: Traveling The World Full Time",
      creator: "Benn TK",
      views: "4.1M views",
      percent: "41",
    },
    {
      title: "Nick Pope - Life As A Premier League Goalkeeper",
      creator: "The Fozcast",
      views: "850k views",
      percent: "33",
    }
  ];

  return (
    <section ref={container} className="w-full bg-linear-to-b from-[#1C87FF] to-[#6EC2F3] py-24 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-full md:max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-18rem)] px-4 md:px-0 flex flex-col gap-16">

        {/* Header */}
        <div className="works-header flex flex-col gap-6 w-full items-center text-center">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm w-fit">
            <SparkleIcon size={14} className="text-[#042449]/80" />
            <span className="text-[#042449] font-semibold text-sm tracking-tight">Our Works</span>
          </div>

          <h2 className="text-[#F1F2F4] text-4xl md:text-5xl font-semibold tracking-tighter">
            Work That Actually <span className="text-[#5DFFFF]">Clicks</span>
          </h2>

          <p className="text-[#F1F2F4]/80 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            Thumbnails we've built for real creators and the results that followed.
          </p>
        </div>

        {/* Grid */}
        <div className="works-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 w-full">
          {works.map((work, i) => (
            <div key={i} className="work-card flex flex-col gap-4 w-full">
              {/* Thumbnail */}
              <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-lg border border-[#F1F2F4]/10">
                <img src={`/thumbnails/thumbnail-${(i + 1).toString().padStart(2, '0')}.png`} alt={work.title} className="w-full h-full object-cover" />
              </div>

              {/* Info Row */}
              <div className="flex items-start justify-between gap-4 w-full px-1">
                <div className="flex gap-3">
                  <img src="/Mark_Tibury.png" alt={work.creator} className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#F1F2F4]/20" />
                  <div className="flex flex-col">
                    <h4 className="text-[#F1F2F4] text-sm md:text-base font-semibold line-clamp-2 leading-tight">
                      {work.title}
                    </h4>
                    <p className="text-[#F1F2F4]/70 text-xs md:text-sm font-medium mt-1 flex items-center gap-1">
                      {work.creator}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[#F1F2F4]/60">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      {work.views}
                    </p>
                  </div>
                </div>

                <div className="work-tag bg-[#87FF1C] text-[#36660B] text-xs font-bold px-2 py-1 rounded-full flex items-center gap-0.5 shrink-0 mt-0.5">
                  <ArrowUpIcon size={10} />


                  <span className="count-number" data-target={work.percent}>{work.percent}</span>%
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Works;
