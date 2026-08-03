"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const container = useRef(null);

  useGSAP(() => {
    // Animate columns fading and sliding up
    gsap.fromTo(".footer-col",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );

    // Animate the bottom copyright line
    gsap.fromTo(".footer-bottom",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: container });

  return (
    <footer ref={container} className="w-full bg-white pt-24 pb-8 px-4 flex justify-center border-t border-gray-100 overflow-hidden">
      <div className="w-full max-w-full md:max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-18rem)] px-4 md:px-0 flex flex-col">
        
        {/* Top Section - Flex Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="footer-col flex flex-col gap-6 w-full lg:w-[25%] pr-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.svg" width={25} alt="logo" />
              <span className="text-[#042449] font-bold text-2xl tracking-tight">ClickLab</span>
            </div>
            <p className="text-[#042449]/60 text-[15px] font-medium leading-relaxed tracking-tight">
              We design thumbnails that get clicked.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-[#042449] mt-2">
              {/* Facebook */}
              <a href="#" className="hover:text-[#1C87FF] transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg></a>
              {/* Twitter */}
              <a href="#" className="hover:text-[#1C87FF] transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg></a>
              {/* Instagram */}
              <a href="#" className="hover:text-[#1C87FF] transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-[#1C87FF] transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              {/* YouTube */}
              <a href="#" className="hover:text-[#1C87FF] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="footer-col flex flex-col gap-6 lg:w-[15%]">
            <h4 className="text-[#042449] font-semibold text-[17px] tracking-tight">Product</h4>
            <ul className="flex flex-col gap-4 text-[15px] font-medium text-[#042449]/60">
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">Case studies</Link></li>
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">Reviews</Link></li>
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">Updates</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-col flex flex-col gap-6 lg:w-[15%]">
            <h4 className="text-[#042449] font-semibold text-[17px] tracking-tight">Company</h4>
            <ul className="flex flex-col gap-4 text-[15px] font-medium text-[#042449]/60">
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">Contact us</Link></li>
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">Culture</Link></li>
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="footer-col flex flex-col gap-6 lg:w-[15%]">
            <h4 className="text-[#042449] font-semibold text-[17px] tracking-tight">Support</h4>
            <ul className="flex flex-col gap-4 text-[15px] font-medium text-[#042449]/60">
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">Getting started</Link></li>
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">Help center</Link></li>
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">Server status</Link></li>
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">Report a bug</Link></li>
              <li><Link href="#" className="hover:text-[#1C87FF] transition-colors">Chat support</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact us */}
          <div className="footer-col flex flex-col gap-6 lg:w-[25%]">
            <h4 className="text-[#042449] font-semibold text-[17px] tracking-tight">Contact us</h4>
            <ul className="flex flex-col gap-4 text-[15px] font-medium text-[#042449]/60">
              <li className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#042449]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:hello@clicklab.example" className="hover:text-[#1C87FF] transition-colors">hello@clicklab.example</a>
              </li>
              <li className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#042449]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+14155550142" className="hover:text-[#1C87FF] transition-colors">(415) 555 - 0142</a>
              </li>
              <li className="flex items-start gap-3 mt-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#042449] shrink-0 mt-0.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="leading-tight">Remote-first<br/>San Francisco, CA</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#042449]/10 text-sm font-medium text-[#042449]/50">
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <p>Copyright © 2026 ClickLab</p>
            <span className="text-[#042449]/30 mx-1">|</span>
            <p>
              Designed &amp; built by{" "}
              <a
                href="https://imaarstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C87FF] hover:underline transition-all"
              >
                imaarstudio
              </a>
            </p>
          </div>
          <div className="flex items-center text-center md:text-right gap-1.5 flex-wrap justify-center">
            <span>All Rights Reserved</span>
            <span className="text-[#042449]/30 mx-1">|</span>
            <Link href="#" className="text-[#1C87FF] hover:underline transition-all">Terms and Conditions</Link>
            <span className="text-[#042449]/30 mx-1">|</span>
            <Link href="#" className="text-[#1C87FF] hover:underline transition-all">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
