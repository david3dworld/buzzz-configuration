import React, { Fragment } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { Accordion } from 'react-bootstrap';
import {
  Button, Dropdown, Header, InputField, ProductCard,
} from '../components';
import { countrySelectArray, designAccordionArray, shippingSelectArray } from '../utils/static';
import ANIMATION from '../utils/framerMotion';

const validationSchema = Yup.object().shape({
  country: Yup.string(),
  type: Yup.string(),
});

const initialValues = {
  country: countrySelectArray[0].value,
  type: shippingSelectArray[0].value,
};

const shippingRateValidationSchema = Yup.object().shape({
  quantity: Yup.number().required('Enter the qauntity').min(1),
  type: Yup.string().required('Please select an option'),
});

const shippingRateInitialValues = {
  quantity: 1,
  type: shippingSelectArray[0].value,
};

const Shipping = () => {
  const onSubmit = () => {};

  return (
    <Fragment>
      <Header title="Buzzz | Shipping" />
      <div className="buzzz-shipping-page-con py-5">
        <div className="app-container">
          <div className="title-con d-flex justify-content-between">
            <div className="text-content">
              <h3>Get shipping speeds and prices for your print-on-demand products.</h3>

              <p className="mt-3">
                Set up a profitable pricing strategy for your store or find the shipping cost for
                your personal order.
              </p>
            </div>
            <div className="btn-con">
              <button type="button" className="curved-btn d-flex gap-2">
                <img src="/svg/white_heart.svg" alt="" />
                See shipping rates
              </button>
            </div>
          </div>

          <div className="hero-con my-5">
            <div className="img-con">
              <img src="/images/shipping_hero.png" alt="shipping" className="w-100" />
            </div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ staggerChildren: 0.2 }}
              className="d-flex justify-content-between mt-5"
            >
              <motion.div variants={ANIMATION.scaleVariant} className="hero-item d-flex gap-3">
                <div className="d-flex justify-content-center align-items-center icon-con">
                  <img
                    style={{ maxWidth: '30px', maxHeight: '30px' }}
                    src="/svg/shipping_hero_icon1.svg"
                    alt=""
                  />
                </div>
                <div className="text-content">
                  <h4>Fulfillment</h4>
                  <p className="mt-2">
                    It takes 2–7 business days to create a product and fulfill an order.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={ANIMATION.scaleVariant} className="hero-item d-flex gap-3">
                <div
                  className="d-flex justify-content-center align-items-center icon-con"
                  style={{ background: '#FBF7FF' }}
                >
                  <img
                    style={{ maxWidth: '30px', maxHeight: '30px' }}
                    src="/svg/shipping_hero_icon2.svg"
                    alt=""
                  />
                </div>
                <div className="text-content">
                  <h4>Shipping</h4>
                  <p className="mt-2">
                    Shipping time depends on product availability and delivery destination.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={ANIMATION.scaleVariant} className="hero-item d-flex gap-3">
                <div
                  className="d-flex justify-content-center align-items-center icon-con"
                  style={{ background: '#EEFFFA' }}
                >
                  <img
                    style={{ maxWidth: '30px', maxHeight: '30px' }}
                    src="/svg/shipping_hero_icon3.svg"
                    alt=""
                  />
                </div>
                <div className="text-content">
                  <h4>Delivery.</h4>
                  <p className="mt-2">
                    Once an order is fulfilled and shipped, it’s delivered to the end address.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="middle-con">
          <div className="app-container">
            <div className="d-flex flex-con justify-content-between align-items-end">
              <div className="text-con">
                <h2>Are you ordering for yourself or selling online?</h2>
                <div className="btn-con d-flex justify-content-center gap-4 mt-5">
                  <button type="button" className="curved-btn">
                    Ordering for myself
                  </button>

                  <button type="button" className="curved-btn">
                    Selling Online
                  </button>
                </div>
              </div>

              <div className="img-con mb-4">
                <img src="/images/shipping_splash.png" className="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="shipping-rate-con my-4">
          <div className="app-container">
            <div className="title-con mb-5">
              <h3 className="text-center">See shipping rates for your region</h3>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(props) => {
                const { handleSubmit, setFieldValue } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <div className="d-flex select-flex-con justify-content-between mt-5">
                      <div className="my-3 input-page-form w-100">
                        <Dropdown
                          data={shippingSelectArray}
                          handleChange={(e) => {
                            setFieldValue('type', e.value);
                          }}
                        />
                      </div>

                      <div className="my-3 input-page-form w-100">
                        <Dropdown
                          data={countrySelectArray}
                          handleChange={(e) => {
                            setFieldValue('country', e.value);
                          }}
                        />
                        <div>
                          <p className="mt-3">
                            T-shirts, tank tops, 3/4 sleeve shirts, long sleeve shirts, polo shirts,
                            crop tops
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between shipping-options gap-5 mt-4">
                      <div className="item">
                        <h4>Add countries to compare</h4>
                        <div>
                          <Dropdown
                            data={countrySelectArray}
                            handleChange={(e) => {
                              setFieldValue('country', e.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="item">
                        <h4>Shipping Time</h4>
                        <p>8-14 business days</p>
                      </div>

                      <div className="item">
                        <h4>Single product**</h4>
                        <p>$50.99</p>
                      </div>

                      <div className="item">
                        <h4>Additional product**</h4>
                        <p>$3.00</p>
                      </div>
                    </div>
                  </form>
                );
              }}
            </Formik>
            <div className="warning-text my-5">
              <p>
                * Shipping costs differ based on the type and quantity of products in an order. See
                the final shipping costs during checkout or read more about shipping calculations.
              </p>
            </div>

            <div className="selling-products mt-5 py-4">
              <div className="title-con">
                <h3>Personalize top-selling products</h3>
                <p>Design and order products our customers already love</p>
              </div>
              <div className="grid-container my-4 py-2">
                {new Array(3).fill(0).map((_, index) => (
                  <ProductCard
                    key={index}
                    rating={Math.floor(Math.random() * 6)}
                    title="Unisex Staple T-Shirt | Bella + Canvas 3001"
                    img="/images/product_shirt.png"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="design_section7">
          <div className="app-container">
            <h1>Frequently Asked Questions</h1>
            <div className="design_section_accordion_wraper">
              <Accordion>
                {designAccordionArray.map((value, i) => (
                  <Accordion.Item eventKey={i.toString()} key={i}>
                    <Accordion.Header>{value.header}</Accordion.Header>
                    <Accordion.Body>{value.body}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <div className="calculate-shipping-rate-con py-5 mt-4">
          <div className="app-container py-4">
            <div className="title-con">
              <div className="d-flex justify-content-end align-items-center">
                <div>
                  <h3>Calculate shipping rates</h3>
                  <p>Get shipping rates for single products and bulk orders.</p>
                </div>
                <div className="img-con mb-4">
                  <img src="/images/shipping_splash.png" className="w-100" alt="" />
                </div>
              </div>
            </div>

            <Formik
              initialValues={shippingRateInitialValues}
              validationSchema={shippingRateValidationSchema}
              onSubmit={onSubmit}
            >
              {(props) => {
                const {
                  handleSubmit,
                  setFieldValue,
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-between mt-5">
                      <div className="dropdown-con">
                        <Dropdown
                          data={shippingSelectArray}
                          handleChange={(e) => {
                            setFieldValue('type', e.value);
                          }}
                        />
                      </div>

                      <div className="input-con">
                        <InputField
                          name="quantity"
                          type="number"
                          id="quantity"
                          placeholder=""
                          value={values.quantity}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          label="QTY"
                          className="shipping-input-con"
                        />
                      </div>

                      <div className="button-con">
                        <Button title="Calculate" />
                      </div>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
