import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.date().required('Required'),
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '30rem' }}>
        <h2 className="text-center mb-4">Book Form</h2>
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
                <label htmlFor="title">Title</label>
                <Field name="title" className="form-control" />
                <ErrorMessage name="title" component="div" className="text-danger" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="author">Author</label>
                <Field name="author" className="form-control" />
                <ErrorMessage name="author" component="div" className="text-danger" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="isbn">ISBN</label>
                <Field name="isbn" className="form-control" />
                <ErrorMessage name="isbn" component="div" className="text-danger" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="publicationDate">Publication Date</label>
                <Field name="publicationDate" type="date" className="form-control" />
                <ErrorMessage name="publicationDate" component="div" className="text-danger" />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn btn-primary w-100">
                {initialValues.isbn ? 'Update Book' : 'Add Book'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookForm;
