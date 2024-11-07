"use client"
import { usePathname } from 'next/navigation';
import styles from './navbar.module.scss';
import Image from 'next/image';
import CompanyLogo from "@/public/svg/Assisials-SVGLogo.svg";
import AccordionComponent from '../accordion/accordion';
import Link from 'next/link'; 

const NavigationBar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href ? styles.active : '';
  };

  return (
    <nav className={styles.navigation__section}>
      <AccordionComponent />
      <nav className={styles.navigation__bar}>
        <Link href={'/'}>
          <Image className={styles.company__logo} src={CompanyLogo} alt='company-logo' />
        </Link>
        
        <ul className={styles.navigation__options}>
          <li className={`${styles.option} ${isActive('/about')}`}>
            <Link href="/about">About Us</Link>
          </li>
          <li className={`${styles.option} ${isActive('/services')}`}>
            <Link href="/services">Services</Link>
          </li>
          <li className={`${styles.option} ${isActive('/portfolio')}`}>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className={`${styles.option} ${isActive('/contact-us')}`}>
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>
        
        <Link href="/contact-us">
          <button className={styles.navigation__button}>Book a Free Consultation</button>
        </Link>
      </nav>
    </nav>
  );
};

export default NavigationBar;
