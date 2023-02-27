/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

interface IProps {
  value: any;
  increase: any;
  decrease: any;
}

const PreviewQuantity = ({ value, increase, decrease }: IProps) => {
  return (
    <div className="preview_quantity_button">
      {value <= 1 ? (
        <button type="button" />
      ) : (
        <button type="button" onClick={decrease}>
          -
        </button>
      )}
      <span>{value}</span>
      <button type="button" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default PreviewQuantity;
