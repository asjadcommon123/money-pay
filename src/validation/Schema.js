import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

export const registrationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  dob: Yup.string().required("DOB is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Passwords do not match"),
});

export const profileSchema = Yup.object({
  firstName: Yup.string()
    .max(100, "Must be 100 characters or less")
    .required("First name is required"),
  lastName: Yup.string()
    .max(100, "Must be 100 characters or less")
    .required("Last name is required"),
  company: Yup.string()
    .max(100, "Must be 100 characters or less")
    .required("Comapany name is required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

export const summarySchema = Yup.object({
  firstName: Yup.string()
    .max(100, "Must be 100 characters or less")
    .required("First name is required"),
  lastName: Yup.string()
    .max(100, "Must be 100 characters or less")
    .required("Last name is required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});
