import React, { Fragment, useState } from 'react';
import { MobileDashboardSidebar, CartNumber } from '..';
import routes from '../../routes';

const MobileDashboardHeader = () => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <div className="mobile-dashboard-header">
        <div className="d-flex justify-content-between align-items-center px-3 px-md-4 my-3 header-content">
          <a href={routes.dashboard.myBuzz.path}>
            <img src="/svg/mobile_header_logo.svg" alt="logo" />
          </a>

          <div className="d-flex gap-4 align-items-center">
            <a href={routes.dashboard.cart.path}>
              <div className="d-flex gap-1 cart">
                <CartNumber />
                <span
                  style={{
                    margin: '0px 10px',
                  }}
                >
                  My cart
                </span>
              </div>
            </a>
            <button
              className="menu"
              onClick={() => {
                setShow(true);
              }}
              type="button"
            >
              <img src="/svg/dashboard_hamburger.svg" alt="menu" />
            </button>
          </div>
        </div>
      </div>
      <div style={{ height: '65px' }} className="d-lg-none" />
      <MobileDashboardSidebar
        handleClose={() => {
          setShow(false);
        }}
        show={show}
      />
    </Fragment>
  );
};

export default MobileDashboardHeader;
