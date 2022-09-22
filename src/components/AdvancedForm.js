import { Formik } from "formik";

const AdvancedForm = () => {
  return (
    <Formik initialValues={{ name: "jared" }}>
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
