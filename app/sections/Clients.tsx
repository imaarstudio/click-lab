"use client"
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrophyIcon } from '../components/icons';

gsap.registerPlugin(ScrollTrigger);

function Clients() {
  const container = useRef(null);

  useGSAP(() => {
    // Header reveal - Gentle fade up
    gsap.fromTo(".clients-header > *",
      { y: 20, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".clients-header",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out"
      }
    );

    // Cards reveal progressively with stable row staggering
    gsap.set(".creator-card", { y: 40, opacity: 0 });
    ScrollTrigger.batch(".creator-card", {
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

    // Subscriber count-up animation - Smoother and slightly longer
    gsap.utils.toArray(".client-subs-count").forEach((el: any) => {
      const targetStr = el.getAttribute("data-target") || "0";
      const target = parseFloat(targetStr);
      const decimals = targetStr.includes('.') ? targetStr.split('.')[1].length : 0;
      
      gsap.fromTo(el,
        { textContent: 0 },
        {
          textContent: target,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none"
          },
          modifiers: {
            textContent: value => parseFloat(value).toFixed(decimals)
          }
        }
      );
    });
  }, { scope: container });

  const creators = [
    { name: "Mark Tilbury", subs: "8.09", img: "/Creators/Mark Tilbury.png" },
    { name: "Faze Rug", subs: "28.9", img: "/Creators/Faze Rug.png" },
    { name: "MrBeast", subs: "476", img: "/Creators/Mr Beast.png" },
    { name: "Leila Hormozi", subs: "1.54", img: "/Creators/Leila Hormozi.png" },
    { name: "Sten Ekberg", subs: "5.33", img: "/Creators/Sten Ekberg.png" },
    { name: "Cleo Abram", subs: "7.66", img: "/Creators/Cleo Abram.png" },
    { name: "Noah Kagan", subs: "1.18", img: "/Creators/Noah Kagan.png" },
    { name: "Alex Costa", subs: "4.14", img: "/Creators/Alex Costa.png" }
  ];

  return (
    <section ref={container} className="w-full bg-[#f7f8f9] py-24 px-4 flex flex-col items-center justify-center gap-16">

      <div className="clients-header flex flex-col gap-6 w-fit items-center ">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100">
          <TrophyIcon size={14} className="text-[#042449]/80" />
          <span className="text-[#042449] font-semibold text-sm">Our Clients</span>
        </div>

        {/* Heading */}
        <h2 className="text-[#042449] text-4xl md:text-5xl font-semibold tracking-tighter text-center">
          Trusted by Your <span className="bg-linear-to-b from-[#6EC2F3] to-[#1C87FF] bg-clip-text text-transparent">Favorite Creators</span>
        </h2>

        {/* Subheading */}
        <p className="text-[#042449]/80 text-base md:text-lg text-center max-w-2xl font-medium leading-relaxed">
          We help creators and brands grow faster with thumbnails designed to improve<br className="hidden md:block" /> first impressions and increase clicks.
        </p>
      </div>
      {/* Thumbnail Grid */}
      <div className="creator-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-full md:max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-18rem)] px-4 md:px-0">
        {creators.map((creator, i) => (
          <div
            key={i}
            className="creator-card relative overflow-hidden w-full aspect-[4/4.8] rounded-2xl bg-[radial-gradient(circle_at_top,#1B85FF_0%,#389FFF_24%,#001833_100%)] shadow-lg"
          >
            <svg width="310" height="259" viewBox="0 0 310 259" className='absolute -top-5 left-1/2 -translate-x-1/2 pointer-events-none overflow-visible' fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_96_507)" style={{ mixBlendMode: 'plus-lighter' }}>
                <ellipse cx="155.5" cy="17" rx="150.5" ry="68" fill="#5DFFFF" />
              </g>
              <defs>
                <filter id="filter0_f_96_507" x="-169" y="-225" width="649" height="484" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_96_507" />
                </filter>
              </defs>
            </svg>
            <img
              src={creator.img}
              alt={creator.name}
              className='absolute top-0 left-0 w-full h-full object-cover'
              style={{
                maskImage: "url('/creatormask.svg')",
                WebkitMaskImage: "url('/creatormask.svg')",
                maskSize: "100%",
                WebkitMaskSize: "100%",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center top",
                WebkitMaskPosition: "center top",
              }}
            />

            {/* Creator Info */}
            <div className="absolute bottom-6 left-0 w-full flex flex-col items-center justify-center gap-1 px-4">
              <h3 className="text-[#F1F2F4] text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-center leading-tight">{creator.name}</h3>
              <p className="text-sm sm:text-xs md:text-sm font-semibold tracking-wide uppercase bg-[radial-gradient(ellipse_at_center,#C4D4D9_0%,#45BAFD_100%)] mix-blend-plus-lighter bg-clip-text text-transparent text-center leading-tight">
                <span className="client-subs-count" data-target={creator.subs}>{creator.subs}</span>M Subscribers
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Clients;
