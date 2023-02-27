import React, { useEffect, useState } from 'react';
import { motion, Transition } from 'framer-motion';

const LandingCurve = () => {
  const [currPath, setCurrPath] = useState(0);
  const calc = () => {
    // if (window.scrollY >= 1500) return;
    const newPath = window.scrollY * 0.00066667;
    setCurrPath(newPath);
  };
  useEffect(() => {
    window.addEventListener('scroll', calc);
    return () => window.removeEventListener('scroll', calc);
  }, []);

  const [width, setWidth] = useState<any>();
  const [height, setHeight] = useState<any>();
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const transition: Transition = { duration: 0.001, ease: 'easeInOut' };

  return (
    <svg
      // width={width}
      // height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M331 -113C264 -84 196 -35 134 32C121.147 46.222 108.806 60.898 97 76C67 113 -9.99998 204 2.00002 302C14 403 96 436 134 448C244 482 360 449 468 405C501 392 529 379 561 358C571 351 599 334 590 322C586 317 569 321 567 322C534 332 500 352 467 372C440 390 417 405 391 430C374 447 347 474 340 515C328 580 387 615 404 628C409 632 478 669 459 698C447 717 405 751 397 757C353 792 -53 1127 97 1109C315 1083 535 1100 665 1235C905 1485 1012 1979 1109 1976C1206 1973 1280 1409 1327 1380C1374 1351 1411 1504 1475 1508"
        stroke="black"
        strokeLinecap="round"
        animate={{ pathLength: currPath }}
        transition={transition}
      />
    </svg>
  );
};

export default LandingCurve;
