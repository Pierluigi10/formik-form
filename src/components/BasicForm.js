import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const BasicForm = () => {
  // const formik = useFormik({
  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPAssword: "",
    },
    validationSchema: basicSchema,
  });

  return (
    <form autoComplete="off">
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
