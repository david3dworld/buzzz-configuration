import React from 'react';
import { ProductsCardDataType } from '../../utils/static';

interface ProdProps {
  data: ProductsCardDataType[0];
}

const ProductCard = (props: ProdProps) => {
  const { data } = props;
  return (
    <div className="section4-card">
      <div className="section4-img">
        <img src={data.img} alt="products" />
      </div>
      <h1 className="pt-4 pb-1">{data.content}</h1>
      <p className="pb-4">
        <span>by </span>
        {data.name}
      </p>
      <h3>
        <span>From </span>
        {data.price}
      </h3>
    </div>
  );
};

export default ProductCard;
