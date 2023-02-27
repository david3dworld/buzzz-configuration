import Image from 'next/image';
import React from 'react';
import type { NextPage } from 'next';
import { Header, StartSharingCard } from '../components';
import { designPageData } from '../components/designData/designData';

const DesignPage: NextPage = () => {
  return (
    <>
      <Header title="Buzzz | Clothings" />
      <>
        <div className="app-container">
          <div className="app-container">
            <div className="men-clothings">
              <h4>Men Clothings</h4>
            </div>
            <div className="clothings-categories_design">
              <div className="grid-container">
                {designPageData.map((item) => (
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
    </>
  );
};

export default DesignPage;
