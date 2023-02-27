import React, { Fragment, useState } from 'react';
import { Header, ProductCard, StoreOwnerCard } from '../../components';
import { productNavigationOptionsArray } from '../../utils/static';

const Product = () => {
  const [activeNav, setActiveNav] = useState(productNavigationOptionsArray[0].value);

  return (
    <Fragment>
      <Header title="Buzzz | Products" />
      <div className="buzzz-prduct-page-container py-4">
        <div className="app-container">
          <div className="title-con">
            <h3 className="text-center">Custom printed & embroidered products.</h3>

            <h5 className="text-center mt-3">
              Order custom products for yourself or sell them online under your own brand
            </h5>
          </div>
        </div>

        <div className="hero-con">
          <div className="app-container">
            <div className="prduct-section  justify-content-between align-items-center">
              <div className="text-content">
                <h4>Coming in hot - newest spring arrivals</h4>

                <button type="button" className="curved-btn ">
                  Explore now
                </button>
              </div>

              <div className="img-con">
                <img src="/images/product_hero.png" alt="product" />
              </div>
            </div>
          </div>
        </div>

        <div className="app-container">
          <div className="d-flex justify-content-center">
            <div className="navigation d-flex justify-content-between">
              {productNavigationOptionsArray.map((option) => (
                <button
                  onClick={() => {
                    setActiveNav(option.value);
                  }}
                  key={option.id}
                  type="button"
                  className={activeNav === option.value ? 'curved-btn naked active' : 'curved-btn'}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="app-container">
          <div className="grid-container">
            {new Array(9).fill(0).map((_, index) => (
              <ProductCard
                key={index}
                rating={Math.floor(Math.random() * 6)}
                title="Unisex Staple T-Shirt | Bella + Canvas 3001"
                img="/images/product_shirt.png"
              />
            ))}
          </div>
        </div>

        <div className="app-container">
          <div className="store-owners-con">
            <div className="title">
              <h3 className="text-center">Store owners who sell these products</h3>
              <p className="text-center">
                lorem impsum donor sit a emger lorem impsum donor sit a emger
              </p>
            </div>

            <div className="mt-3 py-3 cards-con w-100">
              <StoreOwnerCard />
              <StoreOwnerCard borderColor="#FF5FA0" background="#FBF7FF" />
              <StoreOwnerCard borderColor="#00D791" background="#F3FDFA" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
