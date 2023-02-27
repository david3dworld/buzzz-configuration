import React from 'react';
import { Switch } from '../form control';

interface IProps {
  title?: string;
  details?: string;
  checked: boolean;
  handleChange?: () => void;
}

const SettingsSwitchCard = (props: IProps) => {
  const { title, details, checked, handleChange } = props;

  return (
    <div className="buzzz-settings-switch-card public-profile">
      <h4>{title}</h4>
      <p>{details}</p>
      <Switch
        checked={checked}
        className="react-switch-label"
        id="react-switch-new"
        onColor="#E4EBF6"
        type="checkbox"
        htmlFor="react-switch-button"
        handleToggle={handleChange}
        // handleToggle={() => setValue(!value)}
      />
    </div>
  );
};

export default SettingsSwitchCard;
