import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AppRoutes from '../../routes';
import { useActiveRoute } from '../../hooks';
import { CartNumber } from '../shared';

interface IProps {
  title: string;
  routes?: { id: number; route: string; name: string }[];
  layoutId?: string;
}

const DashboardHeader = (props: IProps) => {
  const { title, routes, layoutId } = props;
  const [isActive] = useActiveRoute();

  return (
    <div className="buzzz-dashboard-header-container bg-white mb-4 ">
      <div className="header-content-wrapper">
        <h3>{title}</h3>
        <div className="d-flex align-items-center justify-content-between gap-3 header-con">
          <Link href={AppRoutes.dashboard.cart.path}>
            <button
              className="d-flex align-items-center gap-2 curved-btn naked cart_link"
              type="button"
            >
              <CartNumber />
              <a href={AppRoutes.cart.path}>My Cart</a>
            </button>
          </Link>
          <Link href={AppRoutes.dashboard.templates.path}>
            <button className="d-flex align-items-center gap-2 curved-btn naked" type="button">
              <img src="/svg/dashboard_header1.svg" alt="icon" />
              Templates
            </button>
          </Link>
          <button className="d-flex align-items-center gap-2 mr-4 curved-btn" type="button">
            <img src="/svg/dashboard_header2.svg" alt="icon" />
            Create Design
          </button>
        </div>
      </div>
      <div className="routes-container">
        <div className="d-flex gap-4">
          {routes?.map((item) => (
            <div key={item.id} className="link">
              <Link key={item.id} href={item.route}>
                <a href={item.route} className={`${isActive(item.route)}`}>
                  {item.name}
                </a>
              </Link>

              {isActive(item.route) !== '' && (
                <motion.div layoutId={`dashboard-header-${layoutId}`} className="border-line" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
