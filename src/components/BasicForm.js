import { useFormik } from "formik";

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPAssword: "",
    },
  });

  console.log(formik);
  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      <label htmlFor="age">age</label>
      <input
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="age"
        type="age"
        placeholder="Enter your age"
      />{" "}
      <label htmlFor="password">password</label>
      <input
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="password"
        type="password"
        placeholder="Enter your password"
      />{" "}
      <label htmlFor="confirmPassword">confirm ypur Password</label>
      <input
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="confirmPassword"
        type="confirmPassword"
        placeholder="confirm your Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
