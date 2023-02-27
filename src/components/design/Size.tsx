import React from 'react';

const Size = () => {
  return (
    <div className="size-component">
      <h4>Sizes Available</h4>
      <div className="different-sizes d-flex align-items-center justify-content-evenly">
        <div className="d-flex align-items-center">
          <h4>YXS</h4>
          <span className="size-line">{'  '}</span>
        </div>
        <div className="d-flex align-items-center">
          <h4>YS</h4>
          <span className="size-line">{'  '}</span>
        </div>
        <div className="d-flex align-items-center">
          <h4>YM</h4>
          <span className="size-line">{'  '}</span>
        </div>
        <div className="d-flex align-items-center">
          <h4>YL</h4>
          <span className="size-line">{'  '}</span>
        </div>
        <div className="d-flex align-items-center">
          <h4>YXL</h4>
          <span className="size-line">{'  '}</span>
        </div>
      </div>
      <div className="different-sizes d-flex align-items-center justify-content-evenly">
        <div className="d-flex align-items-center">
          <h4>S</h4>
          <span className="size-line">{'  '}</span>
        </div>
        <div className="d-flex align-items-center">
          <h4>M</h4>
          <span className="size-line">{'  '}</span>
        </div>
        <div className="d-flex align-items-center">
          <h4>L</h4>
          <span className="size-line">{'  '}</span>
        </div>
        <div className="d-flex align-items-center">
          <h4>XL</h4>
          <span className="size-line">{'  '}</span>
        </div>
        <div className="d-flex align-items-center">
          <h4>2XL</h4>
          <span className="size-line">{'  '}</span>
        </div>
        <div className="d-flex align-items-center">
          <h4>3XL</h4>
        </div>
        {/* <div className="d-flex align-items-center">
          <h4>4XL</h4>
          <span className="size-line">{'  '}</span>
        </div> */}
      </div>
    </div>
  );
};

export default Size;
