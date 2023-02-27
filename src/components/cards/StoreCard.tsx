import Image from 'next/image';
import React from 'react';

interface IProps {
  title?: string;
  img: any;
  price?: string;
}

const StoreCard = ({ title, img, price }: IProps) => {
  return (
    <div className="buzzz-product-card-container">
      <div className="img-con">
        <Image src={img} alt="shirt" />
      </div>
      <div className="text-con pt-2">
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default StoreCard;
