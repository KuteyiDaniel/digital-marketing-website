"use client"
import { useRef, useState } from 'react';
import styles from './contact-card.module.scss';
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaArrowRightLong } from 'react-icons/fa6';

const ContactCard = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; 
    if (file) {
      setFileName(file.name); 
    }
  };

  return (
    <div className={styles.contact__card__container}>
      <div className={styles.page__width}>
        <div className={styles.contact__card}>
          <div className={styles.contact__text}>
            <header>Contact us</header>
            <p>Get in Touch with Us Today. We&apos;re Here to Help You Take Your Brand to the Next Level</p>
            <div className={styles.contact__options}>
              <div className={styles.contact__option}>
                <CiMail /> <span>hello@assisials.com</span>
              </div>
              <div className={styles.contact__option}>
                <FiPhone /> <span>(239) 555-0108</span>
              </div>
            </div>
          </div>

          <form className={styles.contact__form}>
            <header className={styles.form__header}>Request A Quote</header>

            <div className={styles.input__field__container}>
              <input className={styles.input__field} type="text" placeholder="Full name" required />
              <input className={styles.input__field} type="email" placeholder="Email address" required />
            </div>

            <div className={styles.input__field__container}>
              <input className={styles.input__field} type="text" placeholder="Services" />
              <input className={styles.input__field} type="text" placeholder="Your budget (USD)" />
            </div>

            <textarea className={styles.textarea} placeholder="Tell us about your project"></textarea>

            <div className={styles.attachment}>
              <span>Attach file</span>
              <button
                className={styles.upload__button}
                type="button"
                onClick={handleFileUpload}
              >
                Upload File
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>

            {fileName && (
              <div className={styles.file__name}>
                <p>Selected file: {fileName}</p>
              </div>
            )}

            <button className={styles.request__button}>
              Request A Quote <FaArrowRightLong />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
