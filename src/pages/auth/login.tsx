import React, { Fragment } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { AuthLayout } from '../../layouts';
import { Button, ContactUsCard, Header, InputField } from '../../components';
import routes from '../../routes';
import { contactUsArray } from '../../utils/static';
import queries from '../../services/queries/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const initialValues = {
  email: 'test@tester.com',
  password: '1234567',
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

type InitialValues = ReturnType<() => typeof initialValues>;

const Login = () => {
  const { isLoading, mutate } = queries.update();
  const onSubmit = (values: InitialValues) => {
    mutate(values);
  };

  return (
    <Fragment>
      <Header title="Buzzz | Login" />
      <AuthLayout title="Sign in to Buzzz" graphicsContent={<GraphicsContent />}>
        <div className="buzzz-login-page">
          <div className="d-flex justify-content-between align-items-center social-login-btn">
            <button
              type="button"
              className="curved-btn outline d-flex justify-content-between align-items-center"
            >
              <img
                src="/svg/google_icon.svg"
                alt="google"
                style={{
                  marginRight: '4px',
                }}
              />
              Sign up with Google
            </button>

            <button
              type="button"
              className="curved-btn outline d-flex justify-content-between align-items-center"
            >
              <img
                src="/svg/twitter_icon.svg"
                alt="google"
                style={{
                  marginRight: '4px',
                }}
              />
              Sign up with Twitter
            </button>
          </div>

          <div className="divider d-flex justify-content-center align-items-center ">
            <span>or</span>
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
                    <div className="my-3 input-page-form">
                      <InputField
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Email address"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      />
                    </div>
                    <div className="my-3">
                      <InputField
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      />
                    </div>

                    <div className="my-3 mt-4">
                      <Button title="Login" loading={isLoading} />
                    </div>
                  </form>
                );
              }}
            </Formik>
            <div className="d-flex justify-content-center align-items-center bottom-links mt-5">
              <Link href={routes.auth.resetPassword.path}>
                <a href={routes.auth.resetPassword.path}>Forgot your password?</a>
              </Link>

              <Link href={routes.auth.signup.path}>
                <a href={routes.auth.signup.path}>Sign up</a>
              </Link>
            </div>
          </div>
        </div>
      </AuthLayout>
    </Fragment>
  );
};

export default Login;
