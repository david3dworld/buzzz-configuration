import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { DashboardSidebar, MobileDashboardHeader } from '../../components';
import routes from '../../routes';
import Settings from './Settings';
import Design from './Design';

interface IProps {
  children: ReactNode;
}

const { settings, design } = routes.dashboard;

const settingsRoute = [
  settings.account.path,
  settings.security.path,
  settings.billing.path,
  settings.notification.path,
  settings.shipping.path,
];

const designRoutes = [design.create.path];

const Main = (props: IProps) => {
  const { children } = props;
  return (
    <div className="buzzz-dashboard-container">
      <MobileDashboardHeader />
      <div className="sidebar-container">
        <DashboardSidebar />
      </div>
      <div className="content-conteiner">{children}</div>
    </div>
  );
};

const Dashboard = (props: IProps) => {
  const { children } = props;
  const router = useRouter();

  if (settingsRoute.includes(router.pathname)) {
    return (
      <Main>
        <Settings>{children}</Settings>
      </Main>
    );
  }

  if (designRoutes.includes(router.pathname)) {
    return (
      <Main>
        <Design>{children}</Design>
      </Main>
    );
  }

  return <Main>{children}</Main>;
};

export default Dashboard;
