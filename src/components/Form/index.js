import React, { useRef } from "react";
import * as Yup from "yup";
import { Form } from "@unform/web";
export default function Index({ onSubmit, schema,children,...rest }) {
  const formRef = useRef(null);

  async function handlerSubmit(data) {
    try {
      formRef.current.setErrors({});
      await schema.validate(data, {
        abortEarly: false,
      });

      await onSubmit(data);
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Form ref={formRef} onSubmit={handlerSubmit} {...rest}>
      {children}
    </Form>
  );
}
