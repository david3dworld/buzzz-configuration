import React, { Fragment, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  condition: boolean;
}

const RenderIf = (props: IProps) => {
  const { condition, children } = props;

  if (!condition) {
    return null;
  }
  // eslint-disable-next-line
  return <Fragment>{children}</Fragment>;
};

export default RenderIf;
