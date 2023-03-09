import { useFormik } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import InputField from '../components/Input';
import Loading from '../components/loader/Loading';
import { userRegister } from '../redux/authSlice';
import { registrationSchema } from '../validation/Schema';
import './pages.css';
const Registration = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      cdf: '',
      dob: '',
      gender: '',
      password: '',
      confirmPassword: '',
      whatsapp: '',
    },
    validationSchema: registrationSchema,
    onSubmit: () => {
      const body = {
        name: formik.values.name,
        email: formik.values.email,
        gender: formik.values.gender,
        password: formik.values.password,
        confirmPassword: formik.values.confirmPassword,
      };

      dispatch(userRegister(body)).then((data) => {
        if (data.payload) {
          toast.success('Signup Complete');
          navigate('/dashboard');
        }
      });
    },
  });

  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className=" flex flex-col justify-center items-center pt-5 lg:p-20">
        <h1 className="text-2xl mb-5 font-medium w-full text-center text-[#171C33]">
          Create your registration
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="form w-full  p-4 pb-12 rounded-xl"
        >
          <InputField
            plain
            label="Name/Surname"
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <ErrorMessage>{formik.errors.name}</ErrorMessage>
          ) : null}
          <InputField
            plain
            type="email"
            label="Your Email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
          <div className="flex gap-5">
            <div>
              <InputField
                plain
                type="text"
                id="cdf"
                label="CDF"
                name="cdf"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cdf}
              />
              {formik.touched.cdf && formik.errors.cdf ? (
                <ErrorMessage>{formik.errors.email}</ErrorMessage>
              ) : null}
            </div>
            <div>
              <InputField
                type="date"
                plain
                label="Date of Birth"
                id="dob"
                name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <ErrorMessage>{formik.errors.dob}</ErrorMessage>
              ) : null}
            </div>
          </div>
          <InputField
            plain
            type="text"
            id="whatsapp"
            label="Whatsapp"
            name="whatsapp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.whatsapp}
          />
          {formik.touched.whatsapp && formik.errors.whatsapp ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}

          <label for="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
            className="w-full shadow-xl rounded h-12 mb-2 bg-white outline-none"
          >
            <option value="" label="_Select a gender_">
              Select a gender
            </option>
            <option className="cursor-pointer" value="Male">
              Male
            </option>
            <option className="cursor-pointer" value="Female">
              Female
            </option>
            <option className="cursor-pointer" value="Prefer not to say">
              Prefer not to say
            </option>
          </select>
          {formik.touched.gender && formik.errors.gender ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
          <InputField
            type="password"
            id="password"
            plain
            label="Password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}
          <InputField
            type="password"
            id="confirmPassword"
            plain
            label="Confirm Password"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage>
          ) : null}
          <div className="flex justify-center">
            <button
              type="submit"
              className=" px-20 py-3 bg-[#171C33] rounded-lg text-[#fff] font-medium text-lg mt-10"
            >
              {isLoading ? <Loading /> : 'Signup'}
            </button>
          </div>
          <p className="text-center mt-5 font-semibold">
            Already have an account ?
            <span
              className="cursor-pointer text-blue-sapphire-hover "
              onClick={() => navigate('/login')}
            >
              {' '}
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
