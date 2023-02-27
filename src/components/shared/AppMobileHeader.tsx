import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import routes from '../../routes';
import { mobileMiddleLinksArray } from '../../utils/static';
import config from '../../config';
import { useLocalStorage } from '../../hooks';

const AppMobileHeader = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isAuthenticated] = useLocalStorage(config.isAuthenticated);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <div className="buzzz-app-mobile-header d-block d-lg-none">
      <div className="buzzz-app-mobile-header-con d-flex justify-content-between align-items-center overflow-hidden">
        <motion.div layoutId="app_logo">
          <Link href={routes.home.path}>
            <a href={routes.home.path}>
              <img src="/svg/logo.svg" alt="logo" />
            </a>
          </Link>
        </motion.div>

        <button
          onClick={handleToggle}
          className={`buzzz-mobile-hamburger ${open ? 'active' : ''}`}
          type="button"
        >
          <div className="top" />
          <div className="meat" />
          <div className="bottom" />
        </button>
      </div>

      <div className={`buzzz-mobile-hamburger-menu ${open ? 'active' : ''}`}>
        {mobileMiddleLinksArray.map((item) => (
          <Link key={item.id} href={item.route}>
            <a className="curved-btn naked" href={item.route}>
              {item.link}
            </a>
          </Link>
        ))}
        <div className="login-link d-flex align-items-center">
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
  );
};

export default AppMobileHeader;
