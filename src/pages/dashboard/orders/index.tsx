/* eslint-disable no-console */
import React from 'react';
import Link from 'next/link';
// import style from './order.module.css';
// import { useQuery } from '@tanstack/react-query';
import { DashboardHeader, Select, EmptyBox } from '../../../components';
// import { getAllOrders } from '../../../services/queries/order';
import queries from '../../../services/queries/order';

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Index = () => {
  // const [selectedItems, setSelectedItems] = useState<any>({ all: false });

  // const handleCheckAll = () => {
  //   if (selectedItems.all) {
  //     setSelectedItems({});
  //     return;
  //   }
  //   let newData = { ...selectedItems };
  //   for (let i = 0; i < data.length; i += 1) {
  //     newData = { ...newData, [`${data[i]}`]: true, all: true };
  //   }
  //   setSelectedItems({ ...newData });
  // };

  const { data: orderData } = queries.readAllOrders();
  console.log(orderData, '######HERE#####');

  // const date = new Date(orderData[0]?.updated_at);
  // const formattedDate = date.toLocaleDateString('en-GB', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // });

  return (
    <div className="buzzz-orders-page-container">
      <DashboardHeader title="Dashboard" />
      <div className="content bg-white">
        <div className="title-con d-flex justify-content-between align-items-center mb-3">
          <h3 className="order_text">Orders</h3>
          <button className="d-flex align-items-center gap-2 curved-btn background" type="button">
            <img src="/svg/dashboard_header2.svg" alt="icon" />
            <Link href="/dashboard/design/design">Create Design</Link>
          </button>
        </div>
        <div className="mt-5">
          <div className="d-flex justify-content-start align-items-center">
            <div className="d-flex">
              <Select className="table-filter-all" data={['All']} value="Type Person" />
              <Select className="table-filter-order" data={['Fulfilment']} value="Type Person" />
              <Select className="table-filter-order" data={['Payment']} value="Type Person" />
              <Select
                className="table-filter-order"
                data={['Shipping Method']}
                value="Type Person"
              />
              <Select className="table-filter-order" data={['Ship to']} value="Type Person" />
              <Select className="table-filter-order" data={['Notes']} value="Type Person" />
              <Select className="table-filter-order" data={['Archived']} value="Country" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          {/* <div className="d-flex justify-content-end align-items-center">
            <div className="d-flex">
              <Select className="table-filter-select" data={['2015-09-13']} value="Type Person" />
            </div>
            <div>
              <button className="date-filter" type="button">
                {'->'}
              </button>
            </div>
            <div>
              <Select className="table-filter-select" data={['2015-09-13']} value="Country" />
            </div>
          </div> */}
        </div>
        <div>
          <div className="table-responsive buzzz-orders-table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <div className="d-flex gap-2 align-items-end">
                      {/* <div className="d-flex align-items-center">
                        <Checkbox
                          bg="#66CB9F"
                          id={`customCheck_${2}`}
                          name={`customCheck_${2}`}
                          checked={selectedItems.all || false}
                          onChange={handleCheckAll}
                          className="buzzz-orders-table-checkbox"
                        />
                      </div> */}
                      ORDER ID
                    </div>
                  </th>
                  <th>NAME</th>
                  <th>QUANTITY</th>
                  <th>PRICE</th>
                  <th className="text-center">STATUS</th>
                  <th className="text-center">DATE ADDED</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {orderData?.length === 0 && (
                    <td colSpan={7}>
                      <div className="empty-box-state">
                        <EmptyBox
                          title="No Order has been created"
                          buttonTitle="Create order"
                          src="/images/empty.png"
                          className="header"
                        />
                      </div>
                    </td>
                  )}
                </tr>
                {orderData?.map((item: any) => {
                  return (
                    <tr key={item?.id}>
                      <td>{item?.id}</td>
                      <td>{item?.product?.name}</td>
                      <td>{item?.quantity}</td>
                      <td>{item?.product?.price}</td>
                      <td>{item?.status}</td>
                      {/* <td>{formattedDate}</td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="pagination-con d-flex justify-content-between align-items-center mb-3">
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
        </div> */}
      </div>
    </div>
  );
};

export default Index;
