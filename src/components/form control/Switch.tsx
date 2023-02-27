import React from 'react';

interface SwitchBtn {
  checked: boolean;
  handleToggle?: () => void;
  onColor?: string;
  className?: string;
  id?: string;
  type?: string;
  htmlFor?: string;
}
const Switch = (props: SwitchBtn) => {
  const { checked, handleToggle, onColor, className, id, type, htmlFor } = props;
  return (
    <>
      <input
        checked={checked}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={id}
        type={type}
      />
      <label
        style={{ background: checked ? onColor : '' }}
        className={className}
        htmlFor="react-switch-new"
      >
        <span className={htmlFor} />
      </label>
    </>
  );
};

export default Switch;
