import React from 'react';

import styles from '../../styles/Header.module.css';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="logo"></img>
                </Link>
            </div>
        </div>
    );
};

export default Header;
