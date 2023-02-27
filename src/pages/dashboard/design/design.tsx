import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DashboardHeader } from '../../../components';
import { designData } from '../../../components/designData/designData';
import style from './card.module.css';

const Design = () => {
  return (
    <>
      <DashboardHeader title="Dashboard" />
      <div className="dashboard-design-container">
        <div className="dashboard-design">
          <div className="col-10 mx-auto text-center">
            <h4 className="mt-4">I am designing for...</h4>
            <p>Select the best option</p>
          </div>
        </div>
        <div className="chose-template">
          <div className={style.design_cards}>
            {designData.map((item) => {
              return (
                <div className={style.card} key={item.id}>
                  <a href={item.link}>
                    <Image src={item.svg} width={170} height={170} alt={item.alt} />
                  </a>
                </div>
              );
            })}
          </div>
          <div className="desc-button mx-auto text-center">
            <button className="d-flex align-items-center gap-2 curved-btn background" type="button">
              <Link href="/dashboard/design/design">Next</Link>
            </button>
            <Link href="/">Skip this step</Link>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Design;
