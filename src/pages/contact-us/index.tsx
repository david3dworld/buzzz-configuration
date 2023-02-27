import React, { Fragment } from 'react';
import { ContactUsCard, Header } from '../../components';
import { contactUsArray } from '../../utils/static';

const ContactUs = () => {
  return (
    <Fragment>
      <Header title="Buzzz | Contact us" />
      <div className="buzzz-contact-us-container">
        <div className="title-con">
          <div className="app-container">
            <div className="title">
              <div className="img-con d-flex justify-content-end">
                <img src="/svg/title_icon.svg" alt="" />
              </div>
              <h2>Contact us</h2>
            </div>
          </div>
        </div>

        <div className="app-container">
          <div className="contact-us-grid-con">
            {contactUsArray.map((item) => (
              <ContactUsCard
                key={item.id}
                details={item.details}
                title={item.title}
                link={item.link}
                bg={item.bg}
                bgUrl={item.bgUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
