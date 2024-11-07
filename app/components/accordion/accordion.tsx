"use client"
import styles from './accordion.module.scss';
import { useState } from 'react';

const AccordionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navigation}>
      <div
        className={`${styles['navigation__button']} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <span className={styles['navigation__icon']}></span>
      </div>
      <div className={`${styles['navigation__background']} ${isOpen ? styles.open : ''}`}></div>
      <div className={`${styles['navigation__menu']} ${isOpen ? styles.open : ''}`}>
         <ul className={styles.mobile__navigation__options}>
            <li className={styles.option}>About us</li>
            <li className={styles.option}>Services</li>
            <li className={styles.option}>Portfolio</li>
            <li className={styles.option}>Contact</li>
        </ul>  
      </div>
    </div>
  );
};

export default AccordionComponent;
