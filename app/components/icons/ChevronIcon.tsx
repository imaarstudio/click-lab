import React from 'react';
import { IconProps } from './types';

export default function ChevronIcon({ size = 24, className = '', ...props }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path 
        d="M15 6L9 12.0001L15 18" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeMiterlimit="16" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}