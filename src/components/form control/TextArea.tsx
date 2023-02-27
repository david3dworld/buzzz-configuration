import { motion } from 'framer-motion';
import React from 'react';
import { RenderIf } from '..';

interface IProps {
  name?: string;
  label?: string;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  errors?: any;
  touched?: any;
  className?: string;
  disabled?: boolean;
  id?: string;
  placeholder?: string;
}

const TextArea = (props: IProps) => {
  const {
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
      <RenderIf condition={!!label}>
        <div className="label">
          <label htmlFor={id}>{label}</label>
        </div>
      </RenderIf>
      <motion.textarea
        id={id}
        disabled={disabled}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        whileFocus={{ borderColor: 'rgba(128, 87, 251, 0.6)' }}
        animate={{ borderColor: '#cfcfde' }}
      />
      <RenderIf condition={hasError}>
        <div>
          <p className="buzzz-text-input-error">{errors[name]}</p>
        </div>
      </RenderIf>
    </div>
  );
};

export default TextArea;
