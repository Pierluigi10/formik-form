import React from "react";
import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta, helper] = useField(props);
  console.log("field", field);
  console.log("meta", meta);
  console.log("helper", helper);
  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error} </div>}
      <div></div>
    </>
  );
};

export default CustomInput;
