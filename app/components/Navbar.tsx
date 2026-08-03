"use client";

import React, { useState, useRef, useEffect } from 'react';
import PrimaryButton from './PrimaryButton';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { VideoCallIcon, HamburgerIcon, CrossIcon, ChevronIcon } from './icons';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
    const navRef = useRef(null);
    const pillRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setIsScrolled(currentY > 20);
            // Show bottom navbar after scrolling past the hero section (approx 1.2x viewport height)
            setIsScrolledPastHero(currentY > window.innerHeight * 1.2);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useGSAP(() => {
        gsap.from(pillRef.current, {
            y: -60,
            duration: 1.2,
            ease: "power4.out",
            delay: 0.1,
            clearProps: "all"
        });
    }, { scope: navRef });

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Mobile Menu Animation logic
    useGSAP(() => {
        const menu = document.getElementById('mobile-menu');
        if (!menu) return;

        if (isOpen) {
            // Open animation
            gsap.set(menu, { visibility: 'visible', pointerEvents: 'auto' });
            
            const tl = gsap.timeline();
            tl.to(menu, { opacity: 1, duration: 0.3 })
              .to(".menu-backdrop", { opacity: 1, duration: 0.4 }, 0)
              .to(".menu-content", { y: 0, duration: 0.6, ease: "power4.out" }, 0.1)
              .to(".menu-item", { 
                opacity: 1, 
                y: 0, 
                stagger: 0.08, 
                duration: 0.5, 
                ease: "power3.out" 
              }, 0.2)
              .to(".menu-footer", { 
                opacity: 1, 
                y: 0, 
                duration: 0.5, 
                ease: "power3.out" 
              }, 0.4);

        } else {
            // Close animation
            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.set(menu, { visibility: 'hidden', pointerEvents: 'none' });
                }
            });
            tl.to(".menu-item", { opacity: 0, y: 10, stagger: 0.05, duration: 0.3 })
              .to(".menu-footer", { opacity: 0, y: 10, duration: 0.3 }, 0.1)
              .to(".menu-content", { y: 40, duration: 0.4, ease: "power3.in" }, 0.1)
              .to(menu, { opacity: 0, duration: 0.3 }, 0.2);
        }
    }, [isOpen]);

    return (
        <>
            {/* Top Navbar - Visibility controlled container */}
            <div
                ref={navRef}
                className={`fixed md:absolute top-0 left-0 w-full z-[9999] pointer-events-none pt-4 md:pt-6 px-4 ${isScrolled ? 'max-md:pt-0 max-md:px-0' : ''}`}
                style={{
                    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
            >
                {/* Desktop & Mobile Main Bar */}
                <div
                    ref={pillRef}
                    className={`flex h-fit items-center mx-auto shadow-sm overflow-hidden bg-[#F1F2F4] justify-between
                        w-full max-w-[900px] rounded-[3rem] py-2 pr-2 pl-5 md:pl-7
                        ${isScrolled ? 'max-md:max-w-[100vw] max-md:rounded-none max-md:py-3 max-md:px-6' : ''}
                    `}
                    style={{
                        pointerEvents: 'auto',
                        transition: 'max-width 0.8s cubic-bezier(0.22, 1, 0.36, 1), border-radius 0.8s cubic-bezier(0.22, 1, 0.36, 1), padding 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                >

                    {/* Logo */}
                    <div className='flex items-center gap-2'>
                        <img src="/logo.svg" width={25} alt="logo" />
                        <span className='text-[#042449] font-bold text-xl tracking-tighter'>ClickLab</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:block">
                        <ul className="flex font-medium text-base text-[#042449]/70 gap-6">
                            <li className='font-semibold text-[#042449]/90 cursor-pointer hover:text-[#042449] transition-colors'>Home</li>
                            <li className='cursor-pointer hover:text-[#042449] transition-colors'>Projects</li>
                            <li className='cursor-pointer hover:text-[#042449] transition-colors'>Pricing</li>
                            <li className='cursor-pointer hover:text-[#042449] transition-colors'>Careers</li>
                        </ul>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <PrimaryButton className='py-3 px-8 text-base tracking-tighter'>
                            <VideoCallIcon size={16} />
                            Get Started</PrimaryButton>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden flex items-center justify-center p-2 mr-1 text-[#042449] hover:bg-black/5 rounded-full transition-colors"
                        onClick={() => setIsOpen(true)}
                    >
                        <HamburgerIcon size={20} />
                    </button>
                </div>
            </div>

            {/* Mobile Overlay Menu - Always mounted for GSAP animations */}
            <div 
                id="mobile-menu"
                className="fixed inset-0 flex flex-col md:hidden pointer-events-none" 
                style={{ zIndex: 10000, visibility: 'hidden', opacity: 0 }}
            >
                {/* Backdrop Blur */}
                <div className="menu-backdrop absolute inset-0 bg-white/60 backdrop-blur-xl opacity-0" />

                <div className="menu-content relative bg-white w-full h-full flex flex-col overflow-hidden translate-y-10">

                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <div className='flex items-center gap-2'>
                            <img src="/logo.svg" width={24} alt="logo" className="brightness-0" />
                            <span className='text-[#042449] font-bold text-xl tracking-tighter'>ClickLab</span>
                        </div>
                        <button
                            className="flex items-center justify-center w-10 h-10 text-[#042449] hover:bg-gray-100 rounded-full transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <CrossIcon size={24} />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex-1 overflow-y-auto py-4 px-6">
                        <ul className="flex flex-col">
                            {['Home', 'Projects', 'Pricing', 'Careers'].map((item) => (
                                <li key={item} className="menu-item flex items-center justify-between py-6 border-b border-gray-100 last:border-0 text-[#042449] font-semibold text-2xl cursor-pointer hover:bg-gray-50 transition-colors opacity-0 translate-y-4">
                                    {item}
                                    <ChevronIcon size={20} className="rotate-180 opacity-40" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Footer CTA */}
                    <div className="menu-footer p-6 bg-[#f7f8f9] flex flex-col gap-3 border-t border-gray-100 pb-12 opacity-0 translate-y-4">
                        <PrimaryButton className="w-full py-4 text-[17px] font-semibold shadow-none">
                            <VideoCallIcon size={18} />
                            Get Started
                        </PrimaryButton>
                        <button className="w-full py-4 text-[17px] font-semibold text-[#042449] border-2 border-gray-200 rounded-full hover:bg-white transition-colors bg-transparent">Contact Sales</button>
                    </div>

                </div>
            </div>


            {/* Bottom PC Navbar (Shows after Hero) */}
            <div
                className={`hidden md:flex fixed bottom-8 left-0 right-0 mx-auto w-fit z-[9999] transition-all duration-500 ease-out`}
                style={{
                    transform: isScrolledPastHero ? 'translateY(0)' : 'translateY(150%)',
                    opacity: isScrolledPastHero ? 1 : 0,
                    pointerEvents: isScrolledPastHero ? 'auto' : 'none',
                }}
            >
                <div className="flex items-center gap-10 bg-white/95 backdrop-blur-md pl-5 pr-2 py-2 rounded-full shadow-2xl border border-gray-100">
                    {/* Logo */}
                    <div className='flex items-center gap-2 pl-2'>
                        <img src="/logo.svg" width={24} alt="logo" />
                        <span className='text-[#042449] font-bold text-xl tracking-tighter'>ClickLab</span>
                    </div>

                    {/* CTA */}
                    <PrimaryButton className='py-3.5 px-8 text-base tracking-tight font-semibold shadow-md'>
                        <VideoCallIcon size={18} />
                        Get Started</PrimaryButton>
                </div>
            </div>

        </>
    );
}
