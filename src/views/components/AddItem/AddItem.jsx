import React from 'react';
import { Form } from 'semantic-ui-react';
import { Formik, Field } from 'formik';

import { InputField } from '../../UI/form/InputField';

export const AddItem = ({ placeholder, onAdd }) => {
  return (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={({ text }, { resetForm }) => {
        onAdd(text);
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            name="text"
            placeholder={placeholder}
            transparent
            autoComplete="off"
            component={InputField}
          />
        </Form>
      )}
    </Formik>
  );
};
