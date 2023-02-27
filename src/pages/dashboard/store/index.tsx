import Image from 'next/image';
import React from 'react';
import { DashboardHeader, StoreCard } from '../../../components';
import { storeIcons, storeData } from '../../../components/storeData/index';

const store = () => {
  return (
    <div>
      <DashboardHeader title="Dashboard" />
      <div className="container buzzz-dashboard-store pb-3">
        <div className="card">
          <div className="card-body">
            <div className="text-center">
              <div className="row">
                <div className="col-6" />
                <div className="col-sm-6 ">
                  <div className="d-flex user_img_share justify-content-between align-items-center">
                    <img
                      src="../../images/profile-pic.png"
                      alt="profile_pic"
                      className="profile-pic"
                    />
                    <div className="d-flex justify-content-center btn_wrapper align-items-center mr-auto">
                      <button
                        className="d-flex align-items-center gap-2 curved-btn store-action"
                        type="button"
                      >
                        <img src="/svg/share.svg" alt="share" />
                        share
                      </button>
                      <span className="mx-4 vl" />
                      <button
                        className="d-flex align-items-center gap-2 curved-btn store-action"
                        type="button"
                      >
                        <img src="/svg/copy.svg" alt="copy" />
                        copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="title">Check out Hakeem’s Merch</h1>
              <p className="content">
                Lorem Impsum donor sit amet Lorem Impsum donor sit amet Lorem Impsum donor sit amet
              </p>
              <div className="social_icons_wrapper">
                <div className="social">
                  {storeIcons.map((item) => {
                    return <Image src={item.img} key={item.id} alt="social" />;
                  })}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <div className="store_button">
                <button className="curved-btn" type="button">
                  subscribe
                </button>
              </div>
            </div>

            <div className="card   mt-3 mb-4 buzzz-dashboard-grid">
              <div className="grid-container">
                {storeData.map((item) => (
                  <StoreCard key={item.id} price={item.price} title={item.title} img={item.img} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default store;
