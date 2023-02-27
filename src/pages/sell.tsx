import React from 'react';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { Formik } from 'formik';
import Image from 'next/image';
import {
  BusinessHero,
  Button,
  Header,
  InputField,
  StartSharingCard,
  TextArea,
} from '../components';
import { sellBrandCard } from '../utils/static';
import ANIMATION from '../utils/framerMotion';

const initialValues = {
  brandName: '',
  storeUrl: '',
  storeDesc: '',
  email: '',
};
const validationSchema = {};

const Sell: NextPage = () => {
  const onSubmit = () => {};
  return (
    <>
      <Header title="Buzzz | Design" />
      <div className="app-container">
        <BusinessHero
          title="Enjoy a Risk-Free Merch business with no stress!"
          body="Our Marketplace allows you to upload your designs while Buzzz handles the difficult part: fulfilling the order and handling logistics. We handle everything without requiring any upfront payment from you."
          buttonText="Get Started"
          isIcon={false}
        />
        <div className="sell_section1">
          <h2>How to get started! It is free!</h2>
          <h3>Learn more about the Buzzz Experience.</h3>
          <div className="sell_section1_wrap d-flex gap-5 mt-5">
            {sellBrandCard.map((value, i) => (
              <motion.div variants={ANIMATION.scaleVariant} key={i} className="section1-card">
                <div className="section-card-img">
                  <img src={value.icon} alt="svg" />
                </div>
                <div className="section1-card-content">
                  <h1 className="py-2">{value.title}</h1>
                  <p>{value.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="sell_contact">
          <div className="sell_contact_wrap">
            <h1>
              Send a request to join the program. When you&apos;re done with your design,
              you&apos;ll be shown the cost price. You can then decide on a selling price.
            </h1>
            <div className="sell_contact_form">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(props) => {
                  const {
                    values, handleChange, handleBlur, handleSubmit, errors, touched,
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="my-3 input-page-form">
                        <InputField
                          name="fullName"
                          type="text"
                          id="fullName"
                          value={values.brandName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          className="sell_input"
                          label="Brand Name"
                        />
                      </div>

                      <div className="my-3 input-page-form">
                        <InputField
                          name="phone"
                          type="tel"
                          id="phone"
                          value={values.storeUrl}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          className="sell_input_before"
                          label="Your Store URL"
                        />
                      </div>

                      <div className="my-3">
                        <TextArea
                          name="message"
                          id="message"
                          value={values.storeDesc}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          className="sell_input"
                          label="Store Description"
                        />
                      </div>

                      <div className="my-3 input-page-form">
                        <InputField
                          name="email"
                          type="email"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          className="sell_input"
                          label="Email"
                        />
                      </div>

                      <div className="my-3 mt-4 sell_btn_wrap">
                        <Button title="Register" />
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
        <div className="sell_section3">
          <h1>You can count on us for:</h1>
          <div className="sell_section3_cards ">
            <div className="sell_section3_card">
              <div className="sell_section3_card_img">
                <Image src="/svg/sell_card1.svg" width={86} height={86} alt="sell cards svg" />
              </div>
              <div className="sell_section3_card_content">
                <h2>Fast turnaround within days</h2>
                <h3>
                  Your order gets to you within 3-7 working days via DHL or our very own Buzzz
                  Direct.
                </h3>
              </div>
            </div>
            <div className="sell_section3_card">
              <div className="sell_section3_card_img">
                <Image src="/svg/sell_card2.svg" width={86} height={86} alt="sell cards svg" />
              </div>
              <div className="sell_section3_card_content">
                <h2>100% Top Quality</h2>
                <h3>
                  Only the finest materials, machines and people will be involved in fulfilling your
                  order.
                </h3>
              </div>
            </div>
            <div className="sell_section3_card">
              <div className="sell_section3_card_img">
                <Image src="/svg/sell_card3.svg" width={86} height={86} alt="sell cards svg" />
              </div>
              <div className="sell_section3_card_content">
                <h2>Affordable Services</h2>
                <h3>
                  All products are adequately priced to ensure you get value for your money at all
                  times.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <StartSharingCard />
        </div>
      </div>
    </>
  );
};

export default Sell;
