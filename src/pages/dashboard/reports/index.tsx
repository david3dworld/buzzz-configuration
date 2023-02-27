import React from 'react';
import { DashboardHeader, DashboardVisitChart, DashboardSalesChart } from '../../../components';
import { topCustomerArray, visitDataArray, salesDataArray } from '../../../utils/static';

const Index = () => {
  return (
    <div>
      <DashboardHeader title="Dashboard" />
      <div className="container pb-3 buzzz-dashboard-report">
        <div className="card">
          <div className="card-body">
            <h1 className="pb-5 pt-3 r-title mx-3 mx-xl-0">Sales Report</h1>
            <div className="d-xl-flex d-lg-block justify-content-between">
              <div className="col-xl-6 col-sm-12 ">
                <div className="card buzzz-dashboard-report-chart">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mx-3 mx-xl-0">
                      <p className="rc-title mt-1">Sales Analytics</p>
                      <select className="form-select form-select-lg">
                        <option selected>This Week</option>
                        <option value={1}>This Month</option>
                        <option value={2}>This Year</option>
                      </select>
                    </div>
                    <div className="mt-4">
                      <DashboardSalesChart
                        width={490}
                        height={250}
                        stroke="#ffa500"
                        data={salesDataArray}
                      />
                    </div>
                  </div>
                </div>

                <div className="card mt-4 mb-4 buzzz-dashboard-report-chart">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mx-3 mx-xl-0">
                      <p className="rc-title mt-1">Visit Analytics</p>
                      <select className="form-select form-select-lg">
                        <option selected>This Week</option>
                        <option value={1}>This Month</option>
                        <option value={2}>This Year</option>
                      </select>
                    </div>
                    <div className="mt-4 mb-3">
                      <DashboardVisitChart
                        width={490}
                        height={250}
                        stroke="#006C67"
                        data={visitDataArray}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="card buzzz-dashboard-tc-report">
                  <div className="card-body p-0">
                    <p className="pt-3 mx-4 tc-title">Top customer</p>
                    <hr />
                    <div>
                      {topCustomerArray.map((value) => (
                        <div className="p-3" key={value.id}>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex">
                              <div>
                                <img src={value.image} alt="Profile Pic" />
                              </div>

                              <div className="mx-2">
                                <p className="tc-name">{value.name}</p>
                                <p className="tc-email">{value.email}</p>
                              </div>
                            </div>

                            <div className="mt-2">
                              <p className="tc-amount">{value.amount}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
