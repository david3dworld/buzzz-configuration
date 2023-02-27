import React from 'react';

interface IProps {
  title?: string;
  img: string;
}

const Clothings = (props: IProps) => {
  const { title, img } = props;

  return (
    <div className="buzzz-clothings-card-container">
      <div className="img-con">
        <img src={img} alt="shirt" />
      </div>
      <div className="text-con pt-2">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default Clothings;
