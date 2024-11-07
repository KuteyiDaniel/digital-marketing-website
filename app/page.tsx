"use client"
import { useState, useEffect } from 'react';
import styles from './home.module.scss';
import Image from 'next/image';
import SparkImage from "@/public/png/078.png"
import VectorImage from "@/public/png/Vector (3).png"
import VectorImageDark from "@/public/png/Vector (4).png"
import BannerImageOne from "@/public/png/image (8).png"
import BannerImageTwo from "@/public/png/image (10).png"
import BannerImageThree from "@/public/png/image (9).png"
import IntroSectionBanner from "@/public/png/Rectangle 34624379.png"
import ServiceImage from "@/public/png/image (7).png"; 
import Lines from "@/public/png/Lines.png"
import ButtonFill from './components/button-fill/button.fill';
import ButtonBorder from './components/button-border/button-border';
import ServiceCard from './components/service-card/service-card';
import { FaArrowRightLong } from "react-icons/fa6";
import VideoPlayer from './components/video-player/video-player';
import Testimonial from './components/testimonial/testimonial';
import Faq from './components/faq/faq';
import ContactCard from './components/contact-card/contact-card';
import CallToAction from './components/cta-card/cta-card';
import ImageWithOverlay from './components/image-with-overlay/image-with-overlay';
import Link from 'next/link';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const services = [
    {
      title: "Digital Marketing",
      description: "We craft data-driven digital marketing strategies that boost your online presence and connect you with your audience.",
      imageSrc: ServiceImage,
    },
    {
      title: "Brand Management",
      description: "Our team helps you build and maintain a strong, consistent brand identity that stands out in a crowded market.",
      imageSrc: ServiceImage,
    },
    {
      title: "Project Management",
      description: "We oversee every aspect of your project, ensuring seamless execution and timely delivery of high-impact campaigns.",
      imageSrc: ServiceImage,
    },
  ]
  return (
    <div className={styles.container}>
        {/* <div className={styles.page__width}> */}
        <section className={styles.banner__section}>
          <div className={styles.banner__text__container}>
            <div className={styles.company__description}>
              <header>Boost Your <span className={styles.highlight}> Brand</span> with Creative Solutions</header>
              <Image src={SparkImage} alt='spark-image' className={styles.spark__image}/>
            </div>
            <p className={styles.brand__description}>
              Unlock the potential of your business with expert PR, digital marketing, 
              talent, and brand management services.
            </p>
            <div className={styles.cta__buttons}>  
              <Link href="/contact-us">
                <button className={styles.book__button}>Book a Free Consultation</button>
              </Link>
              <ButtonBorder link="/services" text='View Our Services'/>
            </div>
          </div>

          <div className={styles.banner__image__container}>
            <Image src={BannerImageOne} alt='#' className={`${styles.banner__image} ${styles.top__center}`}/>
            <Image src={BannerImageTwo} alt='#' className={`${styles.banner__image} ${styles.bottom__right}`}/>
            <Image src={BannerImageThree} alt='#' className={`${styles.banner__image} ${styles.bottom__center}`}/>
            <div className={styles.banner__image__background}>
              <Image
                src={isDarkMode ? VectorImageDark : VectorImage }
                alt="vector-image"
                className={styles.vector__image}
              />
            </div>
          </div>
          </section>

          <ImageWithOverlay
            imageSrc={IntroSectionBanner}
            altText="get to know us"
            overlayContent={(
              <div className={styles.overlay__content}>
                  <header>Get To Know Us</header>
                  <p className={styles.mb}>
                    At The Assisials Agency, we are passionate about helping brands reach new heights through creative and strategic solutions.
                    With expertise in Public Relations, Digital Marketing, Talent Management, and Brand Development, we blend innovation with professionalism
                    to drive impactful results
                  </p>

                  <p className={styles.mb}>
                    Our team of dedicated professionals works closely with clients to understand their unique goals and challenges, offering tailored strategies
                    that make a lasting difference. From growing your brand presence to managing successful campaigns, we are your trusted partner in building a
                    strong and recognizable brand.
                  </p>
                  <ButtonFill link="/about" text='Learn More About Us'/>
              </div>
            )}
          />

          <section className={styles.service__section}>
            <div className={styles.page__width}>
              <header className={styles.service__header}>Our Services</header>
              <div className={styles.service__container}>
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    imageSrc={service.imageSrc}
                  />
                ))}
              </div>
              <div className={styles.service__button__container}>
                <Link href="/services">
                <button className={styles.service__button}>See All Services <FaArrowRightLong/> </button>
                </Link>  
              </div>    
            </div> 
          </section>

          <section className={styles.portfolio__section}>
            <div className={styles.page__width}>
              <header className={styles.portfolio__header}>Our Work in Action</header>
              <p>Explore our portfolio of innovative projects that have transformed brands and elevated businesses. See how our creative solutions deliver real results</p>
              <ButtonFill link="/portfolio" text='View Past Projects'/>
              <VideoPlayer/>
            </div>
          </section>

          <section className={styles.testimonial__section}>
            <div className={styles.page__width}>
              <header className={styles.testimonial__header}>Hear from our Happy Clients</header>
              <p className={styles.testimonial__brief}>Hear What Our Clients Have to Say About Working With Us. Discover the Stories Behind Our Success</p>
              <Testimonial/>     
            </div>
          </section>

          <section className={styles.faq__section}>
            <Image src={Lines} className={styles.lines} alt='lines'/>
            <div className={styles.page__width}>
              <header className={styles.faq__header}>Frequently asked questions</header>
              <p className={styles.faq__brief}>Discover answers to your questions and learn more about how we can assist you.</p>
              <Faq/>
            </div>
          </section>

          <ContactCard/>
          <CallToAction/>

        {/* </div> */}
    </div>
  );
}
