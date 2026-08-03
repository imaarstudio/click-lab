"use client"
import React, { useState, useRef, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MedalIcon } from '../components/icons';

const testimonialsData = [
  {
    name: "Mark Tilbury",
    handle: "@marktilbury",
    avatar: "/Creators/Mark Tilbury.png",
    text: "Working with ClickLab was the best investment for my channel. They know exactly how to craft a thumbnail that tells a story and pulls the viewer in instantly. The CTR jump was massive.",
    tags: ["Storytelling", "CTR Boost"],
    subs: "8.09M Subs"
  },
  {
    name: "Faze Rug",
    handle: "@fazerug",
    avatar: "/Creators/Faze Rug.png",
    text: "These guys are insane! They perfectly capture the crazy energy of my videos in a single image. My click-through rates have never been higher. Literally game-changing!",
    tags: ["Viral Energy", "High CTR"],
    subs: "28.9M Subs"
  },
  {
    name: "MrBeast",
    handle: "@mrbeast",
    avatar: "/Creators/Mr Beast.png",
    text: "If you want to go viral, you need perfect thumbnails. ClickLab understands the psychology of clicking better than anyone I've worked with. Fast, reliable, and they always deliver bangers.",
    tags: ["Viral Hooks", "Attention"],
    subs: "476M Subs"
  },
  {
    name: "Leila Hormozi",
    handle: "@leilahormozi",
    avatar: "/Creators/Leila Hormozi.png",
    text: "As a CEO, I look for ROI and speed. ClickLab delivers both. Their thumbnails are clean, highly professional, and they consistently drive high-quality viewers to my business content.",
    tags: ["ROI", "Professional"],
    subs: "1.54M Subs"
  },
  {
    name: "Sten Ekberg",
    handle: "@drekberg",
    avatar: "/Creators/Sten Ekberg.png",
    text: "Translating complex health topics into clickable thumbnails is difficult, but they make it look easy. They found the perfect balance between curiosity and educational value.",
    tags: ["Education", "Curiosity"],
    subs: "5.33M Subs"
  },
  {
    name: "Cleo Abram",
    handle: "@cleoabram",
    avatar: "/Creators/Cleo Abram.png",
    text: "I love how they design! They managed to keep my thumbnails aesthetic and bright while drastically improving the performance. They really get the vibe I'm going for.",
    tags: ["Aesthetic", "Performance"],
    subs: "7.66M Subs"
  },
  {
    name: "Noah Kagan",
    handle: "@noahkagan",
    avatar: "/Creators/Noah Kagan.png",
    text: "These guys are absolute marketing wizards. They don't just make pretty pictures; they make thumbnails that mathematically increase your views. An absolute no-brainer for any serious creator.",
    tags: ["Marketing", "Growth"],
    subs: "1.18M Subs"
  },
  {
    name: "Alex Costa",
    handle: "@alexcosta",
    avatar: "/Creators/Alex Costa.png",
    text: "The visual quality is just next level. They matched the premium aesthetic of my brand perfectly while still optimizing for the algorithm. The results speak for themselves.",
    tags: ["Premium", "Brand"],
    subs: "4.14M Subs"
  }
];

