import React from 'react';
import Link from 'next/link';
import routes from '../../routes';
import { ProductCard } from '../cards';
import queries from '../../services/queries/product';

const ProductList = () => {
  const { data } = queries.read();
  return (
    <div className="buzzz-prduct-page-container">
      <div className="grid-container">
        {data?.items?.map((item: any, index: number) => (
          <Link href={routes.preview.path(item.id)} key={index}>
            <a href={routes.preview.path(item.id)}>
              <ProductCard
                key={index}
                item={item}
                rating={Math.floor(Math.random() * 6)}
                title={item.name}
                img="/images/product_shirt.png"
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
