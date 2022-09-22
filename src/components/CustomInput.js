import React from 'react'
import { useField } from "formik";

const CustomInput=({label, ...props}) => {
  const [field, meta, helper] = useField(props);
  console.log("field",field)
  console.log("meta", meta)
  console.log("helper", helper)
  return (
    <>
    <label>{label}</label>
    <input {...field} {...props} />
    </>
  )
}

export default CustomInput