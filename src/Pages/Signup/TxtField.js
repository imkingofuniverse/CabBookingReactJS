import React from "react";
import { ErrorMessage, useField } from "formik";

const TxtField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} />
      <ErrorMessage name={field.name} className="error" />
    </div>
  );
};

export default TxtField;