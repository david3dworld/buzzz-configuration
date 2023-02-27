import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { InputField, Button } from '../../../components';
import queries from '../../../services/queries/users';

const validationSchema = Yup.object().shape({
  street_number: Yup.string().required('Please enter your street number'),
  state: Yup.string().required('Please enter your street'),
  LGA: Yup.string().required('Please enter your LGA'),
  Nearest_bustop: Yup.string().required('Please enter your nearest bus stop'),
  street: Yup.string().required('Please enter your street name'),
});

const Shipping = () => {
  const { data } = queries.readOne();
  const initialValues = {
    street_number: data?.shipping_address?.street_number || '',
    state: data?.shipping_address?.state || '',
    LGA: data?.shipping_address?.LGA || '',
    Nearest_bustop: data?.shipping_address?.Nearest_bustop || '',
    street: data?.shipping_address?.street || '',
  };
  type InitialValues = ReturnType<() => typeof initialValues>;
  const { mutate, isLoading } = queries.update();
  const onSubmit = (values: InitialValues) => {
    const postData = {
      shipping_address: values,
    };
    mutate(postData);
  };
  return (
    <div>
      <div className="buzzz-dashboard-shipping">
        <div className="card">
          <div className="card-body">
            <h1>Shipping Information</h1>

            <div className="shipping-form">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
              >
                {(props) => {
                  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="col-xl-6">
                        <InputField
                          label="Address"
                          name="street"
                          type="text"
                          id="street"
                          placeholder="Placeholder"
                          value={values.street}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                        />
                      </div>
                      <div className="row">
                        <div className="col-xl-6">
                          <InputField
                            label="Street Number"
                            name="street_number"
                            type="tel"
                            id="street_number"
                            placeholder="Placeholder"
                            value={values.street_number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                          />
                        </div>
                        <div className="col-xl-6">
                          <InputField
                            label="Nearest Bus Stop"
                            name="Nearest_bustop"
                            type="text"
                            id="Nearest_bustop"
                            placeholder="Placeholder"
                            value={values.Nearest_bustop}
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
                            label="LGA"
                            name="LGA"
                            type="text"
                            id="LGA"
                            placeholder="Placeholder"
                            value={values.LGA}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                          />

                          <div className="info d-xl-block d-none">
                            <p>
                              Please note that the order would be delivered to the nearest Post
                              Office in your city.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <InputField
                            label="State"
                            name="state"
                            type="text"
                            id="state"
                            placeholder="Placeholder"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                          />

                          <div className="info d-xl-none d-block text-center mx-auto mt-4">
                            <p>
                              Please note that the order would be delivered to the nearest Post
                              Office in your city.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between bottom">
                        {/* <Form className="check">
                          {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type="checkbox"
                                id={`default-${type}`}
                                label="Save this address for later use"
                              />
                            </div>
                          ))}
                        </Form> */}
                        <div className="shipping-btn">
                          <Button title="Update" loading={isLoading} />
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
