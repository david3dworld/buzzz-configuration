import React from 'react';
import { IActive } from '../../pages/create';

const partsOptions = [
  { id: 1, img: '/images/front.png', name: 'Front', value: 'front' },
  { id: 2, img: '/images/back.png', name: 'Back', value: 'back' },
  { id: 3, img: '/images/left_sleeve.png', name: 'Left', value: 'left' },
  { id: 4, img: '/images/right_sleeve.png', name: 'Right', value: 'right' },
];

interface IProps {
  handleClick: (val: IActive) => void;
  activePart: IActive;
}

const ShirtPart = (props: IProps) => {
  const { handleClick, activePart } = props;

  return (
    <div className="buzzz_create_shirt_parts">
      <div>
        {partsOptions.map((item) => (
          <div className="my-3" key={item.id}>
            <button
              type="button"
              className={activePart === item.value ? 'active' : ''}
              onClick={() => {
                handleClick(item.value as IActive);
              }}
            >
              <div className="img-con">
                <img src={item.img} alt={item.name} />
              </div>
              <p className="mt-1">{item.name}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShirtPart;
