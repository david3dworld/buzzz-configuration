import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import Image from 'next/image';
import * as Yup from 'yup';
import { Button, InputField, SettingsSwitchCard } from '../../../components';
import queries from '../../../services/queries/profile';
import userQueries from '../../../services/queries/users';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('last name is required'),
  email: Yup.string().required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Address is required'),
});

const Index = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const uploadChange = (e: { target: { files: [any] } }) => {
    const [file] = e.target.files;
    return file;
  };

  const { data } = userQueries.readOne();

  const initialValues = {
    firstName: data?.name.split(' ')[1] || '',
    lastName: data?.name.split(' ')[0] || '',
    email: data?.email || '',
    phoneNumber: data?.phoneNumber || '',
    address: data?.address || '',
  };

  type InitialValues = ReturnType<() => typeof initialValues>;

  const { mutate, isLoading } = queries.update();

  const onSubmit = (values: InitialValues) => {
    const postData = { ...values, name: `${values.lastName} ${values.firstName}` };
    mutate(postData);
  };

  const [profileCheck, setProfileCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);

  const handleProfileCheck = () => {
    setProfileCheck((prev) => !prev);
  };
  const handleEmailCheck = () => {
    setEmailCheck((prev) => !prev);
  };

  return (
    <div className="dashboard-account-settings mx-auto pb-5 mb-4">
      <div className="dashboard-settings">
        <div className="dashbaord-settings-container ">
          <div className="d-flex justify-content-center mt-md-5 mb-4 mt-0">
            <div className="image-upload d-flex justify-content-between">
              <div className="profile-name-img">
                <div className="profile-name-img-con">
                  <Image
                    src="/images/business_img1.png"
                    width={50}
                    height={50}
                    className="profile-dp"
                    alt="profile img"
                  />
                </div>
                <div className="profile-name">
                  <h4>Hakeem Olasupo</h4>
                  <p>PNG or JPG no bigger than 1000px wide and tall.</p>
                </div>
              </div>
              <button
                type="submit"
                className="upload-btn"
                onClick={() => fileRef?.current?.click()}
              >
                <div className="upload d-flex align-items-center">
                  <div className="account-upload-con">
                    <Image
                      src="/images/upload.svg"
                      width={12}
                      height={8}
                      className="profile-dp"
                      alt="profile img"
                    />
                    <input
                      ref={fileRef}
                      onChange={() => uploadChange}
                      multiple={false}
                      type="file"
                      hidden
                    />
                  </div>
                  <h4 className="d-md-block d-none">Upload</h4>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
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
                <div className="row">
                  <div className="col-12">
                    <div className="account-information">
                      <h3>Account Informations</h3>
                    </div>
                  </div>
                </div>
                <div className="row mt-2 account-input-con">
                  <div className="col-6 account-input">
                    <div className="my-1 input-page-form">
                      <InputField
                        label="First Name"
                        name="firstName"
                        type="text"
                        id="firstName"
                        placeholder="John"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        className="security-input-field"
                      />
                    </div>
                  </div>
                  <div className="col-6 account-input">
                    <div className="my-1 input-page-form">
                      <InputField
                        label="Last Name"
                        name="lastName"
                        type="text"
                        id="lastName"
                        placeholder="John"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        className="security-input-field"
                      />
                    </div>
                  </div>
                </div>
                <div className="row account-input-con">
                  <div className="col-6 account-input">
                    <div className="my-1 input-page-form">
                      <InputField
                        label="Email"
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        className="security-input-field"
                      />
                    </div>
                  </div>
                  <div className="col-6 account-input">
                    <div className="my-1 input-page-form">
                      <InputField
                        label="Phone Number"
                        name="phoneNumber"
                        type="text"
                        id="phoneNumber"
                        placeholder="Phone Number"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        className="security-input-field"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="my-1 input-page-form">
                      <InputField
                        label="Address"
                        name="address"
                        type="text"
                        id="address"
                        placeholder="Address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        className="security-input-field"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="my-3 mt-4 d-flex justify-content-center justify-content-md-end ml-auto">
                      <div style={{ width: '200px' }}>
                        <Button title="Save Changes" loading={isLoading} />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
      <div className="show-profile mt-3">
        <div className="d-flex gap-4 flex-md-row flex-column">
          <SettingsSwitchCard
            title="Public profile"
            details="Making your profile public means that anyone on the network will be able to find you."
            checked={profileCheck}
            handleChange={handleProfileCheck}
          />

          <SettingsSwitchCard
            title="Show email address"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            checked={emailCheck}
            handleChange={handleEmailCheck}
          />
        </div>
      </div>
      <div className="delete-account mt-4">
        <div className="del-account">
          <h4>Delete account</h4>
          <div className="d-flex align-items-md-center align-items-start justify-content-between  flex-md-row flex-column">
            <div className="mb-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Commodo pellentesque massa tellus ac augue.
              </p>
            </div>
            <button className="d-flex align-items-center gap-2 curved-btn" type="button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
