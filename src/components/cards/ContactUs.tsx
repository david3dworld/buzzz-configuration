import Link from 'next/link';
import React from 'react';

interface IProps {
  title: string;
  details: string;
  link: string;
  bg?: string;
  bgUrl?: string;
  button?: string;
}

const ContactUs = (props: IProps) => {
  const {
    title, details, link, bg, bgUrl, button,
  } = props;

  return (
    <div className="relative-contact-us-card d-flex">
      <div className="contact-us-card-con" style={{ backgroundColor: bg }}>
        <div className="d-flex flex-column flex-con justify-content-between">
          <h3 className="text-center">{title}</h3>
          <p className="text-center">{details}</p>

          <div className="d-flex justify-content-center align-items-center btn-con">
            <Link href={link}>
              <a href={link} className="curved-btn">
                {button || 'Contact us'}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute-contact-bg" style={{ background: `url(${bgUrl})` }} />
    </div>
  );
};

export default ContactUs;
