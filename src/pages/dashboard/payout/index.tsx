import React, { useState } from 'react';
import Link from 'next/link';
import { Checkbox, DashboardHeader, Select } from '../../../components';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Index = () => {
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

  // const handleInputChange = (id: string, checked: boolean) => {
  //   if (!checked) {
  //     delete selectedItems[id];
  //     setSelectedItems({ ...selectedItems });
  //   } else {
  //     setSelectedItems({ ...selectedItems, [id]: checked });
  //   }
  // };
  return (
    <div className="buzzz-payout-page-container">
      <DashboardHeader title="Dashboard" />
      <div className="content bg-white">
        <div className="title-con d-flex  justify-content-between align-items-center mb-3">
          <h3 className="payout_text">Payout</h3>
          <div className="button-wrapper sm-flex-direction-column d-flex align-items-center gap-3 justify-content-center">
            <button className="d-flex align-items-center gap-2 curve-btn naked" type="button">
              <img src="/svg/dashboard_header1.svg" alt="icon" />
              <Link href="/dashboard/design/design">Export</Link>
            </button>
            <button className="d-flex align-items-center gap-2 curved-btn background" type="button">
              <img src="/svg/dashboard_header2.svg" alt="icon" />
              <Link href="/dashboard/design/design">Transactions</Link>
            </button>
          </div>
        </div>
        <div className="payout d-flex align-items-center">
          <div className="payout-overview">
            <div className="box">
              <div className="box-view d-flex align-items-center">
                <h5>Previous payout</h5>
                <h6>Nov 2, 2022</h6>
              </div>
              <div className="price-view d-flex align-items-center">
                <h2>$3459.54</h2>
                <p>paid</p>
              </div>
              <h4>View transactions</h4>
            </div>
            <div className="border_box" />
            <div className="box">
              <div className="box-view d-flex align-items-center">
                <h5>Previous payout</h5>
                <h6>Nov 2, 2022</h6>
              </div>
              <div className="price-view d-flex align-items-center">
                <h2>$3459.54</h2>
                <p className="pending">pending</p>
              </div>
              <h4>View transactions</h4>
            </div>
          </div>
          <div className="payout-overview-two">
            <div className="box">
              <div className="box-view d-flex align-items-center">
                <h5>Balance</h5>
                <h6>Est. by Nov 15, 2022</h6>
              </div>
              <div className="price-view d-flex align-items-center">
                <h2>$3459.54</h2>
              </div>
              <h4>View transactions</h4>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-flex justify-content-start align-items-center">
            <div className="d-flex">
              <Select className="table-filter-select" data={['Filter Payouts']} value="Country" />
            </div>
          </div>
        </div>
        <div>
          <div className="table-responsive buzzz-payout-table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <div className="d-flex gap-2 align-items-end">
                      <div className="d-flex align-items-center">
                        <Checkbox
                          bg="#66CB9F"
                          id={`customCheck_${2}`}
                          name={`customCheck_${2}`}
                          checked={selectedItems.all || false}
                          onChange={handleCheckAll}
                          className="buzzz-payout-table-checkbox"
                        />
                      </div>
                      DATE ADDED
                    </div>
                  </th>
                  <th>STATUS</th>
                  <th>CHARGES</th>
                  <th>REFUND</th>
                  <th className="text-center">FEES</th>
                  <th className="text-center">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={7}>
                    {/* <div className="empty-box-state">
                      <EmptyBox
                        title="No Order has been created"
                        buttonTitle="Create order"
                        src="/images/empty.png"
                        className="header"
                      />
                    </div> */}
                  </td>
                </tr>
                <tr className="seperator" />
                {data?.map((key) => (
                  <tr className="item" key={key}>
                    <td className="align-middle">
                      <div className="name-con d-flex gap-2 align-items-center">
                        <div className="d-flex align-items-center">
                          <Checkbox
                            bg="#66CB9F"
                            id={`customCheck_${2}`}
                            name={`customCheck_${2}`}
                            checked={selectedItems.all || false}
                            onChange={handleCheckAll}
                            className="buzzz-payout-table-checkbox"
                          />
                        </div>
                        <p className="mb-0 text-capitalize">2021-08-09</p>
                      </div>
                    </td>
                    <td className="align-middle">
                      <div className="d-flex  align-items-center">
                        <div className="status">
                          <p className="text-center">Paid</p>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      <div className="d-flex  align-items-center">
                        <div className="status-two">
                          <p className="text-center">$2,851.78</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center align-middle company">$0.00</td>
                    <td className="text-center align-middle company">
                      <div className="statustwo">
                        <p className="text-center">-$134.348</p>
                      </div>
                    </td>
                    <td className="text-center align-middle company">$2,804.90</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pagination-con d-flex justify-content-between align-items-center mb-3">
          <h3>
            Showing
            <span>1</span>
            to
            <span>10</span>
            of
            <span>20</span>
            results
          </h3>
          <div className="next-prev d-flex align-items-center justify-content-between">
            <button className="prev" type="button">
              Prev
            </button>
            <button className="prev" type="button">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
