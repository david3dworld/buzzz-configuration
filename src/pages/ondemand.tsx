import Image from 'next/image';
import React from 'react';
import type { NextPage } from 'next';
import { BusinessHero, Header, StartSharingCard } from '../components';
import { onDemanData } from '../components/designData/designData';

const Ondemand: NextPage = () => {
  return (
    <>
      <Header title="Buzzz | Design" />
      <div className="app-container">
        <BusinessHero
          title="Design and Sell your Merch!"
          body="Design merchs for your product catalog or personal wardrobe"
          buttonText="Get Started"
          isIcon={false}
        />
        <div className="app-container" id="ondemand_product">
          <div className="clothings-categories">
            <div className="grid-container">
              {onDemanData.map((item) => (
                <div key={item.id} className="cloth-card">
                  <Image src={item.img} alt={item.title} />
                  <p className="cloth_title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 sharingCard">
        <StartSharingCard />
      </div>
    </>
  );
};

export default Ondemand;
