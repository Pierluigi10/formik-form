import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = () => {
  console.log("submitted");
};

const BasicForm = () => {
  // const formik = useFormik({
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPAssword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  console.log("errors",errors);
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      <label htmlFor="age">age</label>
      <input
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        id="age"
        type="age"
        placeholder="Enter your age"
      />{" "}
      <label htmlFor="password">password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
        placeholder="Enter your password"
      />{" "}
      <label htmlFor="confirmPassword">confirm ypur Password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="confirmPassword"
        type="confirmPassword"
        placeholder="confirm your Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
