import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { EmptyBox, Header, ProductCard, StartDesigning } from '../../components';
import Spinner from '../../components/shared/Spinner';
import routes from '../../routes';
import queries from '../../services/queries/product';
import { marketplaceNavigationOptionsArray } from '../../utils/static';

const Marketplace = () => {
  const [activeNav, setActiveNav] = useState(marketplaceNavigationOptionsArray[0].value);
  const { data, isLoading } = queries.read();

  return (
    <Fragment>
      <Header title="Buzzz | Marketplace" />
      <div className="buzzz-prduct-page-container mb-4 pb-4">
        <div className="app-container marketplace">
          <div className="title-con">
            <h3 className="text-center">Beyond Just Merch</h3>

            <h5 className="text-center mt-3">
              Get your hands on lifestyle Merch from your favourite people
            </h5>
          </div>
          <div className="marketplace-images">
            <img src="../../../images/marketplace1.png" alt="marketplace" className="market1" />
            <img src="../../../images/marketplace2.png" alt="marketplace" className="market2" />
            <img src="../../../images/marketplace3.png" alt="marketplace" className="market3" />
            <img src="../../../images/marketplace4.png" alt="marketplace" className="market4" />
          </div>
        </div>

        <div className="app-container">
          <div className="d-flex justify-content-center mt-5 mb-4">
            <div className="navigation d-flex justify-content-between">
              {marketplaceNavigationOptionsArray.map((option) => (
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
          {isLoading && (
            <div className="mt-5 mb-6 ">
              <Spinner />
            </div>
          )}
          <div className="grid-container">
            {data?.items.length === 0 && (
              <EmptyBox
                src="/svg/empty_state.svg"
                title="Cart is empty"
                buttonTitle="Start Shopping"
              />
            )}
          </div>
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

        <StartDesigning />
      </div>
    </Fragment>
  );
};

export default Marketplace;
