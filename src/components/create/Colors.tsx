import React from 'react';

const colorOptions = [
  { id: 1, color: '#3F4376' },
  { id: 2, color: '#0F7CA3' },
  { id: 3, color: '#B6ADDE' },
  { id: 4, color: '#C3153A' },
  { id: 5, color: '#543773' },
  { id: 6, color: '#FFFF00' },
  { id: 7, color: '#FA414B' },
  { id: 8, color: '#62E2A4' },
  { id: 9, color: '#3611F2' },
  { id: 10, color: '#B6ACDE' },
  { id: 11, color: '#000000' },
  { id: 12, color: '#E49A22' },
  { id: 13, color: '#ECE0A0' },
  { id: 14, color: '#E45E2A' },
  { id: 15, color: '#FFFFFF' },
];

interface IProps {
  handleSelect: (color: string) => void;
}

const Colors = (props: IProps) => {
  const { handleSelect } = props;

  return (
    <div className="buzzz_colors_container">
      <h3 className="mb-3">Colors</h3>
      <div className="buzzz_colors_con d-flex gap-3 flex-wrap">
        {colorOptions.map((item) => (
          <button
            className="create_color_item"
            type="button"
            key={item.id}
            style={{ backgroundColor: item.color }}
            onClick={() => {
              handleSelect(item.color);
            }}
          >
            <span />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Colors;
