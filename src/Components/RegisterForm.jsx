import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterForm = ({ onSubmit }) => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await onSubmit(values);
          setIsRegistered(true); 
          setTimeout(() => {
            setIsRegistered(false); 
          }, 4000); 
          resetForm(); 
        } catch (error) {
          console.error('Registration error:', error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group mb-3">
            <label>Name</label>
            <Field type="text" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <Field type="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <Field type="password" name="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            Register
          </button>
          {isRegistered && (
            <p className="mt-3 text-success text-white">Registration successful! You can now log in.</p>
          )}
        </Form>
      )}
    </Formik>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
