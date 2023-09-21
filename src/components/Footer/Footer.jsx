import React from 'react';

import styles from '../../styles/Footer.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg';

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="logo"></img>
                </Link>
            </div>
        </section>
    );
};

export default Footer;
