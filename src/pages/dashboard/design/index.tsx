import React from 'react';
import Link from 'next/link';
import { DashboardHeader } from '../../../components';

const Index = () => {
  return (
    <>
      <DashboardHeader title="Dashboard" />
      <div className="dashboard-design-container">
        <div className="dashboard-design">
          <div className="design_merch_text_wrapper mx-auto text-center">
            <h4>Design your first Merch</h4>
            <p className="design_merch_text">
              Creating your first product is easy peasy. Launch your first product and start making
              sales today!
            </p>
            <div className="button-wrapper design-button-wrapper d-flex align-items-center gap-3 justify-content-center">
              <button className="d-flex align-items-center gap-2 curved-btn naked" type="button">
                <img src="/svg/dashboard_header1.svg" alt="icon" />
                <Link href="/dashboard/design/design">Choose from Templates</Link>
              </button>
              <button
                className="d-flex align-items-center gap-2 curved-btn background"
                type="button"
              >
                <img src="/svg/dashboard_header2.svg" alt="icon" />
                <Link href="/dashboard/design/design">Create Design</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="empty-box">
          <div className="text-center">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <span className="d-none">p</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Index;
