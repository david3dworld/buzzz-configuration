/* eslint-disable @typescript-eslint/no-use-before-define */
import Image from 'next/image';
import React, { useRef, useEffect, CSSProperties } from 'react';

const TopButton = () => {
  // Set useRef
  const topRef = useRef<HTMLButtonElement | null>(null);

  // Scroll Function
  const topScroll = () => {
    // const target = 0;
    const duration = 1000;
    const start = window.pageYOffset;
    const distance = start;
    let startTime: number = 0;

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t * t + b;
      t -= 2;
      return (-c / 2) * (t * t * t * t - 2) + b;
    };

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
  };

  // Event listener function
  const handleScroll = () => {
    if (window.scrollY > 500) {
      topRef.current!.style.display = 'flex';
    } else if (window.scrollY <= 500) {
      topRef.current!.style.display = 'none';
    }
  };

  // Set scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button style={top} onClick={topScroll} ref={topRef} type="button">
      <Image src="/svg/arrow_up.svg" width={30} height={30} alt="top" />
    </button>
  );
};

const top: CSSProperties = {
  position: 'fixed',
  right: '50px',
  bottom: '60px',
  background: '#fff',
  color: '#f4f4f4',
  cursor: 'pointer',
  padding: '0.6rem',
  borderRadius: '50%',
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17)',
  outline: 'none',
  borderWidth: '0px',
};

export default TopButton;
