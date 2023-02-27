import Link from 'next/link';
import React from 'react';
import { Button, DashboardHeader, EmptyBox, ProductCard } from '../../components';
import Spinner from '../../components/shared/Spinner';
import routes from '../../routes';
import queries from '../../services/queries/product';

const Buzz = () => {
  const { data, isLoading } = queries.read();
  return (
    <div>
      <DashboardHeader title="Dashboard" />
      <div className="my-buzzz-con">
        <div className="d-md-flex d-block justify-content-center gap-3 my-buzzz-wrap">
          <div className=" col-sm-12 col-md-7 col-lg-8">
            <div className="card buzzz-dashboard-home">
              <div className="card-body d-flex px-3 px-sm-0 my-buzzz-card-con">
                <div className="my-buzzz-card-img-con">
                  <img src="../../images/dashboard_home.png" alt="Male" />
                </div>
                <div className=" mx-0 mx-sm-4 mt-5">
                  <h1>Create Designs Instantly</h1>
                  <p className="mt-4 mb-4">
                    Simply add your text and explore dozens
                    <br />
                    of customized layouts.
                  </p>

                  <div className="d-flex">
                    <div className="buzzz-dashboard-home-button mb-2">
                      <Link href={routes.dashboard.templates.path}>
                        <a href={routes.dashboard.templates.path}>
                          <Button title="Try it" className="home-button" />
                        </a>
                      </Link>
                    </div>

                    <div className="new">
                      <img src="../../images/home_new.png" alt="New!" />
                    </div>
                  </div>

                  <Link href={routes.dashboard.design.path}>
                    No thanks, I want to start from scratch
                  </Link>
                </div>
              </div>
            </div>

            <div className="card mt-3 mb-4 buzzz-dashboard-grid">
              <div className="card-body">
                <div className="app-container">
                  {isLoading && (
                    <div className="mt-5 mb-6">
                      <Spinner />
                    </div>
                  )}
                  {data?.items.length === 0 && (
                    <EmptyBox
                      src="/svg/empty_state.svg"
                      title="Marketplace is empty"
                      buttonTitle="Start Shopping"
                    />
                  )}
                  <div className="grid-container">
                    {data?.items?.map((item: any, index: number) => (
                      <Link href={routes.dashboard.design.preview.path(item.id)} key={index}>
                        <a href={routes.dashboard.design.preview.path(item.id)}>
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
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card buzzz-dashboard-home-side"
              style={{ background: 'rgba(255, 147, 68, 0.05)' }}
            >
              <div className="card-body">
                <div className="">
                  <h1>You can count on us for:</h1>

                  <div className="mt-5 d-flex">
                    <div className="mt-3 d-flex">
                      <div>
                        <img src="../../svg/time.svg" alt="time" />
                      </div>
                      <div className="mx-2">
                        <h2>Fast Turnaround Within Days</h2>
                        <p className="mt-2">
                          Your order gets to you within
                          <br />
                          3-7 working days via DHL or
                          <br />
                          our very own Buzzz Direct.
                        </p>
                      </div>
                    </div>

                    <div className="side-vertical" />
                  </div>

                  <div className="d-flex comp">
                    <div className="mt-3 d-flex">
                      <div>
                        <img src="../../svg/shield.svg" alt="shield" />
                      </div>
                      <div className="mx-2">
                        <h2>100% Top Quality</h2>
                        <p className="mt-2">
                          Only the finest materials,
                          <br />
                          machines and people will be
                          <br />
                          involved in fulfilling your
                          <br />
                          order.
                        </p>
                      </div>
                    </div>

                    <div className="side-vertical" />
                  </div>

                  <div className="mb-3 d-flex comp">
                    <div>
                      <img src="../../svg/wallet.svg" alt="wallet" />
                    </div>
                    <div className="mx-2">
                      <h2>Affordable Services</h2>
                      <p className="mt-2">
                        All products are adequately
                        <br />
                        priced to ensure you get value
                        <br />
                        for your money at all times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buzz;
