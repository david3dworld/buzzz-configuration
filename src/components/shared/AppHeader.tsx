import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import config from '../../config';
import { useActiveRoute, useLocalStorage } from '../../hooks';
import routes from '../../routes';
import { middleLinksArray } from '../../utils/static';

const AppHeader = () => {
  const [isActive] = useActiveRoute();
  const [isAuthenticated] = useLocalStorage(config.isAuthenticated);
  return (
    <div className="buzzz-app-header-con py-4 d-none d-lg-block">
      <div className="app-container">
        <div className="d-flex justify-content-between align-items-center">
          <motion.div layoutId="app_logo">
            <Link href={routes.home.path}>
              <a href={routes.home.path}>
                <img src="/svg/logo.svg" alt="logo" />
              </a>
            </Link>
          </motion.div>

          <div className="middle-links d-flex  align-items-center">
            {middleLinksArray.map((item) => (
              <Link key={item.id} href={item.route}>
                <a
                  className={`curved-btn naked ${
                    isActive(item.route) === 'active' && 'links_active'
                  }`}
                  href={item.route}
                >
                  {item.link}
                </a>
              </Link>
            ))}
          </div>

          <div className="login-link d-flex  align-items-center">
            <Link href={routes.cart.path}>
              <button
                className="d-flex align-items-center gap-2 curved-btn naked cart_link"
                type="button"
              >
                <div className="cart_number">
                  <img src="/svg/shopping-cart.svg" alt="icon" />
                </div>
                <a href={routes.cart.path}>My Cart</a>
              </button>
            </Link>

            <Link href={routes.ondemand.path}>
              <a className="curved-btn" href={routes.ondemand.path}>
                Design now
              </a>
            </Link>

            {!!isAuthenticated === false ? (
              <Link href={routes.auth.login.path}>
                <a className="curved-btn naked" href={routes.auth.login.path}>
                  Login
                </a>
              </Link>
            ) : (
              <Link href={routes.dashboard.home.path}>
                <a className="curved-btn naked" href={routes.dashboard.home.path}>
                  Dashboard
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
