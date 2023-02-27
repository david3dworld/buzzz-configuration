import React, { Fragment } from 'react';
import { Button, Header } from '../components';

const NotFound = () => {
  return (
    <Fragment>
      <Header title="Buzzz | 404" />
      <div className="buzzz-notfound-container">
        <div className="app-container">
          <div className="d-flex justify-content-between notfound-content">
            <div className="">
              <h1>404 Error</h1>
              <p>
                Sorry, the page you are looking for doesn’t exist or has been moved. Here are some
                helpful links.
              </p>
              {/* <div>
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
                        <div className="mt-5">
                          <InputField
                            name="search"
                            type="text"
                            id="search"
                            value={values.search}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                            className="notfound_input"
                            placeholder="Search our site"
                          />
                        </div>
                      </form>
                    );
                  }}
                </Formik>
              </div> */}
              <div style={{ marginTop: '20px', maxWidth: '200px' }}>
                <Button title="Take me home" />
              </div>
            </div>
            <div className="d-none d-lg-block">
              <img src="../../../images/error.png" alt="error" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
