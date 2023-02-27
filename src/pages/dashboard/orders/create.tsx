import React from 'react';
import Link from 'next/link';
import { DashboardHeader } from '../../../components';

const Index = () => {
  return (
    <>
      <DashboardHeader title="Dashboard" />
      <div className="buzz-create-order-container">
        <div className="title-con d-flex justify-content-between align-items-center mb-3">
          <h3>Orders</h3>
        </div>
        <div className="create-design">
          <div className="col-10 mx-auto text-center">
            <h4>Your product orders will appear here!</h4>
            <p>
              Once you’ve ordered a product, you can manage
              <br />
              the order here — meanwhile, pick a product,

              make an
              <br />
              order, and stay updated.
            </p>
            <div className="button-wrapper d-flex align-items-center gap-3 justify-content-center mt-6">
              <button className="d-flex align-items-center gap-2 curved-btn background" type="button">
                <Link href="/dashboard/design/design">
                  Start new order
                </Link>
              </button>
            </div>
            <div className="mt-5">
              <img src="/images/create-design.png" alt="icon" />
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Index;
