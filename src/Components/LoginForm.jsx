import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (values) => {
    try {
      await onSubmit(values); 
      navigate('/user-dashboard');
    } catch (error) {
      setLoginError('Invalid email or password');
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleLogin(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
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
          {loginError && <div className="text-danger mb-3">{loginError}</div>}
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
