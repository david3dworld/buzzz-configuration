import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Colors = () => {
  return (
    <div className="colors-component">
      <div className="colors-component-img">
        <Image
          src="/images/shirt-2.png"
          width={320}
          height={360}
          className="template-icon"
          alt="design img"
        />
      </div>
      <h4>Colors</h4>
      <div className="color-p d-flex align-items-center justify-content-evenly">
        <Link href="/">
          <span className="colors-pallet" />
        </Link>
        <span className="colors-pallet-2" />
        <span className="colors-pallet-3" />
        <span className="colors-pallet-4" />
        <span className="colors-pallet-5" />
      </div>
      <div className="d-flex align-items-center justify-content-evenly">
        <span className="colors-pallet" />
        <span className="colors-pallet-2" />
        <span className="colors-pallet-3" />
        <span className="colors-pallet-4" />
        <span className="colors-pallet-5" />
      </div>
      <div className="d-flex align-items-center justify-content-evenly">
        <span className="colors-pallet" />
        <span className="colors-pallet-2" />
        <span className="colors-pallet-3" />
        <span className="colors-pallet-4" />
        <span className="colors-pallet-5" />
      </div>
      <div className="d-flex align-items-center justify-content-evenly">
        <span className="colors-pallet" />
        <span className="colors-pallet-2" />
        <span className="colors-pallet-3" />
        <span className="colors-pallet-4" />
        <span className="colors-pallet-5" />
      </div>
    </div>
  );
};

export default Colors;
