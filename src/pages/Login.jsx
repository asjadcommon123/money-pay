import { useFormik } from "formik";
import React from "react";
// import { toast } from "react-hot-toast";

import { loginSchema } from "../validation/Schema";
import ErrorMessage from "../components/ErrorMessage";
import InputField from "../components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const url = "https://testapp1-khaki.vercel.app/login";
      const body = {
        email: formik.values.email,
        password: formik.values.password,
      };
      axios
        .post(url, body, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div className=" flex flex-col justify-center items-center h-screen  lg:p-20">
        {/* {authenticationError && (
          <p className="text-danger-red text-xl font-semibold mb-3">
            Sorry! Email/Password is Incorrect
          </p>
        )} */}
        <form
          onSubmit={formik.handleSubmit}
          className="w-full  p-4 pb-12 rounded-xl md:w-2/4"
        >
          <h1 className="text-2xl font-medium mb-10 w-full text-center text-[#171C33]">
            Log in and start earning
          </h1>
          <InputField
            type="text"
            label="Username"
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
              className="h-16 w-1/2 bg-[#171C33] rounded-lg text-[#fff]  font-medium text-lg mt-10"
            >
              Login
            </button>
          </div>
          <p className="text-center mt-5 font-semibold">
            Don't have an account ?
            <span
              className="cursor-pointer text-blue-sapphire-hover "
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
