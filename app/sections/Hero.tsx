"use client"
import React, { useRef } from 'react'
import PrimaryButton from '../components/PrimaryButton'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronIcon, VideoCallIcon } from '../components/icons'

const getThumbnails = (offset = 0) => {
    const arr = Array.from({ length: 20 }, (_, i) => `/thumbnails/thumbnail-${(i + 1).toString().padStart(2, '0')}.png`);
    return [...arr.slice(offset), ...arr.slice(0, offset)];
};

function Hero() {
    const container = useRef(null);
    const col1 = useRef<HTMLDivElement>(null);
    const col2 = useRef<HTMLDivElement>(null);
    const col3 = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // 1. Initial Entry Animations
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });

        // Set initial offset percentages so columns have room to scroll
        gsap.set(col1.current, { yPercent: 0 });
        gsap.set(col2.current, { yPercent: -25 });
        gsap.set(col3.current, { yPercent: -10 });

        // Minimal small entry animation for columns
        tl.from(col1.current, { y: 100, opacity: 0 }, 0)
            .from(col2.current, { y: -100, opacity: 0 }, 0.1)
            .from(col3.current, { y: 80, opacity: 0 }, 0.2);

        // Hero content text entry
        tl.from(".hero-content > *", {
            y: 30,
            opacity: 0,
            stagger: 0.2,
        }, 0.3);

        // 2. Scroll-triggered animation and pinning
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "+=150%", // Pin for 1.5x viewport height
                pin: true,
                scrub: 1, // Smooth scrub
            }
        });

        // Animate columns in correlation with scroll
        scrollTl.to(col1.current, { yPercent: -35, ease: "none" }, 0)
            .to(col2.current, { yPercent: 0, ease: "none" }, 0)
            .to(col3.current, { yPercent: -40, ease: "none" }, 0);

    }, { scope: container });

    return (
        <div ref={container} className='relative w-full h-screen overflow-hidden bg-[linear-gradient(to_bottom,#1B85FF_0%,#389FFF_21%,#00244D_50%,#001833_100%)]'>
            <style>{`
                .hero-mask {
                    mask-image: url('/mobilemask.svg');
                    mask-position: center top;
                    mask-repeat: no-repeat;
                    mask-size: 250% 65%;
                    -webkit-mask-image: url('/mobilemask.svg');
                    -webkit-mask-position: center top;
                    -webkit-mask-repeat: no-repeat;
                    -webkit-mask-size: 250% 65%;
                }
                @media (min-width: 768px) {
                    .hero-mask {
                        mask-image: url('/masksvg.svg');
                        -webkit-mask-image: url('/masksvg.svg');
                        mask-size: 100%;
                        -webkit-mask-size: 100%;
                    }
                }
            `}</style>

            {/* 3 Vertical Columns */}
            <div className="hero-mask absolute top-0 left-[-25%] md:left-0 w-[150%] md:w-full h-screen flex gap-2 md:gap-4 p-2 md:p-4 z-0 opacity-80 md:opacity-100 overflow-hidden">

                {/* Column 1 */}
                <div ref={col1} className="flex flex-col gap-2 md:gap-4 flex-1">
                    {[...getThumbnails(0), ...getThumbnails(0)].map((src, i) => (
                        <div key={i} className="w-full aspect-video rounded-xl overflow-hidden shrink-0">
                            <img src={src} alt="thumbnail" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>

                {/* Column 2 */}
                <div ref={col2} className="flex flex-col gap-2 md:gap-4 flex-1">
                    {[...getThumbnails(7), ...getThumbnails(7)].map((src, i) => (
                        <div key={i} className="w-full aspect-video rounded-xl overflow-hidden shrink-0">
                            <img src={src} alt="thumbnail" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>

                {/* Column 3 */}
                <div ref={col3} className="flex flex-col gap-2 md:gap-4 flex-1">
                    {[...getThumbnails(14), ...getThumbnails(14)].map((src, i) => (
                        <div key={i} className="w-full aspect-video rounded-xl overflow-hidden shrink-0">
                            <img src={src} alt="thumbnail" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>



            {/* Hero Main Content */}
            <div className="hero-content relative z-10 flex flex-col items-center justify-center mt-80 md:mt-100 px-4 text-center gap-6">
                <h1 className="text-[#F1F2F4] text-4xl md:text-7xl font-semibold tracking-tight leading-tight max-w-full md:max-w-5xl drop-shadow-lg">
                    We Make Thumbnails That <br className="hidden md:block" /> Make People Stop Scrolling
                </h1>
                <p className="text-[#F1F2F4]/90 text-base md:text-lg max-w-2xl leading-relaxed font-medium drop-shadow-md">
                    We help creators and brands grow faster with thumbnails designed to improve first impressions and increase clicks.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
                    <PrimaryButton className="w-full sm:w-auto px-8 py-4 text-lg">
                        <VideoCallIcon size={20} />
                        Book a Call
                    </PrimaryButton>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#F1F2F4] hover:bg-white text-[#042449] rounded-full font-semibold text-lg transition-all shadow-lg">
                        See Projects
                        <ChevronIcon size={20} className='rotate-180' />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Hero
