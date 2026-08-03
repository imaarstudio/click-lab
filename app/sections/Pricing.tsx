"use client"
import React, { useRef } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MoneyBagIcon } from '../components/icons';

const pricingPlans = [
  {
    name: "Starter",
    description: "For creators just starting out",
    price: "$29",
    features: [
      "1 custom thumbnail",
      "2 revision rounds",
      "48-72hr delivery",
      "Source file included"
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For creators getting serious",
    price: "$79",
    features: [
      "4 custom thumbnails",
      "Unlimited revisions",
      "48hr priority delivery",
      "PNG + source files",
      "CTR strategy notes per thumbnail",
      "Competitor thumbnail analysis"
    ],
    buttonText: "Get Pro",
    popular: true,
  },
  {
    name: "Premium",
    description: "For creators ready to scale",
    price: "$149",
    features: [
      "8 custom thumbnails",
      "Unlimited revisions",
      "48hr priority delivery",
      "PNG + source files",
      "CTR strategy note per thumbnail",
      "Competitor thumbnail analysis"
    ],
    buttonText: "Go Premium",
    popular: false,
  }
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" fill="#4B6382" />
      <path d="M8 12.5L11 15.5L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  const container = useRef(null);

  useGSAP(() => {
    // Header reveal
    gsap.fromTo(".pricing-header > *",
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
      }
    );

    // Cards reveal
    gsap.fromTo(".pricing-card",
      { y: 40, opacity: 0 },
      {
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out"
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-[#f7f8f9] py-24 md:py-32 px-4 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-full md:max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-18rem)] flex flex-col gap-16 text-center items-center">

        {/* Header */}
        <div className="pricing-header flex flex-col gap-6 w-full items-center text-center">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 w-fit">
            <MoneyBagIcon size={14} className="text-[#042449]/80" />
            <span className="text-[#042449] font-semibold text-sm ">Pricing</span>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <h2 className="text-[#042449] text-4xl md:text-[3.25rem] font-semibold leading-tight">
              Plans Built <span className="bg-linear-to-b from-[#6EC2F3] to-[#1C87FF] bg-clip-text text-transparent">For Creators.</span>
            </h2>
            <p className="text-[#042449]/70 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
              Whether you upload once a month or every week, there's a plan for you.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid flex flex-col xl:flex-row items-center xl:items-stretch justify-center gap-6 md:gap-8 w-full mt-2">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative flex flex-col w-full max-w-[380px] rounded-4xl transition-all duration-300 hover:shadow-xl ${plan.popular
                ? 'bg-[linear-gradient(to_bottom,#7ED0FF_0%,#FFFFFF_81%)] px-1.5 xl:-translate-y-5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] z-10'
                : 'bg-white p-8 xl:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] xl:mt-4 z-0 border border-transparent'
                }`}
            >
              {plan.popular && (
                <div className="w-full text-[#042449] font-bold text-sm tracking-wider uppercase py-3 text-center">
                  Most Popular Plan
                </div>
              )}

              <div className={`${plan.popular ? 'bg-white rounded-[1.6rem] p-6 sm:p-8 flex flex-col grow' : 'flex flex-col grow'}`}>
                <div className={`flex flex-col gap-1 text-left`}>
                  <h3 className="text-[#042449] text-xl font-semibold ">{plan.name}</h3>
                  <p className="text-[#042449]/60 text-sm font-medium ">{plan.description}</p>
                </div>

                <div className="flex text-left mt-6 mb-8">
                  <span className="text-[#042449] text-4xl leading-none font-semibold">{plan.price}</span>
                </div>

                <ul className="flex flex-col gap-4 text-left grow mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.99967 0.833008C7.62554 0.833008 7.32074 0.990415 7.04341 1.20206C6.78361 1.40027 6.49705 1.68684 6.1618 2.02212L6.13822 2.0457C5.79511 2.38881 5.496 2.52385 5.03439 2.52385C4.97654 2.52385 4.90353 2.52179 4.82109 2.51947C4.60973 2.51353 4.33632 2.50583 4.09711 2.52652C3.74719 2.55678 3.30989 2.65253 2.97797 2.98723C2.64861 3.31937 2.55519 3.75489 2.52583 4.1026C2.50582 4.33964 2.51351 4.61101 2.51945 4.82086C2.52179 4.90353 2.52386 4.97667 2.52386 5.03438C2.52386 5.49599 2.38881 5.79511 2.04569 6.13823L2.02212 6.1618C1.68684 6.49705 1.40027 6.78361 1.20206 7.04334C0.990421 7.32074 0.833014 7.62554 0.833008 7.99967C0.833014 8.37374 0.990428 8.67854 1.20206 8.95594C1.40031 9.21581 1.68695 9.50241 2.02231 9.83774L2.04571 9.86114C2.26815 10.0835 2.37308 10.2278 2.43255 10.3639C2.49047 10.4965 2.52386 10.6644 2.52386 10.9649C2.52386 11.0228 2.52181 11.0958 2.51949 11.1783C2.51354 11.3896 2.50585 11.663 2.52653 11.9023C2.5568 12.2521 2.65256 12.6895 2.98727 13.0214C3.31941 13.3507 3.75492 13.4441 4.10263 13.4735C4.33965 13.4935 4.61103 13.4858 4.82087 13.4799C4.90355 13.4775 4.97667 13.4755 5.03438 13.4755C5.32853 13.4755 5.49385 13.5051 5.62397 13.5587C5.75399 13.6124 5.89305 13.7085 6.1025 13.9179C6.1472 13.9626 6.20609 14.0257 6.27403 14.0985C6.42733 14.2629 6.62681 14.4767 6.81301 14.6394C7.09547 14.8863 7.50074 15.1663 7.99967 15.1663C8.49867 15.1663 8.90387 14.8863 9.18641 14.6394C9.37254 14.4767 9.57187 14.2631 9.72514 14.0987C9.79314 14.0258 9.85214 13.9627 9.89688 13.9179C10.1063 13.7085 10.2453 13.6124 10.3753 13.5587C10.5055 13.5051 10.6708 13.4755 10.9649 13.4755C11.0227 13.4755 11.0958 13.4775 11.1785 13.4799C11.3883 13.4858 11.6597 13.4935 11.8967 13.4735C12.2444 13.4441 12.6799 13.3507 13.0121 13.0214C13.3468 12.6895 13.4425 12.2521 13.4728 11.9023C13.4935 11.663 13.4858 11.3896 13.4799 11.1783C13.4775 11.0959 13.4755 11.0227 13.4755 10.9649C13.4755 10.6644 13.5089 10.4965 13.5668 10.3639C13.6263 10.2278 13.7312 10.0835 13.9536 9.86114L13.9771 9.83774C14.3124 9.50241 14.5991 9.21581 14.7973 8.95594C15.0089 8.67854 15.1663 8.37374 15.1663 7.99967C15.1663 7.62554 15.0089 7.32074 14.7973 7.04334C14.5991 6.78361 14.3125 6.49706 13.9773 6.16182L13.9537 6.13823C13.7312 5.91578 13.6263 5.77153 13.5668 5.63537C13.5089 5.50279 13.4755 5.33493 13.4755 5.03438C13.4755 4.97657 13.4775 4.90363 13.4799 4.82125C13.4858 4.60989 13.4935 4.33631 13.4728 4.09711C13.4425 3.7472 13.3468 3.30989 13.0121 2.97799C12.68 2.6486 12.2445 2.55517 11.8967 2.52581C11.6597 2.5058 11.3883 2.51349 11.1785 2.51943C11.0958 2.52177 11.0227 2.52385 10.9649 2.52385C10.5032 2.52385 10.2041 2.38875 9.86114 2.0457L9.83754 2.02213C9.50227 1.68684 9.21574 1.40027 8.95594 1.20206C8.67861 0.990415 8.37381 0.833008 7.99967 0.833008ZM10.5101 6.76181C10.7469 6.47989 10.7104 6.05937 10.4285 5.82255C10.1465 5.58573 9.72601 5.6223 9.48921 5.90423L7.13114 8.71141L6.44369 8.09761C6.16905 7.85241 5.74761 7.87627 5.50239 8.15094C5.25717 8.42554 5.28102 8.84701 5.55567 9.09221L6.75567 10.1637C6.89014 10.2837 7.06754 10.3442 7.24741 10.3313C7.42721 10.3184 7.59421 10.2332 7.71014 10.0951L10.5101 6.76181Z" fill="#042449" fillOpacity="0.7" />
                      </svg>

                      <span className="text-[#042449]/80 font-medium text-[15px] leading-snug ">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.popular ? (
                  <PrimaryButton className="w-full py-3.5 text-[15px]">
                    {plan.buttonText}
                  </PrimaryButton>
                ) : (
                  <button className="w-full py-3.5 rounded-full font-semibold text-[15px] transition-transform hover:scale-[1.02] active:scale-95 bg-linear-to-b from-[#4A607A] to-[#2B3E54] text-white shadow-md">
                    {plan.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
