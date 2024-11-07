import Faq from '@/src/components/faq/faq';
import styles from './services.module.scss';
import Banner from '@/src/components/banner/banner';
import ServiceBannerImage from "@/public/jpg/workplace-5517744_1280.jpg";

import ServiceCard from '@/src/components/service-card/service-card';
import ServiceImage from "@/public/png/image (7).png"; 

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
  {
    title: "Advertising",
    description: "Our mobile development services provide user-friendly, feature-rich apps across all platforms. We ensure seamless integration and usability.",
    imageSrc: ServiceImage,
  },
  {
    title: "Talent Management",
    description: "Our mobile development services provide user-friendly, feature-rich apps across all platforms. We ensure seamless integration and usability.",
    imageSrc: ServiceImage,
  },
  {
    title: "Public Relations",
    description: "We craft and execute strategic PR campaigns that enhance your brand’s reputation, ensuring you connect with your audience in meaningful ways across all media platforms.",
    imageSrc: ServiceImage,
  },
];

const Services = () => {
  return (
    <section className={styles.service__section}>
      <Banner
        imageSrc={ServiceBannerImage}
        altText="services-banner-image"
        overlayText="Raising and Improving Brands, Making Connections"
      />

      <div className={styles.page__width}>
        <p className={styles.service__text}>
        At Assisials Agency, we blend creativity and strategy to deliver bespoke solutions.
        Our wide range of services—from Public Relations to Project Management—ensures that your brand reaches new heights in a dynamic marketplace.
        </p>
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

        <section className={styles.faq__section}>
          <div className={styles.page__width}>
            <header className={styles.faq__header}>
              Frequently asked questions
            </header>
            <p className={styles.faq__brief}>
              Discover answers to your questions and learn more about how we can assist you.
            </p>
            <Faq />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
