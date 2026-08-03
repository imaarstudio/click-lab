import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryButton({ children, className = '', ...props }: PrimaryButtonProps) {
  return (
    <button
      className={`relative flex items-center justify-center gap-2 bg-[#1E7CE6] text-white rounded-full font-semibold cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out shadow-[0_0_30px_rgba(28,135,255,0.3)] overflow-hidden ${className}`}
      {...props}
    >
      {/* Gradient Stroke (Position: Inside, Linear #BBE2F8 to #0162D1) */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none border border-transparent z-20"
        style={{
          background: 'linear-gradient(to bottom, #BBE2F8, #0162D1) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Inner Glow SVG */}
      <svg className='absolute w-[85%] -top-5 left-1/2 -translate-x-1/2 mix-blend-plus-lighter blur-xl pointer-events-none z-0' viewBox="0 0 211 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="105.5" cy="8" rx="105.5" ry="8" fill="#84EBF9" />
      </svg>

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
