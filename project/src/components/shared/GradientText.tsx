import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 ${className}`}>
      {children}
    </span>
  );
}