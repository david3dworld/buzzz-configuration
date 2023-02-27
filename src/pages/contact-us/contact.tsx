import React, { Fragment } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button, ContactUsCard, Header, InputField, TextArea,
} from '../../components';
import { contactUsArray } from '../../utils/static';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email'),
  fullName: Yup.string(),
  message: Yup.string(),
  phone: Yup.string(),
  subject: Yup.string(),
});

const initialValues = {
  email: '',
  fullName: '',
  phone: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const onSubmit = () => {};

  return (
    <Fragment>
      <Header title="Buzzz | Contact us" />

      <div className="buzzz-contact-us-form-page">
        <div className="app-container">
          <div className="search-con">
            <InputField type="text" name="search" placeholder="Search help" />
          </div>

          <div className="title-con py-3">
            <h3 className="mb-3">Contact</h3>

            <p>
              You can find answers quickly using the search bar above or visiting our
              {' '}
              <a href="/">Help Center</a>
              .
            </p>

            <p className="pt-3">
              If you can&lsquo;t find the answer you need, get in touch with our Support team by
              filling out the form below, or scroll down for more contact options.
            </p>
          </div>

          <div className="form">
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
                        placeholder="Full Name"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      />
                    </div>

                    <div className="my-3 input-page-form">
                      <InputField
                        name="phone"
                        type="tel"
                        id="phone"
                        placeholder="Phone Number"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      />
                    </div>

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

                    <div className="my-3 input-page-form">
                      <InputField
                        name="subject"
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      />
                    </div>

                    <div className="my-3">
                      <TextArea
                        name="message"
                        id="message"
                        placeholder="Tell us what’s up"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      />
                    </div>

                    <div className="form-info my-2">
                      <p>
                        You may upload multiple attachments totaling up to 50 Mb. If your document
                        includes a full credit card number, please partially or fully obscure the
                        number prior to uploading.
                      </p>
                    </div>

                    <div className="my-3 mt-4">
                      <Button title="Submit" />
                    </div>
                  </form>
                );
              }}
            </Formik>
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
      </div>
    </Fragment>
  );
};

export default Contact;
