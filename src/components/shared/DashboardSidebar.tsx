import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { dashboardLinksArray, dashboardSubRoutesArray } from '../../utils/static';
import { useActiveRoute } from '../../hooks';
import routes from '../../routes';
import { SidebarAccordion } from '..';
import queries from '../../services/queries/users';

const DashboardSidebar = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data } = queries.readOne();
  const [isActive] = useActiveRoute();
  const [activeId, setActiveId] = useState(0);

  const handleClick = (id: number) => {
    if (id === activeId) {
      setActiveId(0);
    } else {
      setActiveId(id);
    }
  };

  const handleLogout = () => {
    queryClient.clear();
    localStorage.clear();
    router.push(routes.auth.login.path);
  };

  return (
    <div className="buzzz-dashboard-sidebar-container bg-white scrollbar d-flex flex-column gap-4 justify-content-between">
      <div className="">
        <div className="logo-con">
          <Link href="/">
            <a href="/">
              <img src="/svg/dashboard-logo.svg" alt="logo" />
            </a>
          </Link>
        </div>
        <div className="dashboard-links-con">
          <div className={`link  ${isActive(routes.dashboard.myBuzz.path)}`}>
            <Link href={routes.dashboard.myBuzz.path}>
              <a className="w-100" href={routes.dashboard.myBuzz.path}>
                <div className=" d-flex align-items-center ">
                  <img src="/svg/my-buzzz-logo.svg" alt="my-buzzz" />
                  <p className="flex-fill">My Buzzz</p>
                </div>
              </a>
            </Link>
          </div>
          {dashboardLinksArray.map((item) => (
            <div className={`link d-flex align-items-center ${isActive(item.route)}`} key={item.id}>
              <Link href={item.route}>
                <a className="w-100" href={item.route}>
                  <div className=" d-flex align-items-center">
                    <span className="d-flex align-items-center">{item.icon()}</span>
                    <p>{item.name}</p>
                  </div>
                </a>
              </Link>
              {isActive(item.route) !== '' && (
                <motion.div layoutId="buzzz-sidebar-animation" className="motion-bg" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4">
          {dashboardSubRoutesArray.map((item) => (
            <SidebarAccordion
              isOpen={activeId === item.id}
              key={item.id}
              item={item}
              handleClick={() => {
                handleClick(item.id);
              }}
            />
          ))}

          {/* <SidebarAccordion /> */}
        </div>
      </div>

      <div className="profile-container ">
        <div className="profile d-flex w-100 justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <div className="img-con">
              <img src="/images/sidenav_profile.png" className="w-100" alt="profile" />
            </div>
            <div className="d-flex flex-column flex-fill">
              <h4>{data?.name}</h4>
              <p>Content Curator</p>
            </div>
          </div>
          <div className="action">
            <button type="button" className="btn">
              <img src="/svg/sidenav_actions.svg" alt="action" />
            </button>
          </div>
        </div>
        <div className="logout-btn-con d-flex justify-content-center mt-3">
          <button
            className="d-flex align-items-center gap-3 btn"
            type="button"
            onClick={handleLogout}
          >
            <img src="/svg/logout.svg" alt="logout" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
