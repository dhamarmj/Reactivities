import { Field, Form, useField } from "formik";
import React from "react";
import { Label } from "semantic-ui-react";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
}

export default function MyTextInput(props: Props) {
  const [field, meta] = useField(props.name);

  return (
    <>
      {/* this code is supposed to make the field pink on error but it doesnt work for me and i dont know why so  */}
      {/* <Field error={meta.touched && !!meta.error ? 1 : 0}> */}
      <label>{props.label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
      {/* </Field> */}
    </>
    // <Field error={meta.touched && !!meta.error ? 1 : undefined}>
    //   <label>{props.label}</label>
    //   <input {...field} {...props} />
    // </Field>
  );
}
