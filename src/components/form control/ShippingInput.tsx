import { motion } from 'framer-motion';
import React from 'react';
import { RenderIf } from '..';

interface IProps {
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  label?: string;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  errors?: any;
  touched?: any;
  className?: string;
  disabled?: boolean;
  id?: string;
  placeholder?: string;
}

const ShippingInput = (props: IProps) => {
  const {
    type,
    id,
    disabled,
    name = 'name',
    onChange,
    onBlur,
    value,
    errors = {},
    touched = {},
    className,
    label,
    placeholder,
  } = props;

  const hasError = (errors[name] && touched[name]) || false;

  return (
    <div className={`buzzz-input-field-con py-2 ${className || ''}`}>
      <div>
        <RenderIf condition={!!label}>
          <div className="label">
            <label htmlFor={id}>{label}</label>
          </div>
        </RenderIf>
        <motion.input
          type={type}
          id={id}
          disabled={disabled}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          whileFocus={{ borderColor: 'rgba(128, 87, 251, 0.6)' }}
        />
      </div>
      <RenderIf condition={hasError}>
        <div>
          <p className="buzzz-text-input-error">{errors[name]}</p>
        </div>
      </RenderIf>
    </div>
  );
};

export default ShippingInput;
