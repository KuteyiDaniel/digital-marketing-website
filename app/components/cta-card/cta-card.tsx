import ButtonFill from '../button-fill/button.fill'
import styles from './cta-card.module.scss'
import Image from 'next/image'
import SupportImage from '@/public/png/support.png'
const CallToAction = () => {
  return (
    <div className={styles.cta__container}>
      <div className={styles.page__width}>
        <div className={styles.cta__content}>
            <div className={styles.image__container}>
              <Image src={SupportImage} alt='support-image'/>
            </div>

            <div className={styles.text__container}>
                <header>Ready to Get Started? <br/> Let’s Collaborate!</header>
                <p>Our team is ready to bring your ideas to life with expert insights and tailored solutions.</p>
                <ButtonFill link="/contact-us" text='Book a Free Consultation'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
