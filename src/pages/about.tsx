/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import type { NextPage } from 'next';
// import Link from 'next/link';
import { Header } from '../components';

const About: NextPage = () => {
  return (
    <>
      <Header title="Buzzz | About" />
      <div className="buzzz_about_container">
        <section className="about1">
          <div className="app-container">
            <h1>
              Hi, we are <span>Buzz</span>
            </h1>
          </div>
        </section>
        <section className="about2">
          <div className="app-container">
            <div className="about2_wrap">
              <div className="about2_content">
                <h1>A creator economy fueled <br /> by your CLOUT</h1>
                <p>
                  With Buzzz, creators, influencers, and
                  fashion brands can enjoy a risk-free Merch business,
                  where they don’t have to pay for any stock, Zero upfront costs, a
                  nd Zero risks.
                </p>
                <p className="mt-4">
                  We also cater to those who do not have a built-in
                  audience: The fun part is that you don’t need to own
                  a store
                  to get paid. If you choose to make the design public,
                  you can earn when someone else purchases his merch.
                </p>
              </div>
              <div className="about2_img">
                <img src="/images/design32.png" alt="design" />
              </div>
            </div>
          </div>
        </section>
        {/* <section className="about3">
          <div className="app-container">
            <div className="about3_wrap">
              <div className="about3_list">
                <h1>200K+</h1>
                <p>Amazing Customers</p>
              </div>

              <div className="about3_list">
                <h1>$50K+</h1>
                <p>invested in printing equipments </p>
              </div>

              <div className="about3_list">
                <h1>20+</h1>
                <p>Team Members</p>
              </div>

              <div className="about3_list">
                <h1>10M</h1>
                <p>items trusted to deliver</p>
              </div>
            </div>
          </div>
        </section>
        <section className="about4">
          <div className="about4_card">
            <div className="app-container">
              <div className="about4_img">
                <img src="/images/design3.png" alt="design" />
              </div>
              <div className="about4_content">
                <h1>We’re here for you and your brand.</h1>
                <p>
                  Buzzz is an on-demand printing and fulfillment company that helps people turn
                  their ideas into brands and products. Whether you wish to create your own online
                  brand or gift someone a personalized t-shirt, we can help you get it done.
                  Whenever someone—you or your customer—makes a purchase, we&apos;ll automatically
                  receive the order, fulfill, and ship it.
                </p>
                <Link href="/">
                  <a href="/" className="curved-btn outline">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="about4_card">
            <div className="app-container">
              <div className="about4_img">
                <img src="/images/design3.png" alt="design" />
              </div>
              <div className="about4_content">
                <h1>Always changing for the better.</h1>
                <p>
                  We see opportunities to grow and achieve success sustainably. When orders are
                  printed on demand, less leftover inventory winds up in landfills. It&apos;s our
                  goal to make on-demand manufacturing the norm for a planet with finite resources
                  and people with infinite ideas.
                </p>
                <Link href="/">
                  <a href="/" className="curved-btn outline">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="about4_card">
            <div className="app-container">
              <div className="about4_img">
                <img src="/images/design3.png" alt="design" />
              </div>
              <div className="about4_content">
                <h1>Helping you grow is what keeps us going.</h1>
                <p>
                  You trust us with your reputation, so we deliver quality you can rely on. We’re
                  here to turn your ideas into products that make a lasting, meaningful impression.
                </p>
                <Link href="/">
                  <a href="/" className="curved-btn outline">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section> */}
        <section className="about7">
          <div className="app-container">
            <div className="about7_head">
              <h1>Our core values</h1>
              <p>
                At Buzzz, we share a common set of values that reminds us every day to be the best
                version of ourselves, for us and for our customers.
              </p>
            </div>
            <div className="about7_body">
              <div className="about7_card">
                <div className="about7_img" />
                <div className="about7_content">
                  <h2>We believe in Collaboration over  competition</h2>
                </div>
              </div>

              <div className="about7_card">
                <div className="about7_img" />
                <div className="about7_content">
                  <h2>We believe in building simple but effectual products.</h2>
                </div>
              </div>

              <div className="about7_card">
                <div className="about7_img" />
                <div className="about7_content">
                  <h2>We believe in Collaboration over  competition</h2>
                </div>
              </div>

              <div className="about7_card">
                <div className="about7_img" />
                <div className="about7_content">
                  <h2>Less Words - More Illustrations</h2>
                </div>
              </div>

              <div className="about7_card">
                <div className="about7_img" />
                <div className="about7_content">
                  <h2>We believe in decentralization</h2>
                </div>
              </div>

              <div className="about7_card">
                <div className="about7_img" />
                <div className="about7_content">
                  <h2>We always put our community first.</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="about5">
          <div className="about5_img">
            <div className="about5_img_wrap">
              <Iframe
                url="http://www.youtube.com/embed/xDMP3i36naA"
                width="1200px"
                height="600"
                id="myId"
                className="iframe"
                position="relative"
              />
            </div>
          </div>
        </section> */}
        <section className="about5 p-4">
          <div className="about5_img">
            <div className="about5_img_wrap">
              <img src="/images/video-iframe.png" alt="about" className="img-fluid" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
