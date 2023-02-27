import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form } from 'react-bootstrap';

import { DashboardHeader, InputField, Button } from '../../../components';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Please enter your full name'),
  phoneNumber: Yup.string().required('Please enter your phone number'),
  city: Yup.string().required('Please enter your city'),
  postal: Yup.string().required('Please enter your postal/zip code'),
});

const initialValues = {
  fullName: '',
  phoneNumber: '',
  city: '',
  postal: '',
};

const Shipping = () => {
  const onSubmit = () => {};
  return (
    <div>
      <DashboardHeader title="Design" />
      <div className="buzzz-dashboard-shipping">
        <div className="card">
          <div className="card-body">
            <h1>Shipping Information</h1>

            <div className="shipping-form">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(props) => {
                  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-xl-6">
                          <InputField
                            label="Full Name"
                            name="fullName"
                            type="text"
                            id="fullName"
                            placeholder="Placeholder"
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                          />
                        </div>
                        <div className="col-xl-6">
                          <InputField
                            label="Phone Number"
                            name="phoneNumber"
                            type="tel"
                            id="phoneNumber"
                            placeholder="Placeholder"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-xl-6">
                          <InputField
                            label="City"
                            name="city"
                            type="text"
                            id="city"
                            placeholder="Placeholder"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                          />

                          <div className="info d-xl-block d-none">
                            <p>
                              !Please note that the order would be delivered to the nearest Post
                              Office in your city.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <InputField
                            label="Postal/Zip Code"
                            name="postal"
                            type="text"
                            id="postal"
                            placeholder="Placeholder"
                            value={values.postal}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                          />

                          <div className="info d-xl-none d-block text-center mx-auto mt-4">
                            <p>
                              !Please note that the order would be delivered to the nearest Post
                              Office in your city.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between bottom">
                        <Form className="check">
                          {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type="checkbox"
                                id={`default-${type}`}
                                label="Save this address for later use"
                              />
                            </div>
                          ))}
                        </Form>
                        <div className="shipping-btn">
                          <Button title="Next" />
                        </div>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
