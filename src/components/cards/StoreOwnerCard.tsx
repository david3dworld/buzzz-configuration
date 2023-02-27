import React from 'react';
import { RatingStars } from '..';

interface IProps {
  borderColor?: string;
  background?: string;
}

const StoreOwnerCard = (props: IProps) => {
  const { borderColor, background } = props;

  return (
    <div
      style={{ borderColor, background }}
      className="buzzz-store-owner-card-con d-flex flex-column"
    >
      <div>
        <h3>Embroidered Champion Performance T-Shirt</h3>
      </div>
      <div className="my-3">
        <p>
          Great Light material and print blending smoothly into the shirt for that nice pop.
          Packaged nicely with a wrapping paper within the garment. Shirt size runs a size bigger.
          Check us out
          {' '}
        </p>
        <a href="/">www.gogetitofficial.com/shop.</a>
      </div>
      <div className="d-flex justify-content-between img-con">
        <div className="w-100">
          <img src="/images/store_owner_card.png" alt="" />
        </div>
        <div className="w-100">
          <img src="/images/store_owner_card.png" alt="" />
        </div>
      </div>

      <div className="d-flex justify-content-between store-details align-items-center gap-3">
        <h4>Hakeem’s Store</h4>
        <p className="ig">
          View on
          {' '}
          <a href="/">Instagram</a>
        </p>
      </div>

      <div className="rating-con d-flex mt-2 align-items-center">
        <p>453 Reviews</p>
        <RatingStars rating={Math.floor(Math.random() * 5)} />
      </div>
    </div>
  );
};

export default StoreOwnerCard;
