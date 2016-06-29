import React, { PropTypes } from 'react';

import H1 from '../../../../components/H1';
import H2 from '../../../../components/H2';
import JsonDoc from '../../JsonDoc';
import ParameterList from '../../ParameterList';
import ReactMarkdown from 'react-markdown';

import styles from './model.css';

const Model = ({ modelName, spec }) => {
  const model = spec.models.find(m => m.name === modelName);
  return (
    <div>
      <H1>{model.name}</H1>
      {model.description ? <ReactMarkdown source={model.description} className={styles.description} /> : null}
      <H2>Fields</H2>
      {model.fields.map((field, id) => (
        <ParameterList key={id} {...field} />
      ))}
      <JsonDoc baseModel={model.name} spec={spec} includeModel={false} />
    </div>
  );
};
Model.propTypes = {
  modelName: PropTypes.string.isRequired,
  spec: PropTypes.object.isRequired,
};

export default Model;