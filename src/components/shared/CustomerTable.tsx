import React, { ChangeEvent, useState } from 'react';
import { Checkbox, Select } from '..';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface IProps {
  showNumber: boolean;
}

const CustomerTable = ({ showNumber }: IProps) => {
  const [selectedItems, setSelectedItems] = useState<any>({ all: false });
  const handleCheckAll = () => {
    if (selectedItems.all) {
      setSelectedItems({});
      return;
    }
    let newData = { ...selectedItems };
    for (let i = 0; i < data.length; i += 1) {
      newData = { ...newData, [`${data[i]}`]: true, all: true };
    }
    setSelectedItems({ ...newData });
  };

  const handleInputChange = (id: string, checked: boolean) => {
    if (!checked) {
      delete selectedItems[id];
      setSelectedItems({ ...selectedItems });
    } else {
      setSelectedItems({ ...selectedItems, [id]: checked });
    }
  };
  return (
    <div className="content bg-white">
      <div className="title-con d-flex justify-content-between align-items-center mb-3">
        <h3>Customers</h3>
        {showNumber && <h4>No of customers: 32</h4>}
      </div>
      <div className="mt-4 customer-table-filter">
        <div className="d-flex gap-2">
          <div className="table-add-field-btn d-flex customer-table-filter-filter  mb-3">
            <button type="button" className="px-3">
              Add filter
              {' '}
              <img src="/svg/cross.svg" alt="icon" />
            </button>
          </div>
          <div className="d-flex customer-table-filter-person">
            <Select className="table-filter-select " data={['Type person']} value="Type Person" />
          </div>
          <div className="customer-table-filter-country">
            <Select className="table-filter-select " data={['Country']} value="Country" />
          </div>
        </div>
      </div>
      <div>
        <div className="table-responsive buzzz-table-container">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="d-flex align-items-center">
                      <Checkbox
                        bg="#66CB9F"
                        id={`customCheck_${2}`}
                        name={`customCheck_${2}`}
                        checked={selectedItems.all || false}
                        onChange={handleCheckAll}
                        className="buzzz-table-checkbox"
                      />
                    </div>
                    Name
                  </div>
                </th>
                <th>Email address</th>
                <th>Company</th>
                <th>Phone</th>
                <th className="text-center">Recent order</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="seperator" />
              {data?.map((key) => (
                <tr className="item" key={key}>
                  <td className="align-middle">
                    <div className="name-con d-flex gap-2 align-items-center">
                      <div className="d-flex align-items-center">
                        <Checkbox
                          bg="#66CB9F"
                          id={`customCheck_${key}`}
                          name={`customCheck_${key}`}
                          checked={selectedItems[`${key}`] || false}
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            handleInputChange(`${key}`, event.target.checked);
                          }}
                          className="buzzz-table-checkbox"
                        />
                      </div>
                      <div className="img-con">
                        <img src="/images/sidenav_profile.png" alt="customer" />
                      </div>
                      <p className="mb-0 text-capitalize">Olamide Tester</p>
                    </div>
                  </td>
                  <td className="align-middle email">testerolamide@yahoomail.com</td>
                  <td className="align-middle company">Mastercard</td>
                  <td className="align-middle company">07065335847</td>

                  <td className="text-center align-middle company">Shirt Design- #HAK7871</td>

                  <td className="align-middle">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="status">
                        <p className="text-center">Subscribed</p>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
