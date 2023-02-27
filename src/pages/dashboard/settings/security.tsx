import React, { useEffect, useRef } from 'react';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { Button, InputField } from '../../../components';
import { devicesArray } from '../../../utils/static';
import queries from '../../../services/queries/password';

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Please enter your current password'),
  password: Yup.string().required('Please enter your new password').min(6),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
  //   'Must Contain 8 Characters, One Uppercase, One Lowercase,'
  // ),
  confirmPassword: Yup.string()
    .required('Please confirm your new password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const initialValues = {
  oldPassword: '',
  password: '',
  confirmPassword: '',
};

type InitialValues = ReturnType<() => typeof initialValues>;

const Security = () => {
  const { mutate, isLoading, isSuccess } = queries.update();
  const formikRef = useRef<FormikProps<any>>(null);

  const onSubmit = (values: InitialValues) => {
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess) {
      formikRef.current?.resetForm({ values: initialValues });
    }
  }, [isSuccess]);

  return (
    <div className="container pb-5">
      <div className="row mb-4">
        <div className="col-xl-8">
          <div className="card buzzz-dashboard-security-card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h1 className="buzzz-dashboard-security-title">Two-factor Authentication</h1>
                  <p className="mt-3 buzzz-dashboard-security-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                    <br />
                    pellentesque massa tellus ac augue.
                  </p>
                </div>

                <div className="buzzz-dashboard-security-button mt-4">
                  <Button title="Enable" className="security-enable" />
                </div>
              </div>

              <hr className="buzzz-dashboard-security-hr" />

              <div className="d-flex justify-content-between">
                <div>
                  <h2 className="buzzz-dashboard-security-subtitle">Headline label</h2>
                  <p className="buzzz-dashboard-security-paragraph">Subtitle text</p>
                </div>

                <div className="buzzz-dashboard-security-button mt-1">
                  <Button title="Setup" className="security-setup" />
                </div>
              </div>

              <hr className="buzzz-dashboard-security-hr" />

              <div className="d-flex justify-content-between">
                <div>
                  <h2 className="buzzz-dashboard-security-subtitle">Authentication app</h2>
                  <p className="buzzz-dashboard-security-paragraph">
                    Google auth or two password app
                  </p>
                </div>

                <div className="buzzz-dashboard-security-button mt-1">
                  <Button title="Setup" className="security-setup" />
                </div>
              </div>

              <hr className="buzzz-dashboard-security-hr" />

              <div className="d-flex justify-content-between">
                <div>
                  <h2 className="buzzz-dashboard-security-subtitle">SMS Recovery</h2>
                  <p className="buzzz-dashboard-security-paragraph">
                    Your phone number or something
                  </p>
                </div>

                <div className="buzzz-dashboard-security-button mt-1">
                  <Button title="Setup" className="security-setup" />
                </div>
              </div>
            </div>
          </div>

          <div className="card buzzz-dashboard-security-card mt-4">
            <div className="card-body">
              <div className="row">
                <div className="col-md-7">
                  <div>
                    <h1 className="buzzz-dashboard-security-title">Password</h1>
                    <p className="mt-3 buzzz-dashboard-security-paragraph">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo pellentesque
                      massa tellus ac augue. Lectus arcu at in in rhoncus malesuada ipsum turpis.
                    </p>
                  </div>
                  <div>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}
                      innerRef={formikRef}
                    >
                      {(props) => {
                        // eslint-disable-next-line max-len, operator-linebreak
                        const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
                          props;
                        return (
                          <form onSubmit={handleSubmit}>
                            <div className="my-3 security-password-input-field">
                              <InputField
                                label="Current Password"
                                name="oldPassword"
                                type="password"
                                id="oldPassword"
                                placeholder="Current Password"
                                value={values.oldPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errors={errors}
                                touched={touched}
                              />
                            </div>

                            <div className="my-3 security-password-input-field">
                              <InputField
                                label="New Password"
                                name="password"
                                type="password"
                                id="password"
                                placeholder="New Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errors={errors}
                                touched={touched}
                              />
                            </div>

                            <div className="my-3 security-password-input-field">
                              <InputField
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errors={errors}
                                touched={touched}
                              />
                            </div>

                            <div className="my-3 mt-4 d-flex justify-content-end">
                              <div className="d-">
                                <Button
                                  title="Save"
                                  className="security-save-password"
                                  loading={isLoading}
                                />
                              </div>
                            </div>
                          </form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
                <div className="col-md-5">
                  <div
                    className="card buzzz-dashboard-security-card"
                    style={{ background: '#F7FAFC' }}
                  >
                    <div className="card-body">
                      <h3 className="buzzz-dashboard-security-h3">Rules for password</h3>
                      <div className="buzzz-dashboard-security-info mt-4">
                        <p>
                          To create a new password, you have to meet all the following requirements:
                        </p>
                        <ul className="mt-4">
                          <li>Minimum 8 characters</li>
                          <li>At least one special character</li>
                          <li>At least one number</li>
                          <li>Can`t be the same as the previous</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 mt-xl-0 mt-4">
          <div className="card buzzz-dashboard-security-card">
            <div className="card-body">
              <div>
                <img src="../../images/device.png" alt="device" />
                <div className="mt-4">
                  <h1 className="buzzz-dashboard-security-title">Devices</h1>
                  <p className="buzzz-dashboard-security-paragraph mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <div className="buzzz-dashboard-security-button mt-4">
                  <Button title="Sign out from all devices" className="security-device" />
                </div>
              </div>

              <hr className="buzzz-dashboard-security-hr" />

              <div>
                {devicesArray.map((value) => (
                  <div className="security-active-devices" key={value.id}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div>
                          <img src={value.image} alt="phone" />
                        </div>

                        <div className="mx-2">
                          <h1>{value.name}</h1>
                          <p>
                            {value.location}
                            &#x2022;
                            {value.date}
                          </p>
                        </div>
                      </div>

                      <div className="security-active-devices-dot" />
                    </div>
                    <hr className="buzzz-dashboard-security-hr" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
