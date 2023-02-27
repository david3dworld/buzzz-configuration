import React from 'react';

interface IProps {
  name?: string;
  title?: string;
  id?: string;
  checked: boolean;
  onChange?: any;
  labelClass?: string;
  className?: string;
  bg?: string;
}

export default function CheckBox(props: IProps) {
  const {
    name, title, id, checked, onChange, labelClass, bg, className = '',
  } = props;

  return (
    <div className="form-check form-check-inline m-0">
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        id={`customRadio_${id}`}
        name={name}
        className={`form-check-input cursor-pointer buzzz-checkbox ${className}`}
        style={{ backgroundColor: checked ? bg : undefined, borderColor: checked ? bg : undefined }}
      />
      {!!title && (
        <label
          className={`form-check-label cursor-pointer ${labelClass}`}
          htmlFor={`customRadio_${id}`}
        >
          {title}
        </label>
      )}
    </div>
  );
}
