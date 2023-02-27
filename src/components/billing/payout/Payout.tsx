import React from 'react';
import Image from 'next/image';
import style from './payout.module.css';
import { searchSvg, mobileInputSvg, select } from '../../../svg/walletSvg/index';
import { tableHeaderData } from './tableData';
import queries from '../../../services/queries/transaction';
import Spinner from '../../shared/Spinner';
import { EmptyBox } from '../../empty';
import { formatDateTime } from '../../../helper/helper';

const Payout = () => {
  const { data, isLoading } = queries.read();
  const statusFunc = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'paid';
      case 'Pending':
        return 'pending';
      case 'successful':
        return 'paid';
      default:
        return null;
    }
  };

  return (
    <div className={style.payoutWrapper}>
      <div className={style.inputContainer}>
        <div className={style.selectWrapper}>
          <select className={style.selectBox}>
            <option value="Filter Payouts">Filter Payouts</option>
          </select>
          <span className={style.arrow}>
            <Image src={select} alt="search" />
          </span>
        </div>
        <div className={style.inputWrapper}>
          <span className={style.search}>
            <Image src={searchSvg} alt="search" />
          </span>
          <input type="text" placeholder="Search" className={style.inputComponent} />
          <span className={style.listSvg}>
            <Image src={mobileInputSvg} alt="search" />
          </span>
        </div>
      </div>
      <div className={style.tableWrapper}>
        <table className={style.table}>
          <thead className={style.tableHeader}>
            <tr className={style.tableHeader}>
              {tableHeaderData.map((item) => {
                return (
                  <th
                    className={
                      item.text === 'STATUS'
                        ? style.table_header_text_status
                        : style.table_header_text
                    }
                    key={item.id}
                  >
                    {item.text}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <div className="mt-5 mb-6">
                <Spinner />
              </div>
            )}
            {data?.length === 0 && (
              <EmptyBox
                src="/svg/empty_state.svg"
                title="You have no transactions"
                buttonTitle="Start Shopping"
              />
            )}
            {data?.map((item: any, i: number) => {
              return (
                <tr key={i} className={style.table_body_row}>
                  <td className={style.table_body_data}>{item?.orders[0]?.product?.name}</td>
                  <td className={style.table_body_data}>{formatDateTime(item?.created_at)}</td>
                  <td className={`table_data_text ${statusFunc(item?.status)}`}>{item?.status}</td>
                  <td className={style.table_body_data}>{item?.orders[0]?.product?.name}</td>
                  <td className={style.table_body_data}>{item?.fee}</td>
                  <td className={style.table_body_data}>{item?.fee}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={style.navBtnWrapper}>
        <button className={style.navBtn} type="button">
          Previous
        </button>
        <button className={style.navBtn} type="button">
          Next
        </button>
      </div>
      <div className={style.payoutNav}>
        <div className={style.payoutDetails}>
          <p className={style.numText}>
            Showing
            <span className={style.num}>1</span>
            to
            <span className={style.num}>10</span>
            of
            <span className={style.num}>20</span>
            results
          </p>
        </div>
        <div className={style.nextPrevWrapper}>
          <p className={style.prevText}>Previous</p>
          <p className={style.nextText}>Next</p>
        </div>
      </div>
    </div>
  );
};

export default Payout;
