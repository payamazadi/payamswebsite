// @flow strict
import React from 'react';
import Contacts from '../../Sidebar/Contacts/Contacts';
import { Link } from 'gatsby';
import Copyright from '../../Sidebar/Copyright/Copyright';
import styles from './Meta.module.scss';
import styles2 from '../../Sidebar/Menu/Menu.module.scss';
import { useSiteMetadata } from '../../../hooks';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['meta']}>
      <p className={styles['meta__date']}>Published {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
      <Link className={styles2['menu__list-item-link']}
        activeClassName={styles2['menu__list-item-link--active']} 
        to="/">Home
      </Link>  
      <Contacts contacts={author.contacts} />
      <Copyright copyright={copyright} />
    </div>
  )
}

export default Meta;
