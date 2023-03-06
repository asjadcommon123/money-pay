import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import InputField from '../components/Input';
import Loading from '../components/loader/Loading';
import { loginSchema } from '../validation/Schema';
import './pages.css';
const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [authenticationError, setAuthenticationError] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setIsloading(true);
      const url = 'https://testapp1-khaki.vercel.app/login';
      const body = {
        email: formik.values.email,
        password: formik.values.password,
      };
      axios
        .post(url, body, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .then(function (response) {
          const token = response.data.access_token;
          localStorage.setItem('token', JSON.stringify(token));
          toast.success('logged In');
          setIsloading(false);
          navigate('/dashboard');
        })
        .catch((res) => {
          setErrorMessage(res.response.data.detail);
          setAuthenticationError(true);
          setTimeout(() => {
            setAuthenticationError(false);
            setIsloading(false);
          }, 1200);
        });
    },
  });
  return (
    <div className="h-screen">
      <div className="form flex flex-col justify-center items-center h-screen  lg:p-20">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full  p-4 pb-12 rounded-xl md:w-2/4"
        >
          <h1 className="text-2xl font-medium mb-10 w-full text-center text-[#171C33]">
            Log in and start earning
          </h1>
          {authenticationError && (
            <p className="text-danger-red text-center text-sm font-semibold mb-3">
              {errorMessage}
            </p>
          )}
          <InputField
            type="text"
            label="Email"
            plain
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
          <InputField
            type="password"
            plain
            label="Password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}
          <div className="flex justify-center">
            <button
              type="submit"
              className="h-12 w-1/2 bg-[#171C33] rounded-lg text-[#fff]  font-medium text-lg mt-10 flex justify-center items-center"
            >
              {isLoading ? <Loading /> : 'Login'}
            </button>
          </div>
          <p className="text-center mt-5 font-semibold">
            Don't have an account ?
            <span
              className="cursor-pointer text-blue-sapphire-hover "
              onClick={() => navigate('/signup')}
            >
              {' '}
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
