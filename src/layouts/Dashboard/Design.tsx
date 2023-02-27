import React, { ReactNode } from 'react';
import { DashboardHeader, ShirtSideBar, CheckoutDesign } from '../../components';

interface IProps {
  children: ReactNode;
}

const Design = (props: IProps) => {
  const { children } = props;

  return (
    <div>
      <DashboardHeader title="Design" />
      <div className="design-temp-component bg-white">
        <div className="d-flex">
          <div className="flex-fill">{children}</div>
          <div><ShirtSideBar /></div>
        </div>
        <div><CheckoutDesign /></div>
      </div>
    </div>
  );
};

export default Design;
