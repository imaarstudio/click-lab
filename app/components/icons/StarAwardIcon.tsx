import React from 'react';
import { IconProps } from './types';

export default function StarAwardIcon({ size = 24, className = '', ...props }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 11 15" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M0 5.16667C0 2.31319 2.31319 0 5.16667 0C8.02013 0 10.3333 2.31319 10.3333 5.16667C10.3333 8.02013 8.02013 10.3333 5.16667 10.3333C2.31319 10.3333 0 8.02013 0 5.16667ZM5.16667 2.16667L6.0072 3.89844L7.83333 4.20382L6.52667 5.57949L6.81473 7.5L5.16667 6.61847L3.51857 7.5L3.80667 5.57949L2.5 4.20382L4.32613 3.89844L5.16667 2.16667ZM2 14.3337V10.2643C2.91911 10.8365 4.00427 11.1671 5.16667 11.1671C6.32907 11.1671 7.4142 10.8365 8.33333 10.2643V14.3337L5.16667 12.5004L2 14.3337Z" fill="#042449" fillOpacity="0.8" />
    </svg>
  );
}
