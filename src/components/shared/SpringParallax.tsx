/* eslint-disable consistent-return */
import { useTransform, useViewportScroll, motion, useSpring } from 'framer-motion';
import React, { ReactNode, useLayoutEffect, useRef, useState } from 'react';

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  style?: any;
}

const SpringParallax = ({ children, offset = 50, style }: ParallaxProps) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<any>(null);

  const { scrollY } = useViewportScroll();
  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  // apply a spring to ease the result
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });
  useLayoutEffect(() => {
    const element = ref.current;
    // if (!element) return;
    const onResize = () => {
      setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset);
      setClientHeight(window.innerHeight);
    };
    setTimeout(() => {
      onResize();
    }, 10);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [ref]);
  return (
    <motion.div ref={ref} style={{ y, ...style }}>
      {children}
    </motion.div>
  );
};

export default SpringParallax;
