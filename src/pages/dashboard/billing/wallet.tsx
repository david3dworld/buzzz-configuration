import React from 'react';
import Image from 'next/image';
import { DashboardHeader, Header } from '../../../components';
import style from './wallet.module.css';
import { fund, withdraw, exportSvg } from '../../../svg/walletSvg/index';
import Payout from '../../../components/billing/payout/Payout';

const wallet = () => {
  return (
    <div>
      <Header title="Wallet | Buzzz" />
      <DashboardHeader title="Dashboard" />
      <div className={style.walletContainer}>
        <div className={style.transaction}>
          <div className={style.transaction_header_container}>
            <h1 className={style.transactionHeader}>Transactions</h1>
            <div>
              <button className={style.export_btn} type="button">
                <span className={style.btnImg}>
                  <Image src={exportSvg} alt="export" />
                </span>
                Export
              </button>
            </div>
          </div>
          <div className={style.transaction_card_container}>
            <div className={style.transaction_card}>
              <div className={style.transaction_balance}>
                <p className={style.balance_text}>Wallet Balance</p>
                <p className={style.balance_text}>Est. by Nov 15, 2022</p>
              </div>
              <h2 className={style.price}>$7459.54</h2>
            </div>
            <div className={style.buttonContainer}>
              <button className={style.btn} type="button">
                <span className={style.btnImg}>
                  <Image src={withdraw} alt="withdraw" />
                </span>
                Withdraw
              </button>
              <button className={style.btn} type="button">
                <span className={style.btnImg}>
                  <Image src={fund} alt="fund" />
                </span>
                Fund Wallet
              </button>
            </div>
          </div>
        </div>
        {/* tabs section begins */}
        <div className={style.tabsSection}>
          <Payout />
        </div>
        {/* tabs section ends */}
      </div>
    </div>
  );
};

export default wallet;
