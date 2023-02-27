import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Iprops {
  title: string;
  body: string;
  buttonText: string;
  isIcon: boolean;
}

const BusinessHero = (props: Iprops) => {
  const { title, body, buttonText, isIcon } = props;
  return (
    <div className="business_hero">
      <div className="business_hero_content">
        <h1>{title}</h1>
        <h3>{body}</h3>
        <Link href="#ondemand_product">
          <a className="curved-btn" href="#ondemand_product">
            <div className="d-flex align-items-center gap-2 curved-btn-wrapper">
              {isIcon && (
                <Image src="/svg/heart_trans.svg" alt="heart svg" width={20} height={18} />
              )}
              {buttonText}
            </div>
          </a>
        </Link>
      </div>
      <div className="business_hero_img">
        <Image src="/images/business_hero.png" alt="business hero" width={691} height={621} />
      </div>
    </div>
  );
};

export default BusinessHero;
