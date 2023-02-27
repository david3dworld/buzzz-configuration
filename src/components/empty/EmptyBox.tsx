import Link from 'next/link';
import React from 'react';
import routes from '../../routes';

interface IProps {
  title: string;
  className?: string;
  src?: string;
  buttonTitle?: string;
  link?: string;
}

const EmptyBox = (props: IProps) => {
  const { title, className, src, buttonTitle, link } = props;
  return (
    <div>
      <div className={`empty-box text-center ${className}`}>
        <img src={src} alt="..." className={className} />
        <h4>{title}</h4>
        <div className="text-center">
          <Link href={link || routes.marketplace.path}>
            <a href={link || routes.marketplace.path}>
              <button
                className="align-items-center gap-2 curved-btn background text-center"
                type="button"
              >
                <img src="/svg/dashboard_header2.svg" alt="icon" className="mr-3" />
                {buttonTitle}
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default EmptyBox;
