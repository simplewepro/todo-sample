import React from 'react';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Icon, Form } from 'semantic-ui-react';
import { v4 } from 'uuid';

import { InputField } from '../../UI/form/InputField';

import { addList } from '../../../state/modules/lists';

import './CreateList.styles.scss';

export const CreateList = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        listName: '',
      }}
      onSubmit={({ listName }) => {
        const id = v4();

        dispatch(addList(id, listName));

        history.push(`/lists/${id}`);
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="m-create-list">
          <Field
            name="listName"
            placeholder="Type your first list!"
            component={InputField}
          />

          <Button type="submit" icon color="blue">
            <Icon name="check" />
          </Button>
        </Form>
      )}
    </Formik>
  );
};
