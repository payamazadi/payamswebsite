import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
  title?: string,
  children: React.Node
};

const Page = ({ title, children }: Props) => {
  const pageRef = useRef();
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
        { title && <h1 className={styles['page__title']}>{title}</h1>}
        <div className={styles['page__body']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;