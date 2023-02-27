/* eslint-disable consistent-return */
/* eslint-disable dot-notation */
import React, { useRef, useEffect } from 'react';

const Cursor = () => {
  const curRef = useRef<any>('');
  const moveMouse = (e: any) => {
    curRef.current.style.left = `${e.pageX}px`;
    curRef.current.style.top = `${e.pageY}px`;
    curRef.current.style.display = 'block';
    // const computed = window.getComputedStyle(e.target)['cursor'];
    // if (computed === "pointer") {
    //   curRef.current.classList.add("act_circle");
    // } else {
    //   curRef.current.classList.remove("act_circle");
    // }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener('mousemove', moveMouse);
      return () => {
        document.removeEventListener('mousemove', moveMouse);
      };
    }
  }, []);

  return <div ref={curRef} className="circle" />;
};

export default Cursor;
