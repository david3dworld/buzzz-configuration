import React from 'react';
import Image from 'next/image';
import { Decision, Colors, Size } from '../../../components';

const Create = () => {
  return (
    <div className="dashboard-create-design d-flex justify-content-between">
      <div>
        <h4>
          <span>{'<- '}</span>
          Design your own merch
        </h4>
        <div className="create-design-decision">
          <Decision />
        </div>
        <div>
          <Colors />
        </div>
        <div>
          <Size />
        </div>
      </div>
      <div className="t-shirt">
        <Image
          src="/images/shirt-2.png"
          width={481}
          height={608}
          className="template-icon"
          alt="design img"
        />
      </div>
    </div>
  );
};

export default Create;
