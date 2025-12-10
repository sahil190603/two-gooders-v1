// components/AnimatedSection.jsx
"use client";

import React from 'react';
import { useInView } from '../hooks/useInView';

export function AnimatedSection({ 
  children, 
  delay = 0, 
  className = '',
  animation = 'slideUpFadeIn'
}) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  
  const animationStyle = inView ? {
    animation: `${animation} 0.8s var(--ease-out) ${delay}s both`
  } : {
    opacity: 0
  };

  return (
    <div 
      ref={ref} 
      className={className}
      style={animationStyle}
    >
      {children}
    </div>
  );
}  