import React from 'react';
import { IconProps } from './types';

export default function HamburgerIcon({ size = 24, className = '', ...props }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 96 86" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M0 5.33333C0 2.38784 2.38784 0 5.33333 0H90.6667C93.6123 0 96 2.38784 96 5.33333C96 8.27888 93.6123 10.6667 90.6667 10.6667H5.33333C2.38784 10.6667 0 8.27883 0 5.33333Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 42.6663C0 39.7207 2.38784 37.333 5.33333 37.333H90.6667C93.6123 37.333 96 39.7207 96 42.6663C96 45.6119 93.6123 47.9997 90.6667 47.9997H5.33333C2.38784 47.9997 0 45.6119 0 42.6663Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 79.9998C0 77.0542 2.38784 74.6665 5.33333 74.6665H90.6667C93.6123 74.6665 96 77.0542 96 79.9998C96 82.9454 93.6123 85.3332 90.6667 85.3332H5.33333C2.38784 85.3332 0 82.9454 0 79.9998Z" fill="currentColor" />
    </svg>
  );
}
