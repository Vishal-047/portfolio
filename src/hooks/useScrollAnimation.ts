'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = false, // Changed to false for scroll-based animations
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        if (triggerOnce && entry.isIntersecting) {
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

export const useStaggeredScrollAnimation = <T extends HTMLElement = HTMLDivElement>(
  itemCount: number,
  options: UseScrollAnimationOptions = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<T>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = false,
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        if (triggerOnce && entry.isIntersecting) {
          observer.unobserve(container);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { containerRef, isVisible };
};

// Hook for multiple elements with individual visibility tracking
export const useMultipleScrollAnimations = <T extends HTMLElement = HTMLDivElement>(
  elementCount: number,
  options: UseScrollAnimationOptions = {}
) => {
  const [visibilityStates, setVisibilityStates] = useState<boolean[]>(
    new Array(elementCount).fill(false)
  );
  const elementRefs = useRef<(T | null)[]>(new Array(elementCount).fill(null));

  const {
    threshold = 0.2,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = false,
  } = options;

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    elementRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibilityStates(prev => {
            const newStates = [...prev];
            newStates[index] = entry.isIntersecting;
            return newStates;
          });

          if (triggerOnce && entry.isIntersecting) {
            observer.unobserve(element);
          }
        },
        {
          threshold,
          rootMargin,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [threshold, rootMargin, triggerOnce]);

  const setElementRef = (index: number) => (element: T | null) => {
    elementRefs.current[index] = element;
  };

  return {
    visibilityStates,
    setElementRef,
  };
};
