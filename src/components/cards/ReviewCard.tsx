import React from 'react';
import { CarouselCardDataType } from '../../utils/static';

interface CarouselProps {
  data: CarouselCardDataType[0];
}

const CarouselCard = (props: CarouselProps) => {
  const { data } = props;
  return (
    <div className="section5-card py-3 px-5">
      <img src="/svg/heart.svg" className="py-4" alt="" />
      <p>{data.content}</p>
      <div className="section5-user d-flex align-items-center gap-3 mt-2 mb-4">
        <div className="section5-user-img">
          {/* <img src="/images/section4.png" alt="" /> */}
        </div>
        <div className="section5-user-info">
          <h1 className="pb-1">{data.name}</h1>
          <h2>{data.web}</h2>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