function TestimonialCard({ t, isActive }: {
  t: typeof testimonialsData[0];
  isActive: boolean;
}) {
  return (
    <div className={`relative flex flex-col gap-8 bg-white rounded-3xl p-6 md:p-8 w-full h-full border border-gray-100 transition-all duration-500 ${isActive ? 'opacity-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)]' : 'opacity-[0.35] shadow-none'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={t.avatar} className="w-12 h-12 rounded-full object-cover bg-sky-200" alt={t.name} />
          <div className="flex flex-col">
            <span className="text-[#042449] font-bold text-sm tracking-tight">{t.name}</span>
            <span className="text-[#042449]/60 text-xs font-semibold">{t.subs}</span>
          </div>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#042449]/80">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      <p className="text-[#042449] text-left font-semibold text-base leading-tight grow tracking-tighter">
        {t.text}
      </p>

      <div className="flex items-center gap-2 mt-auto">
        {t.tags.map((tag) => (
          <span key={tag} className="bg-linear-to-b from-[#6EC2F3]/30 to-[#1C87FF]/30 text-[#1C87FF] text-xs font-semibold px-1.5 py-1 rounded-lg">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const container = useRef(null);

  // Embla + AutoScroll plugin for infinite feel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });

  const [centerIndex, setCenterIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Detect which slide is physically closest to the viewport center
  const updateCenterSlide = useCallback(() => {
    if (!emblaApi) return;
    const rootRect = emblaApi.rootNode().getBoundingClientRect();
    const viewportCenter = rootRect.left + rootRect.width / 2;
    const slides = emblaApi.slideNodes();
    let closest = 0;
    let minDist = Infinity;
    slides.forEach((slide, i) => {
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const dist = Math.abs(slideCenter - viewportCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setCenterIndex(closest);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('scroll', updateCenterSlide);
    emblaApi.on('settle', updateCenterSlide);
    emblaApi.on('reInit', updateCenterSlide);
    updateCenterSlide();
    return () => {
      emblaApi.off('scroll', updateCenterSlide);
      emblaApi.off('settle', updateCenterSlide);
      emblaApi.off('reInit', updateCenterSlide);
    };
  }, [emblaApi, updateCenterSlide]);

  useGSAP(() => {
    gsap.from(".gsap-reveal", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-[#f7f8f9] py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 md:gap-20 items-center px-4 md:px-8">
        <style>{`
            @media (min-width: 768px) {
                .testimonial-mask {
                    mask-image: url('/testimonialmask.svg');
                    -webkit-mask-image: url('/testimonialmask.svg');
                    mask-size: 140% 150%;
                    -webkit-mask-size: 140% 150%;
                    mask-position: center;
                    -webkit-mask-position: center;
                    mask-repeat: no-repeat;
                    -webkit-mask-repeat: no-repeat;
                }
            }
        `}</style>

        {/* Header */}
        <div className="flex flex-col gap-6 w-full items-center text-center">
          <div className="gsap-reveal flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 w-fit">
            <MedalIcon size={14} className="text-[#042449]/80" />
            <span className="text-[#042449] font-semibold text-sm tracking-tight">Testimonials</span>
          </div>

          <div className="gsap-reveal flex flex-col gap-3 items-center">
            <h2 className="text-[#042449] text-4xl md:text-[3.25rem] font-semibold tracking-tighter leading-tight">
              Honest Words From <span className="bg-linear-to-b from-[#6EC2F3] to-[#1C87FF] bg-clip-text text-transparent">Real Creators.</span>
            </h2>

            <p className="text-[#042449]/70 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
              Unfiltered. Unscripted. Just real feedback from creators we've worked with.
            </p>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="relative w-full flex items-center">

          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[#042449] border border-gray-100 items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-105 hover:bg-gray-50 transition-all duration-300 z-40"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>

          <div className="overflow-visible w-full testimonial-mask" ref={emblaRef}>
            <div className="flex">
              {testimonialsData.map((t, index) => (
                <div key={`${t.name}-${index}`} className="flex-[0_0_90%] min-w-0 md:flex-[0_0_31.5%] px-3 h-auto min-h-[320px]">
                  <TestimonialCard t={t} isActive={index === centerIndex} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[#042449] border border-gray-100 items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-105 hover:bg-gray-50 transition-all duration-300 z-40"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>

        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center gap-4 mt-2">
          <button onClick={scrollPrev} className="w-12 h-12 rounded-full bg-white text-[#042449] border border-gray-100 flex items-center justify-center shadow-sm active:bg-gray-50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button onClick={scrollNext} className="w-12 h-12 rounded-full bg-white text-[#042449] border border-gray-100 flex items-center justify-center shadow-sm active:bg-gray-50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;