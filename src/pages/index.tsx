/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
import React, { Fragment, useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import Link from 'next/link';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { motion } from 'framer-motion';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';
import gsap from 'gsap';
import { Cursor, Header, LandingProducts, SpringParallax } from '../components';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  landingFeatured,
  landingProducts,
  landingSection5Array,
  LandingSection5Type,
  stepsData,
} from '../utils/static';
import ANIMATION from '../utils/framerMotion';
import { LandingCurve } from '../svg';
import routes from '../routes';

let bgChange = false;
const Landing: NextPage = () => {
  const AnyCarouselProvider = CarouselProvider as any;
  const AnySlider = Slider as any;
  const AnySlide = Slide as any;
  const AnySplide = Splide as any;
  const AnyController = Controller as any;
  const AnyScene = Scene as any;
  const ovrRef = useRef<any>('');

  // Logic for scrolling carousel on scroll
  const carRef = useRef<any>(null);

  const [width, setWidth] = useState<any>();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const percentageSeen = (el: any) => {
    const box = el.getBoundingClientRect();
    return box.top <= 0.6 * window.innerHeight && box.bottom >= 0;
  };

  const changeBg = () => {
    ovrRef.current.style.background = '#8100F7';
    // ovrRef.current.style.color = '#fff';
  };
  const reverseBg = () => {
    ovrRef.current.style.background = '#fff';
    // ovrRef.current.style.color = '#000';
  };

  // Check bg position
  const checkBg = () => {
    const bg1 = document.getElementById('bg-1');
    const ans = percentageSeen(bg1);
    if (bgChange === false) {
      if (ans === true) {
        bgChange = true;
        changeBg();
      }
    }
    if (bgChange === true) {
      if (ans === false) {
        bgChange = false;
        reverseBg();
      }
    }
  };

  useEffect(() => {
    if (!window) return;
    window.addEventListener('scroll', checkBg);
    return () => {
      window.removeEventListener('scroll', checkBg);
    };
  }, []);
  const boxRef = useRef<any>();

  const mouseMoveFunc = (evt: any) => {
    const { innerWidth } = window;
    const gsapEl: any = gsap.getProperty('.landing_hero_prods', 'width');
    const maxX: number = gsapEl * -0.25;

    const percent = gsap.utils.normalize(0, innerWidth, evt.pageX);

    gsap.to('.landing_hero_prods', {
      duration: 0.7,
      x: percent * maxX - maxX / 2,
      overwrite: true,
    });
  };

  useEffect(() => {
    boxRef.current.addEventListener('mousemove', mouseMoveFunc);
    return () => {
      if (!boxRef.current) return;
      boxRef.current.removeEventListener('mousemove', mouseMoveFunc);
    };
  }, []);

  return (
    <Fragment>
      <Header title="Welcome | Buzzz" />
      <div className="new_landing_con" ref={ovrRef}>
        <div className="landing_curve">
          <LandingCurve />
        </div>
        {/* Landing page hero section */}
        <div className="new_landing_hero">
          <motion.div
            className="new_landing_hero_content"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ staggerChildren: 0.6 }}
          >
            <div className="landing_aurora">
              <Image src="/svg/aurora.svg" width={1000} height={1000} alt="aurora" />
            </div>
            <motion.h1 variants={ANIMATION.fadeUpVariant}>
              Enjoy A Risk-Free Merch business with no upfront costs and no stress.
            </motion.h1>
            <motion.div className="new_hero_landing_btns" variants={ANIMATION.fadeUpVariant}>
              <Link href={routes.ondemand.path}>
                <a href={routes.ondemand.path} className="curved-btn">
                  Design now
                </a>
              </Link>

              <Link href={routes.marketplace.path}>
                <a href={routes.marketplace.path} className="curved-btn outline">
                  Explore marketplace
                </a>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="new_landing_hero_img"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ staggerChildren: 0.6 }}
            variants={ANIMATION.fadeDownVariant}
          >
            <Image src="/images/Buzz_Edit.png" alt="landing banner" width={638} height={611} />
          </motion.div>
        </div>
        {/* Landing page products section */}
        <div className="landing_hero_prods" ref={boxRef}>
          {landingProducts.map((value, i) => (
            <LandingProducts key={i} value={value} />
          ))}
        </div>
        {/* Landing page section 1 */}
        <section className="landing_section1" id="bg-1">
          <AnyController>
            <AnyScene triggerHook="onLeave" duration={4000} pin>
              {(progress: any) => (
                <div className="landing_section1_wrap">
                  <Timeline totalProgress={progress} paused>
                    <Tween from={{ x: '0%' }} to={{ x: '-65%' }}>
                      <div className="landing_section1_items">
                        <p>Design more merchs</p>
                        <p>Convert more sales</p>
                        <p>Build more trust</p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </AnyScene>
          </AnyController>
        </section>
        {/* Landing page section 2 */}
        <section className="landing_section2">
          <div className="landing_section2_head">
            <motion.h1
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={ANIMATION.fadeUpVariant}
            >
              Four <span>easy</span> steps
            </motion.h1>
          </div>
          <div className="landing_section2_wrap">
            {stepsData.map((value, i) => (
              <Fragment key={i}>
                <div className="landing_section2_item section2_full" key={i}>
                  <SpringParallax offset={100} style={{ flex: 1.4 }}>
                    <motion.div
                      className="landing_section2_content"
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ staggerChildren: 0.3 }}
                    >
                      <motion.h1 variants={ANIMATION.fadeUpVariant}>{value.id}.</motion.h1>
                      <motion.h2 variants={ANIMATION.fadeUpVariant}>{value.title}</motion.h2>
                      <motion.h3 variants={ANIMATION.fadeUpVariant}>{value.text}</motion.h3>
                    </motion.div>
                  </SpringParallax>
                  <SpringParallax offset={-20} style={{ flex: 1 }}>
                    <div className="landing_section2_img">
                      <Image
                        src={value.img}
                        width={value.id % 2 === 0 ? 442 : 356}
                        height={value.id % 2 === 0 ? 309 : 471}
                        alt="steps img"
                      />
                    </div>
                  </SpringParallax>
                </div>
                <div className="landing_section2_item section2_mob" key={i + 100}>
                  <motion.div
                    className="landing_section2_content"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.3 }}
                  >
                    <motion.h1 variants={ANIMATION.fadeUpVariant}>{value.id}.</motion.h1>
                    <motion.h2 variants={ANIMATION.fadeUpVariant}>{value.title}</motion.h2>
                    <motion.h3 variants={ANIMATION.fadeUpVariant}>{value.text}</motion.h3>
                  </motion.div>
                  <div className="landing_section2_img">
                    <Image
                      src={value.img}
                      width={value.id % 2 === 0 ? 442 : 356}
                      height={value.id % 2 === 0 ? 309 : 471}
                      alt="steps img"
                    />
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        {/* Landing Page Section 3 */}
        <section className="landing_section3">
          <h1>Featured Products</h1>
          <div className="carousel_wrap">
            <AnyCarouselProvider
              naturalSlideWidth={361}
              naturalSlideHeight={322}
              totalSlides={15}
              visibleSlides={5}
              isPlaying
              infinite
              interval={3000}
            >
              <AnySlider className="carousel_slider">
                {landingFeatured.map((value, i) => (
                  <AnySlide index={i} className="carousel_slide" key={i}>
                    <div className="slide_img_con">
                      <Image width={361} height={322} alt="featured carousel" src={value.img} />
                    </div>
                  </AnySlide>
                ))}
              </AnySlider>
            </AnyCarouselProvider>
            <AnyCarouselProvider
              naturalSlideWidth={361}
              naturalSlideHeight={322}
              totalSlides={15}
              visibleSlides={5}
              isPlaying
              infinite
              interval={2500}
              playDirection="backward"
            >
              <AnySlider className="carousel_slider">
                {landingFeatured.map((value, i) => (
                  <AnySlide index={i} className="carousel_slide" key={i}>
                    <div className="slide_img_con">
                      <Image width={361} height={322} alt="featured carousel" src={value.img} />
                    </div>
                  </AnySlide>
                ))}
              </AnySlider>
            </AnyCarouselProvider>
          </div>
          <div className="landing_section3_link">
            <a href="/" className="">
              Explore marketplace
            </a>
          </div>
        </section>
        {/* Landing page section 4 */}
        {/* <div>
          <Fallbox />
        </div> */}

        <section className="landing_section4">
          <div className="landing_section4_con">
            <AnySplide
              ref={carRef}
              aria-label="My Favorite Images"
              options={{
                type: 'loop',
                padding: width < 768 ? '0rem' : width < 1300 ? '6rem' : '17rem',
                arrows: false,
                perPage: 1,
              }}
            >
              {[1, 2, 3].map((_, i: number) => (
                <SplideSlide key={i}>
                  <div className="landing_section4_card">
                    <Image
                      src="/images/landing_avatar.png"
                      width={114}
                      height={114}
                      alt="landing carousel"
                    />
                    <h1>
                      My team and I are strong believers that personalized videos are a powerful way
                      to build trusted relationships with our customers, and Potion is helping us do
                      exactly that.
                    </h1>
                    <div className="landing_section4_name">
                      <h2>Hakeem Olasupo</h2>
                      <h4>SVP & COO, Hakeem & Co.</h4>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </AnySplide>
          </div>
        </section>
        <section className="landing_section5">
          <div className="landing_section5_head">
            <motion.h1
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={ANIMATION.fadeUpVariant}
            >
              We are here to <span>help</span>
            </motion.h1>
          </div>
          <AnySplide
            aria-label="My Favorite Images"
            options={{
              type: 'loop',
              arrows: false,
              autoplay: true,
            }}
          >
            {landingSection5Array.map((el: LandingSection5Type[0], i: number) => (
              <SplideSlide key={i}>
                <motion.div
                  whileHover="hover"
                  animate="rest"
                  variants={ANIMATION.cardHoverVariant}
                  className="landing-section5-card d-flex justify-space-between align-items-center mx-5"
                >
                  <div className="landing-section5-card-content px-3 py-4">
                    <h1 className="mb-3">{el.text}</h1>
                    <h2 className="mb-3">{el.body}</h2>
                    <a className="curved-btn" href="/">
                      {el.button}
                    </a>
                  </div>
                  <div className="landing-section5-card-img">
                    <motion.img
                      variants={ANIMATION.cardImageHoverVariant}
                      src="./images/section6_img1.png"
                      alt=""
                    />
                  </div>
                </motion.div>
              </SplideSlide>
            ))}
          </AnySplide>
          {/* <div className="landing_section5_fallworld">
            <Fallbox />
          </div> */}
        </section>
        <section className="landing_section6">
          <div className="landing_section6_con">
            <div className="landing_section6_content">
              <h1>Get Started with Buzzz</h1>
              <h3>Enjoy A Risk-Free Merch business with no upfront costs and no stress.</h3>
              <div className="landing_section6_content_link">
                <Link href={routes.auth.signup.path}>
                  <a href={routes.auth.signup.path}>
                    <div className="landing_section6_content_link_con">
                      <span>Get started</span>
                      <Image src="/svg/arrow-right.svg" width={20} height={20} alt="arrow right" />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="landing_section6_login">
                <p>Already a user?</p>
                <Link href={routes.auth.login.path}>
                  <a href={routes.auth.login.path}>Log In here</a>
                </Link>
              </div>
            </div>
            <div className="landing_section6_image">
              <Image
                width={473}
                height={453}
                src="/svg/landing_section6.svg"
                alt="landing section 6"
              />
            </div>
          </div>
        </section>
      </div>
      <Cursor />
    </Fragment>
  );
};

export default Landing;
