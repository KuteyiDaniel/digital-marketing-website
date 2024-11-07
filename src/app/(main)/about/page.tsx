import Image from 'next/image'
import styles from './about.module.scss'
import AboutImage from '@/public/png/image (11).png'
import VisionBackgroundImage from "@/public/png/image (16).png"
import IntroSectionBanner from "@/public/png/Rectangle 34624379.png"
import CEOImage from "@/public/png/image (13).png"
import COOImage from "@/public/png/image (14).png"
import CTOImage from "@/public/png/image (12).png"
import ImageWithOverlay from '@/src/components/image-with-overlay/image-with-overlay'

const About = () => {
  return (
    <section className={styles.about__section}>
      {/* <div className={styles.page__width}> */}
      <div className={styles.page__width}>
        <div className={styles.about__us__container}>
          <div className={styles.about__us__text}>
            <header>About Us</header>
            <p>At Assisials, we bring brands to life with bold ideas, making your brand impossible to forget.</p>
          </div>
          <Image alt='about-banner' src={AboutImage}/>
        </div>
      </div>

        <ImageWithOverlay
            imageSrc={IntroSectionBanner}
            altText="our mission"
            overlayContent={(
              <div className={`${styles.overlay__content}`}>
               <header>Our Mission</header>
                <div className={styles.overlay__content__text}>
                  <p>
                  Lorem ipsum dolor sit amet consectetur. Mi at at non ut id pharetra aliquam. Morbi sed gravida sit faucibus varius quis quam bibendum vulputate. Amet gravida convallis congue senectus amet nunc eget. Risus neque pellentesque duis suspendisse ut.

                  </p>

                  <p>Amet gravida convallis congue senectus amet nunc eget. Risus neque pellentesque duis suspendisse ut. Morbi sed gravida sit faucibus varius quis quam bibendum vulputate. Lorem ipsum dolor sit amet consectetur. Mi at at non ut id pharetra aliquam. 
                  </p>
                </div>
              </div>
            )}
          />

          <div className={styles.vision__section}>
            <Image src={VisionBackgroundImage} alt='background-image' className={styles.vision__image}/>
            <div className={`${styles.vision__section__overlay} ${styles.overlay__content}`}>
              <header>Our Vision</header>
                <div className={styles.overlay__content__text}>
                  <p>
                    Our vision at Assisials is to become a top marketing agency, recognized globally for our commitment to excellence, creativity, and client success. By making use of innovative strategies and technology, we intend to be among the top 10 most sought-after agencies, shaping the future of brand management and engagement.
                  </p>
                </div>
            </div>
          </div>

          <ImageWithOverlay
            imageSrc={IntroSectionBanner}
            altText="our mission"
            overlayContent={(
              <div className={`${styles.overlay__content} ${styles.regular}`}>
               <header>Our Values</header>
              <div className={styles.overlay__content__text}>
                <p>
                Lorem ipsum dolor sit amet consectetur. Mi at at non ut id pharetra aliquam. Morbi sed gravida sit faucibus varius quis quam bibendum vulputate. Amet gravida convallis congue senectus amet nunc eget. Risus neque pellentesque duis suspendisse ut.

                </p>

                <p>Amet gravida convallis congue senectus amet nunc eget. Risus neque pellentesque duis suspendisse ut. Morbi sed gravida sit faucibus varius quis quam bibendum vulputate. Lorem ipsum dolor sit amet consectetur. Mi at at non ut id pharetra aliquam. 
                </p>
              </div>
              </div>
            )}
          />

          <div className={styles.team__section}>
            <header className={styles.team__section__header}>Our Team</header>
            <div className={styles.team__members}>
              <div className={styles.team__member}>
                <div className={styles.member__image__container}>
                  <Image src={CTOImage} alt='member' className={styles.member__image}/>
                </div>
                <div className={styles.member__position}>
                  {/* CTO */}
                </div>
              </div>

              <div className={styles.team__member}>
                <div className={`${styles.member__image__container} ${styles.center}`}>
                  <Image src={CEOImage} alt='member' className={styles.member__image}/>
                </div>
                <div className={styles.member__position}>
                  {/* CEO */}
                </div>
              </div>

              <div className={styles.team__member}>
                <div className={styles.member__image__container}>
                  <Image src={COOImage} alt='member' className={styles.member__image}/>
                </div>
                <div className={styles.member__position}>
                  {/* COO */}
                </div>
              </div>
            </div>
          </div>
      {/* </div> */}

 
    </section>
      
  )
}

export default About
