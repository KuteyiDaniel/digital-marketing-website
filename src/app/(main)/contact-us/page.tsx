import ContactCard from '@/src/components/contact-card/contact-card'
import CallToAction from '@/src/components/cta-card/cta-card'
import styles from './contact.module.scss'
const Contact = () => {
  return (
    <div className={styles.contact__section}>
      <div className={styles.contact__banner}>Contact Us</div>
      <ContactCard/>
      <CallToAction/>
    </div>
  )
}

export default Contact
