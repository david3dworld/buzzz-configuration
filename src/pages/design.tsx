/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Accordion } from 'react-bootstrap';
import { ContactUsCard, Header } from '../components';
import { designAccordionArray, designPageArray } from '../utils/static';
import routes from '../routes';

const Design: NextPage = () => {
  return (
    <>
      <Header title="Buzzz | Design" />
      <div className="buzzz_design_container">
        <section className="design_section1">
          <div className="design_section1_img1">
            <img src="/images/design1.png" alt="design1" />
          </div>
          <div className="design_section1_img2">
            <img src="/images/design2.png" alt="design2" />
          </div>
          <div className="app-container">
            <h1>Design your own shirt</h1>
            <h3>Design shirts for your product catalog or personal wardrobe</h3>
            <div className="design_section1_btns">
              <Link href={routes.ondemand.path}>
                <a href={routes.ondemand.path} className="curved-btn">
                  Get Started
                </a>
              </Link>

              <Link href={routes.ondemand.path}>
                <a href={routes.ondemand.path} className="curved-btn outline">
                  Choose Products
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="design_section2">
          <div className="app-container">
            <h1>
              How <span>it</span> works
            </h1>
            <div className="design_section2_content">
              <div className="design_section2_card">
                <img src="/images/works1.png" alt="works1" className="img-fluid" />
                <h2>High Quality Shirts</h2>
                <h3>Order custom high-quality shirts that’ll last wear after wear</h3>
              </div>
              <div className="design_section2_card">
                <img src="/images/works2.png" alt="works1" />
                <h2>All-time bestsellers</h2>
                <h3>Launch your own clothing line with the all-time bestsellers</h3>
              </div>
              <div className="design_section2_card">
                <img src="/images/works3.png" alt="works1" />
                <h2>Accurate Delivery</h2>
                <h3>Estimated delivery to Nigeria 🇳🇬 is from March 11 to 21</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="design_section3">
          <div className="app-container">
            <h1>
              How to create custo<span>m</span> products
            </h1>
            <div className="design_section3_cards">
              {designPageArray.map((item) => (
                <ContactUsCard
                  key={item.id}
                  details={item.details}
                  title={item.title}
                  link={item.link}
                  bg={item.bg}
                  bgUrl={item.bgUrl}
                  button={item.button}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="design_section4">
          <div className="app-container">
            <div className="design_section4_head">
              <h1>Turn blank products into iconic gems</h1>
              <h2>You’ve got the ideas, we’ve got the tools</h2>
            </div>
            <div className="design_section4_body">
              <div className="design_section4_img">
                <img src="/images/design3.png" alt="design3" className="img-fluid" />
              </div>
              <div className="design_section4_content">
                <div className="design_section4_list">
                  <div className="design_section4_icon">
                    <img src="/svg/design2.svg" alt="icon1" />
                  </div>
                  <div className="design_section4_right">
                    <h3>Create products with the intuitive Design Maker.</h3>
                    <p>Make stunning designs with beginner-friendly design tools and assets</p>
                  </div>
                </div>

                <div className="design_section4_list">
                  <div className="design_section4_icon">
                    <img src="/svg/design3.svg" alt="icon1" />
                  </div>
                  <div className="design_section4_right">
                    <h3>Try out multiple customization techniques.</h3>
                    <p>
                      Explore your customization opportunities with fulfillment techniques like
                      printing, embroidery, and more.
                    </p>
                  </div>
                </div>

                <div className="design_section4_list">
                  <div className="design_section4_icon">
                    <img src="/svg/design4.svg" alt="icon1" />
                  </div>
                  <div className="design_section4_right">
                    <h3>Give your product a test drive</h3>
                    <p>
                      Order select product samples with a discount to make sure you get it just
                      right.
                    </p>
                  </div>
                </div>

                <div className="design_section4_list">
                  <div className="design_section4_icon">
                    <img src="/svg/design1.svg" alt="icon1" />
                  </div>
                  <div className="design_section4_right">
                    <h3>Turn unique products into profit</h3>
                    <p>
                      Share your creation with the rest of the world by selling custom products
                      online.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="design_section5">
          <div className="app-container">
            <div className="design_section5_wrap">
              <div className="design_section5_img">
                <h1>Why Customize Products with Buzz</h1>
                <img src="/images/design4.png" alt="design4" />
              </div>
              <div className="design_section5_content">
                <div className="design_section5_list">
                  <h2>No Minimums</h2>
                  <p>
                    Save money and stop over-ordering product stock by having your products made
                    only when someone buys them.
                  </p>
                </div>

                <div className="design_section5_list">
                  <h2>Top-shelf quality</h2>
                  <p>Offer your customers the best custom products in your niche.</p>
                </div>

                <div className="design_section5_list">
                  <h2>Worldwide shipping</h2>
                  <p>Reach customers anywhere in the world.</p>
                </div>

                <div className="design_section5_list">
                  <h2>Bulk order discounts</h2>
                  <p>
                    Order custom products in bulk for events and peak shopping seasons and save up
                    to 30%
                  </p>
                </div>

                <div className="design_section5_list">
                  <h2>24/7 customer support</h2>
                  <p>Have your questions answered on your own schedule.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="design_section6">
          <div className="app-container">
            <h1>Get inspired by these custom product designs!</h1>
            <div className="design_section6_cards">
              <div className="design_section6_card">
                <div className="design_section6_img" />
                <h2>Custom clothing</h2>
                <p>Design a custom for your brand?</p>
              </div>

              <div className="design_section6_card">
                <div className="design_section6_img" />
                <h2>Custom clothing</h2>
                <p>Design a custom for your brand?</p>
              </div>

              <div className="design_section6_card">
                <div className="design_section6_img" />
                <h2>Custom clothing</h2>
                <p>Design a custom for your brand?</p>
              </div>
            </div>
          </div>
        </section>
        <section className="design_section7">
          <div className="app-container">
            <h1>Frequently Asked Questions</h1>
            <div className="design_section_accordion_wraper">
              <Accordion>
                {designAccordionArray.map((value, i) => (
                  <Accordion.Item eventKey={i.toString()} key={i}>
                    <Accordion.Header>{value.header}</Accordion.Header>
                    <Accordion.Body>{value.body}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Design;
