import React, { useState } from 'react';
import Select from 'react-select';
import { RenderIf } from '..';

interface IProps {
  data: Array<any>;
  // eslint-disable-next-line
  handleChange: (data: any) => any;
}

const Dropdown = (props: IProps) => {
  const { data, handleChange } = props;
  const [selected, setSelected] = useState(data[0]);

  return (
    <div>
      <Select
        placeholder="Select Option"
        isSearchable={false}
        options={data}
        value={selected}
        onChange={(newValue) => {
          setSelected(newValue);
          handleChange(newValue);
        }}
        // @ts-ignore
        getOptionLabel={(e) => {
          return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <RenderIf condition={e.icon}>
                <img src={e.icon} alt="icon" />
              </RenderIf>

              <span>{e.label}</span>
            </div>
          );
        }}
        className="buzzz-curved-select-dropdown"
        classNamePrefix="buzzz-dropdown"
      />
    </div>
  );
};

export default Dropdown;
