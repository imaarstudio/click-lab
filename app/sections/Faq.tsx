"use client";
import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { BubbleChatIcon } from '../components/icons';

const faqs = [
  {
    question: "How many revisions do I get?",
    answer: "We offer multiple revision rounds depending on your chosen plan. Starter includes 2 rounds, while Pro and Premium include unlimited revisions to ensure you're completely satisfied."
  },
  {
    question: "How long does it take to get my thumbnail?",
    answer: "We deliver within 48-72 hours of receiving your brief. Need it faster? We offer rush delivery too."
  },
  {
    question: "Do you work with small channels?",
    answer: "Absolutely. We work with creators at every stage of their journey, from those just starting out to channels with millions of subscribers."
  },
  {
    question: "What do you need from me to get started?",
    answer: "Just your video concept, title ideas, and any raw assets or face pictures you want included. We'll handle the rest."
  },
  {
    question: "What makes you different from a freelancer on Fiverr?",
    answer: "We're an agency focused purely on YouTube CTR. We don't just make pretty pictures; we build strategic, tested thumbnails designed specifically to get more clicks."
  },
  {
    question: "Will this actually improve my CTR?",
    answer: "While we can't guarantee specific numbers since content matters too, our clients consistently see significant CTR improvements after switching to our custom thumbnails."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Open the second one by default to match screenshot
  const container = useRef(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useGSAP(() => {
    // Left column reveal
    gsap.from(".faq-left > *", {
      scrollTrigger: {
        trigger: ".faq-left",
        start: "top 85%",
      },
      x: -30,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out"
    });

    // FAQ items reveal
    gsap.from(".faq-item", {
      scrollTrigger: {
        trigger: ".faq-right",
        start: "top 80%",
      },
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-[#f7f8f9] py-24 md:py-32 px-4 flex justify-center">
      <div className="w-full max-w-full md:max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-18rem)] px-4 md:px-0 flex flex-col md:flex-row gap-16 md:gap-24 justify-between items-start">

        {/* Left Column - Heading */}
        <div className="faq-left w-full md:w-5/12 flex flex-col gap-6 md:sticky md:top-32">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 w-fit">
            <BubbleChatIcon size={14} className="text-[#042449]/80" />
            <span className="text-[#042449] font-semibold text-sm tracking-tight">Faq</span>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-[#042449] text-4xl md:text-[3.25rem] font-semibold tracking-tighter leading-[1.1]">
              Questions You're Probably <br className="hidden lg:block" />
              <span className="bg-linear-to-b from-[#6EC2F3] to-[#1C87FF] bg-clip-text text-transparent">Already Thinking.</span>
            </h2>
            <p className="text-[#042449]/60 text-[15px] md:text-lg max-w-[90%] font-medium leading-relaxed tracking-tight">
              We don't just design thumbnails. We study what makes people click and build every frame around that.
            </p>
          </div>
        </div>

        {/* Right Column - Accordion */}
        <div className="faq-right w-full md:w-7/12 flex flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item flex flex-col border-b border-[#042449]/10 last:border-b-0"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full py-5 md:py-6 text-left focus:outline-none group"
              >
                <span className="text-[#042449] font-semibold text-sm md:text-base tracking-tight pr-8">
                  {faq.question}
                </span>
                <span
                  className="text-[#042449]/50 shrink-0 transition-transform duration-300 ease-in-out group-hover:text-[#1C87FF]"
                  style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-6 md:pb-7' : 'max-h-0 opacity-0'
                  }`}
              >
                <p className="text-[#042449]/50 text-[15px] font-medium leading-relaxed tracking-tight max-w-[90%]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
