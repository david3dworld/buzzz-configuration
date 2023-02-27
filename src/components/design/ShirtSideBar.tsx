import React from 'react';
import Image from 'next/image';

const ShirtSideBar = () => {
  return (
    <div className="design-checkout">
      <div className="design-comp text-center">
        <Image
          src="/images/shirt-1.png"
          width={107}
          height={128}
          className="template-preview"
          alt="profile img"
        />
        <h4>Front</h4>
      </div>

      <div className="design-comp text-center">
        <Image
          src="/images/shirt-3.png"
          width={107}
          height={128}
          className="template-preview"
          alt="profile img"
        />
        <h4>Back</h4>
      </div>

      <div className="design-comp text-center">
        <Image
          src="/images/shirt-4.png"
          width={107}
          height={128}
          className="template-preview"
          alt="profile img"
        />
        <h4>Sleeve</h4>
      </div>

      <div className="design-comp text-center">
        <Image
          src="/svg/search-zoom-in.svg"
          width={19}
          height={19}
          className="template-preview"
          alt="profile img"
        />
        <h4>Zoom</h4>
      </div>

      <div className="design-comp text-center">
        <Image
          src="/svg/search-zoom-in.svg"
          width={19}
          height={19}
          className="template-preview"
          alt="profile img"
        />
        <h4>Preview</h4>
      </div>
    </div>
  );
};

export default ShirtSideBar;
