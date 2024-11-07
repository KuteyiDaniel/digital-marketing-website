import styles from './footer.module.scss'
import Image from 'next/image'
import FooterLogo from '/public/png/PHOTO-2024-10-04-11-55-53 3.png'
// import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer className={styles.footer__section}>
      <div className={styles.page__width}>
        <div className={styles.footer__content}>
            <div className={styles.footer__text}>
                <Image src={FooterLogo} alt='logo'/>
                <p>Boost Your Brand with Creative Solutions</p>
                <div className={styles.media__icons}>
                    <a className={styles.icon__container}> <FaFacebookF/> </a>
                    <a className={styles.icon__container}> <FaTwitter/> </a>
                    <a className={styles.icon__container}> <ImInstagram/> </a>
                </div>
            </div>

            
        <div className={styles.footer__items}>
                <div className={styles.footer__item}>
                    <header>Home</header>
                    <a>Lorem</a>
                    <a>Lorem</a>
                    <a>Lorem</a>
                    <a>Lorem</a>
                </div>

                <div className={styles.footer__item}>
                    <header>Services</header>
                    <a>Lorem</a>
                    <a>Lorem</a>
                    <a>Lorem</a>
                    <a>Lorem</a>
                </div>

                <div className={styles.footer__item}>
                    <header>Portfolio</header>
                    <a>Lorem</a>
                    <a>Lorem</a>
                    <a>Lorem</a>
                    <a>Lorem</a>
                </div>
            </div>
        </div>


            <div className={styles.demarcation}/>
            <div className={styles.footer__bottom}>
                <span className={styles.copyright}>©2024 Assisials. All rights reserved</span>
                <div className={styles.policy}>
                    <span>Privacy & Policy</span>
                    <span  className={styles.terms}>Terms and Condition</span>
                </div>
            </div>
      </div>
    </footer>
  )
}

export default Footer