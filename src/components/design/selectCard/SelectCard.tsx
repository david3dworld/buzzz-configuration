import React from 'react';
import Image from 'next/image';
import style from './selectCard.module.css';

type dataTypes = {
  img: any;
  title: string;
  star: any;
  reviewText: string;
};

const SelectCard = ({ img, title, star, reviewText }: dataTypes) => {
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <Image src={img} alt="card_image" />
      </div>
      <div className={style.cardBody}>
        <p className={style.cardText}>{title}</p>
        <div className={style.cardReview}>
          <p className={style.reviewText}>{reviewText}</p>
          <Image src={star} alt="review" height={20} width={30} />
        </div>
      </div>
    </div>
  );
};

export default SelectCard;
