// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles['author']}>
    <Link to="/" style={{float:"left", paddingRight: "15px", marginBottom:"0px", paddingTop: "20px", width:"128px;"}}>
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="128"
        height="128"
        align="right"
        alt={author.name}
      />
    </Link>

    <div style={{float:"left"}}>
      { isIndex === true ? (
        <div className={styles['author__title']}>
          <Link className={styles['author__title-link']} to="/">{author.name}</Link>
        </div>
      ) : (
        <h2 className={styles['author__title']}>
          <Link className={styles['author__title-link']} to="/">{author.name}</Link>
        </h2>
      )}
      <div className={styles['author__subtitle']}>{author.bio}</div>
    </div>
  </div>
);

export default Author;
