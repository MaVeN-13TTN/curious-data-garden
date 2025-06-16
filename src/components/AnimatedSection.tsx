import { useRef, ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'slide-in' | 'zoom-in';
}

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  animation = 'fade-in',
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver({ ref });
  
  const getAnimationClass = () => {
    switch (animation) {
      case 'slide-in':
        return 'translate-y-10 opacity-0';
      case 'zoom-in':
        return 'scale-95 opacity-0';
      case 'fade-in':
      default:
        return 'opacity-0';
    }
  };
  
  const getVisibleClass = () => {
    switch (animation) {
      case 'slide-in':
        return 'translate-y-0 opacity-100';
      case 'zoom-in':
        return 'scale-100 opacity-100';
      case 'fade-in':
      default:
        return 'opacity-100';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? getVisibleClass() : getAnimationClass()
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;