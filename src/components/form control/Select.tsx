import React, { Fragment } from 'react';

interface IProps {
  label?: string;
  name?: string;
  className?: string;
  disabledValue?: string;
  optionLabel?: string;
  optionValue?: string;
  value: any;
  onBlur?: () => void;
  onChange?: () => void;
  data?: Array<any>;
  style?: any;
  error?: string;
}

export default function Select(props: IProps) {
  const {
    label,
    name,
    value,
    onBlur,
    onChange,
    disabledValue,
    className,
    error,
    data,
    optionLabel,
    optionValue,
    style,
  } = props;

  return (
    <Fragment>
      {!!label && <label className="form-label">{label}</label>}

      <select
        className={`${className} form-select mb-3`}
        value={value}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        style={style}
      >
        {!!disabledValue && (
          <option disabled value="">
            {disabledValue || 'Choose...'}
          </option>
        )}

        {data
          && data.map((item: any, index: number) => {
            const setValue = optionValue ? item[optionValue] : item;
            let setLabel = optionLabel ? item[optionLabel] : item;

            if (typeof setLabel === 'object') {
              setLabel = JSON.stringify(item);
            } else if (Array.isArray && Array.isArray(setLabel)) {
              setLabel = JSON.stringify(item);
            }

            return (
              <option value={setValue} key={JSON.stringify(item) + index}>
                {setLabel}
              </option>
            );
          })}
      </select>
      {!!error && <p className="text-danger mb-0">{error}</p>}
    </Fragment>
  );
}
