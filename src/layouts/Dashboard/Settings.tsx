import React, { ReactNode } from 'react';
import { DashboardHeader } from '../../components';
import { settingsRouteArray } from '../../utils/static';

interface IProps {
  children: ReactNode;
}

const Settings = (props: IProps) => {
  const { children } = props;
  return (
    <div>
      <DashboardHeader title="Settings" routes={settingsRouteArray} layoutId="settings-layout" />
      <div>{children}</div>
    </div>
  );
};

export default Settings;
