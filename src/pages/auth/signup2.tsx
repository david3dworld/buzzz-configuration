import React, { Fragment } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthLayout } from '../../layouts';
import { Button, ContactUsCard, Header, InputField } from '../../components';
import { contactUsArray } from '../../utils/static';

const validationSchema = Yup.object().shape({
  todo: Yup.string(),
  revenue: Yup.string(),
  custom: Yup.string(),
  orders: Yup.string(),
});

const initialValues = {
  todo: '',
  revenue: '',
  custom: '',
  orders: '',
};

const GraphicsContent = () => {
  return (
    <ContactUsCard
      details={contactUsArray[0].details}
      title={contactUsArray[0].title}
      link={contactUsArray[0].link}
      bg={contactUsArray[0].bg}
      bgUrl={contactUsArray[0].bgUrl}
    />
  );
};

const SignUp = () => {
  const onSubmit = () => {};

  return (
    <Fragment>
      <Header title="Buzzz | Sign up" />
      <AuthLayout title="Tell us about yourself" graphicsContent={<GraphicsContent />}>
        <div className="buzzz-login-page">
          <div className="mini-title mb-4">
            <p>Answer a few quick questions to improve your Buzzz experience..</p>
          </div>
          <div className="login-form">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(props) => {
                const { values, handleChange, handleBlur, handleSubmit, errors, touched } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <div className="my-3">
                      <InputField
                        label="What would you like to do with Buzzz?"
                        name="todo"
                        type="text"
                        id="todo"
                        placeholder="Grow my existing online business"
                        value={values.todo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      />
                    </div>

                    <div className="my-3">
                      <InputField
                        label="What’s your annual revenue?"
                        name="revenue"
                        type="text"
                        id="revenue"
                        placeholder="$100K–$0.9M"
                        value={values.revenue}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      />
                    </div>

                    <div className="my-3">
                      <InputField
                        label="Do you already sell custom merchandise?"
                        name="custom"
                        type="custom"
                        placeholder="Yes, I use a print-on-demand partner"
                        value={values.custom}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      />
                    </div>

                    <div className="my-3">
                      <InputField
                        label="How many orders do you get per month?"
                        name="orders"
                        type="orders"
                        placeholder="0-599"
                        value={values.orders}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      />
                    </div>

                    <div className="my-3 mt-4">
                      <Button title="Finish" />
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </AuthLayout>
    </Fragment>
  );
};

export default SignUp;
