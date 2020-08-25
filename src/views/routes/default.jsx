import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Default = () => {
  const lists = useSelector((state) => state.root.lists.all);

  let path = '/create-first-list';

  if (lists.length) {
    path = '/lists';
  }

  return <Redirect to={path} />;
};

export default Default;
