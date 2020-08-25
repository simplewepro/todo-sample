import React from 'react';
import { Input } from 'semantic-ui-react';

export const InputField = ({ field, form, meta, ...rest }) => {
  return <Input {...field} {...rest} />;
};
