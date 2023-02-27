import React from 'react';

interface IProps {
  rating: number
}

const RatingStars = (props: IProps) => {
  const { rating } = props;

  return (
    <div className="d-flex justify-content-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <img
          key={star}
          style={{ maxWidth: '17px', maxHeight: '15px' }}
          src={rating >= star ? '/svg/full_star.svg' : '/svg/empty_star.svg'}
          alt="star"
        />
      ))}
    </div>
  );
};

export default RatingStars;
