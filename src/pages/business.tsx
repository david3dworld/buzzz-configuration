import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BusinessHero, Header } from '../components';
import { businessArray } from '../utils/static';

const Business: NextPage = () => {
  return (
    <>
      <Header title="Buzzz | Design" />
      <div className="app-container">
        <BusinessHero
          title="Fast and inventory-free product launches"
          body="Sell premium quality apparel and custom items on demand."
          buttonText="Let's connect"
          isIcon
        />
        <div className="business_section1">
          <h1>Get what other print-on-demand companies won’t offer you</h1>
          <h3>We’re a full-service fulfillment partner that’s 100% invested in your growth</h3>
          <div className="business_section1_cards">
            <div className="business_section1_card">
              <h4>Industry Trends</h4>
              <h5>Valuable retail and ecommerce insight</h5>
            </div>
            <div className="business_section1_card">
              <h4>Branding Options</h4>
              <h5>Packaging, pack-ins, custom packaging slips, and more</h5>
            </div>
            <div className="business_section1_card">
              <h4>Visual assets</h4>
              <h5>Help with your creative materials—photos, designs, videos</h5>
            </div>
          </div>
        </div>
        <div className="business_section2">
          <h1>Your needs are our specialties</h1>
          <div className="business_section2_cards">
            {businessArray.map((value, i) => (
              <div className="business_section2_card" key={i}>
                <div className="business_section2_content">
                  <h3>{value.title}</h3>
                  <h4>{value.desc}</h4>
                  <Link href="/">
                    <a href="/" className="curved-btn outline">
                      Learn More
                    </a>
                  </Link>
                </div>
                <div className="business_section2_img">
                  <Image
                    src="/images/business_img1.png"
                    width={302}
                    height={384}
                    alt="business img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;
