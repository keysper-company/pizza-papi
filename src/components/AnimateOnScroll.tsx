
import { useRef, useEffect, useState, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: string;
  threshold?: number;
  delay?: number;
  className?: string;
}

const AnimateOnScroll = ({
  children,
  animation = "fade-in-up",
  threshold = 0.1,
  delay = 0,
  className = "",
}: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in-up":
        return "opacity-0 translate-y-10 transition-all duration-700 ease-out";
      case "fade-in":
        return "opacity-0 transition-opacity duration-700 ease-out";
      case "slide-in-right":
        return "opacity-0 -translate-x-10 transition-all duration-700 ease-out";
      case "slide-in-left":
        return "opacity-0 translate-x-10 transition-all duration-700 ease-out";
      case "zoom-in":
        return "opacity-0 scale-95 transition-all duration-700 ease-out";
      default:
        return "opacity-0 translate-y-10 transition-all duration-700 ease-out";
    }
  };

  const getVisibleClass = () => {
    switch (animation) {
      case "fade-in-up":
        return "opacity-100 translate-y-0";
      case "fade-in":
        return "opacity-100";
      case "slide-in-right":
        return "opacity-100 translate-x-0";
      case "slide-in-left":
        return "opacity-100 translate-x-0";
      case "zoom-in":
        return "opacity-100 scale-100";
      default:
        return "opacity-100 translate-y-0";
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()} ${
        isVisible ? getVisibleClass() : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
