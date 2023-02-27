import Head from 'next/head';
import React from 'react';

interface IProps {
  title?: string;
}

const Header = (props: IProps) => {
  const { title } = props;
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Header;
