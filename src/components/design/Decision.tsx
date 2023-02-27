import React from 'react';
import Image from 'next/image';

const Decision = () => {
  return (
    <div className="design-decision d-flex justify-content-between">
      <div>
        <div className="box-container d-flex align-items-center">
          <div className="box">
            <Image
              src="/images/upload-2.svg"
              width={24}
              height={19}
              className="template-icon"
              alt="profile img"
            />
            <h5>Choose File</h5>
          </div>
          <div className="box">
            <Image
              src="/svg/firstline.svg"
              width={24}
              height={19}
              className="template-icon"
              alt="profile img"
            />
            <h5>Add quick design</h5>
          </div>
        </div>
        <div className="box-container mt-3 flex-fill d-flex align-items-center">
          <div className="box">
            <Image
              src="/svg/magicpen.svg"
              width={24}
              height={19}
              className="template-icon"
              alt="profile img"
            />
            <h5>Select product</h5>
          </div>
          <div className="box">
            <Image
              src="/images/upload-2.svg"
              width={24}
              height={19}
              className="template-icon"
              alt="profile img"
            />
            <h5>Add Cliparts</h5>
          </div>
        </div>
      </div>
      <div className="undo d-flex ml-4 justify-content-evenly">
        <div>
          <Image
            src="/svg/undo.svg"
            width={24}
            height={19}
            className="template-icon"
            alt="profile img"
          />
          <h6>Undo</h6>
        </div>
        <div>
          <Image
            src="/svg/redo.svg"
            width={24}
            height={19}
            className="template-icon"
            alt="profile img"
          />
          <h6>Undo</h6>
        </div>
      </div>
    </div>
  );
};

export default Decision;
