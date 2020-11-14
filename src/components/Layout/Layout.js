// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';


type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage?: string
};

const Layout = ({
  children,
  title,
  description,
  socialImage,
  noIndex
}: Props) => {
  const { author, url, copyright } = useSiteMetadata();
  const metaImage = typeof socialImage !== 'undefined' ? socialImage : author.photo;
  const metaImageUrl = url + metaImage;

  let noIndexMeta;
  if(noIndex) {
    noIndexMeta = <meta name="robots" content="noindex, nofollow" />
  }

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
        {noIndexMeta}
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
