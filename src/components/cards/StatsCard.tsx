import Image from 'next/image';
import React from 'react';

interface IProps {
  value: IValue;
}

interface IValue {
  id: number;
  name: string;
  data: string;
  bg: string;
  img: string;
  addData?: string;
  active: boolean;
}

const StatsCard = ({ value }: IProps) => {
  const { name, data, bg, img, addData, active } = value;
  return (
    <div className="stats_card_con" style={{ backgroundColor: active ? '#8100F7' : '#fff' }}>
      <div style={{ backgroundColor: bg }} className="stats_card_img">
        <Image src={img} width={24} height={24} alt="stats" />
      </div>
      <div className="stats_card_content">
        <h1 style={{ color: active ? '#fff' : '#727278' }}>{name}</h1>
        <div className="stats_card_value">
          <h3 style={{ color: active ? '#fff' : '#000' }}>{data}</h3>
          <h4>{addData}</h4>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
