import { useState, useEffect, useCallback, useRef } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverTarget, setHoverTarget] = useState(null);
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      if (!tickingRef.current) {
        tickingRef.current = true;
        rafRef.current = requestAnimationFrame(() => {
          setPosition({ x: posRef.current.x, y: posRef.current.y });
          tickingRef.current = false;
        });
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-magnetic]');
      if (target) {
        setIsHovering(true);
        setHoverTarget(target);
      } else {
        setIsHovering(false);
        setHoverTarget(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { position, isHovering, hoverTarget };
}

export function useScrollAnimation(options = {}) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [ref, setRef] = useState(null);
  const [isInView, setIsInView] = useState(false);

  const callbackRef = useCallback((node) => {
    setRef(node);
  }, []);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(ref);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, triggerOnce]);

  return [callbackRef, isInView];
}

export function useCountUp(end, duration = 2000, startOnView = false, isInView = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (startOnView && !isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startOnView, isInView]);

  return count;
}
