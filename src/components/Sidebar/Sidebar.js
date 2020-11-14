// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from '../Sidebar/Copyright/Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
  simplified?: boolean,
};

const Sidebar = ({ isIndex, simplified }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  let fullMarkup = null;
  if(!simplified){
    fullMarkup = <React.Fragment>
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </React.Fragment>
  }
  
  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        {fullMarkup}
      </div>
    </div>
  );
};

export default Sidebar;
