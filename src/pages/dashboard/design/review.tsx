/* eslint-disable operator-linebreak */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form } from 'react-bootstrap';
import Link from 'next/link';
import {
  DashboardHeader,
  CartDetails,
  InputField,
  Button,
  SuccessModal,
} from '../../../components';
import { paymentArray } from '../../../utils/static';
import queries from '../../../services/queries/cart';
import paymentQueries from '../../../services/queries/payment';
import userQueries from '../../../services/queries/users';
import { calcCartTotal, formatShippingAddress } from '../../../helper/helper';
import routes from '../../../routes';

const validationSchema = Yup.object().shape({
  address: Yup.string().required('Please enter your address'),
});

const initialValues = {
  address: '',
};

const review = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const onSubmit = () => {};

  const { mutate, isLoading: paymentLoading } = paymentQueries.create();

  const { data, isLoading } = queries.read();
  const { data: userData } = userQueries.readOne();

  return (
    <div>
      <DashboardHeader title="Design" />
      <div className="container buzzz-dashboard-review pb-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex mt-2">
              <h1>Order Items</h1>
              <Link href={routes.dashboard.cart.path}>
                <a href={routes.dashboard.cart.path}>
                  <p className="edit mx-2">Edit</p>
                </a>
              </Link>
            </div>

            <div className="row">
              <div className="col-xxl-9">
                <div>
                  <CartDetails cartData={data} isLoading={isLoading} />
                </div>

                {/* <Form className="check">
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id={`default-${type}`}
                        label="Apply a discount or gift card code to your order"
                      />
                    </div>
                  ))}
                </Form> */}

                <div className="mt-4">
                  <h1>Payment Details</h1>

                  <div className="d-flex mt-4">
                    <Link href={routes.dashboard.settings.shipping.path}>
                      <a href={routes.dashboard.settings.shipping.path}>Update Shipping Address</a>
                    </Link>
                    {/* <Form className="check">
                      {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check type="checkbox" id={`default-${type}`} label="Add manually" />
                        </div>
                      ))}
                    </Form>

                    <Form className="check mx-5">
                      {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type="checkbox"
                            id={`default-${type}`}
                            label="Same as shipping address"
                          />
                        </div>
                      ))}
                    </Form> */}
                  </div>

                  <div className="review-form mt-2 d-none">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}
                    >
                      {(props) => {
                        const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
                          props;
                        return (
                          <form onSubmit={handleSubmit}>
                            <div className="row">
                              <div className="col-xl-6">
                                <InputField
                                  label=""
                                  name="fullName"
                                  type="text"
                                  id="fullName"
                                  placeholder="Placeholder"
                                  value={values.address}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  errors={errors}
                                  touched={touched}
                                />
                              </div>
                            </div>
                          </form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>

                <div className="d-none">
                  <h1>Billing Method</h1>

                  <div className="bill-con d-flex mt-4">
                    <img src="/svg/paypal.svg" alt="payment" />
                    <p className="mx-3">PayPal</p>
                  </div>
                  <div className="bill-con d-xl-flex d-none mt-4">
                    <img src="/svg/card.svg" alt="payment" />
                    <p className="mx-3">Payment Card</p>
                    <div className="right">
                      {paymentArray.map((item) => (
                        <img key={item.id} src={item.img} alt="" />
                      ))}
                    </div>
                  </div>
                  <div className=" d-xl-none d-block mt-4">
                    <Form.Select aria-label="Default select example">
                      <option>Select</option>
                      {paymentArray.map((item) => (
                        <option value="1">{item.name}</option>
                      ))}
                    </Form.Select>
                  </div>
                </div>

                <div className="review-btn mx-xxl-0 mx-auto">
                  <Button
                    // onClick={() => toggleShow()}
                    title={`Checkout | ${calcCartTotal(data)}`}
                    onClick={mutate}
                    loading={paymentLoading}
                  />
                </div>
              </div>

              <div className="col-xxl-3 ">
                <div className="card shipping-address">
                  <div className="card-body">
                    <div>
                      <div className="d-flex">
                        <h2>Shipping Address</h2>
                        <Link href={routes.dashboard.settings.shipping.path}>
                          <a href={routes.dashboard.settings.shipping.path}>
                            <p className="edit mx-2">Edit</p>
                          </a>
                        </Link>
                      </div>
                      <div className="ship-add">
                        <p>{formatShippingAddress(userData?.shipping_address)}</p>
                      </div>
                    </div>

                    <hr />

                    {/* <div>
                      <div className="d-flex">
                        <h2>Billing Address</h2>
                        <p className="edit mx-2">Edit</p>
                      </div>
                      <div className="ship-add">
                        <p>
                          Los Angeles Korsgaard 2972 Westihemier Rd., Santa Ana, Illinois 85486 The
                          United States of America
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>

                <div className="card mt-3 shipping-address">
                  <div className="card-body">
                    <h2>Summary</h2>

                    <div>
                      <div className="d-flex justify-content-between">
                        <p>Subtotal</p>
                        <p>{calcCartTotal(data)}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p>Shipping</p>
                        <p>₦ 0.00</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p>Tax</p>
                        <p>₦ 0.00</p>
                      </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between">
                      <p>Total</p>
                      <p>{calcCartTotal(data)}</p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="card shipping-safety mt-3">
                    <div className="card-body d-flex">
                      <img src="/svg/security-safe.svg" alt="security" />
                      <p>
                        Your data is safe -- we don’t store your card or billing method details, and
                        we use industry-standard encryption to protect your personal information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal show={show} onHide={toggleShow} />
    </div>
  );
};

export default review;
