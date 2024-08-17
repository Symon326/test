import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    biography: Yup.string().required('Required'),
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '30rem' }}>
        <h2 className="text-center mb-4">Author Form</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm(); // Clear form fields after submission
          }}
          enableReinitialize // Allows form to reset when initialValues change
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <Field name="name" className="form-control" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="birthDate">Birth Date</label>
                <Field name="birthDate" type="date" className="form-control" />
                <ErrorMessage name="birthDate" component="div" className="text-danger" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="biography">Biography</label>
                <Field name="biography" as="textarea" className="form-control" rows="4" />
                <ErrorMessage name="biography" component="div" className="text-danger" />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn btn-primary w-100">
                {initialValues.name ? 'Update Author' : 'Add Author'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AuthorForm;
