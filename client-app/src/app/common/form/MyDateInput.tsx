import { Field, Form, useField } from "formik";
import React from "react";
import { Label } from "semantic-ui-react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";

// interface Props {
//   placeholder: string;
//   name: string;
//   label?: string;
// }

export default function MyTextInput(props: Partial<ReactDatePickerProps>) {
  const [field, meta, helpers] = useField(props.name!);

  return (
    <>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => helpers.setValue(value)}
      />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </>
  );
}
