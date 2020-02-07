import React from 'react';

import styles from './index.module.scss';

interface Props {
  children: any;
}

const Component = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Component;
