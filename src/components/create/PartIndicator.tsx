import React from 'react';
import { IActive } from '../../pages/create';

interface IProps {
  activePart: IActive;
}

const PartIndicator = (props: IProps) => {
  const { activePart } = props;

  return (
    <div>
      <p>{activePart}</p>
    </div>
  );
};

export default PartIndicator;
