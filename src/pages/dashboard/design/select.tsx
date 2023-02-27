import React from 'react';
import Image from 'next/image';
import { DashboardHeader } from '../../../components';
import style from './select.module.css';
import { leftArrow, down } from '../../../svg/designSvg/index';
import SelectCard from '../../../components/design/selectCard/SelectCard';
import { selectCardData } from '../../../components/design/selectCard/data';
import { mobileInputSvg, select } from '../../../svg/walletSvg/index';

const products = () => {
  return (
    <div>
      <DashboardHeader title="Design" />
      <div className={style.selectContainer}>
        <div className={style.titleContainer}>
          <span className={style.arrow}>
            <Image src={leftArrow} alt="arrow" />
          </span>
          <h2 className={style.title}>Design your own merch</h2>
        </div>
        <div className={style.product_card_container}>
          <div className={style.productSelectWrapper}>
            <p className={style.subtitle}>Select a product or Brand</p>
            <div className={style.selectBoxContainer}>
              <div className={style.selectContainer}>
                <label htmlFor="product" className={style.label}>
                  Products
                </label>
                <select className={style.select} id="product">
                  <option value="T-shirts">T-shirts</option>
                </select>
                <span className={style.down}>
                  <Image src={down} alt="down" />
                </span>
                <span className={style.mobile_icon}>
                  <Image src={select} alt="down" />
                </span>
              </div>

              <div className={style.selectContainer}>
                <label htmlFor="brand" className={style.label}>
                  Brands
                </label>
                <select className={style.select} id="brand">
                  <option value="Jordan">Jordan</option>
                </select>
                <span className={style.down}>
                  <Image src={down} alt="down" />
                </span>
                <span className={style.mobile_icon}>
                  <Image src={mobileInputSvg} alt="down" />
                </span>
              </div>
            </div>
          </div>
          <div className={style.product_cards_section}>
            <div className={style.card_grid}>
              {selectCardData.map((item) => {
                return (
                  <SelectCard
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    star={item.review}
                    reviewText={item.reviewText}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default products;
