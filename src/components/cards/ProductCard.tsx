import React from 'react';
import { RatingStars } from '..';

interface IProps {
  rating: number;
  title: string;
  img: string;
  item?: any;
}

const ProductCard = (props: IProps) => {
  const { rating, title, img, item } = props;

  return (
    <div className="buzzz-product-card-container">
      <div className="img-con">
        <img src={img} alt="shirt" />

        <div className="overlay">
          <div className="text">
            <h4>Inspiration</h4>
            <p>Lorem imsum donor its t ahfhgh hehrha Lorem imsum</p>
            <div className="rating-con d-flex mt-2 align-items-center">
              <p>453 Reviews</p>
              <RatingStars rating={rating} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-con pt-2">
        <h4>{title}</h4>
        <div className="d-flex justify-content-between mt-2 product-card-content">
          <h6>₦{item?.price || 200}</h6>
          <p>Creator: DAVIDOEX76</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
