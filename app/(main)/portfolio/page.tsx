import Banner from "@/app/components/banner/banner";
import PortfolioBannerImage from "@/public/jpg/laptop-1035345_1280.jpg";
import DigitalMarketingImage from "@/public/png/digital-marketing.png";
import OfferImage from '@/public/png/arrow.png';
import Image from "next/image";
import CallToAction from "@/app/components/cta-card/cta-card";
import styles from './portfolio.module.scss';

interface OfferProps {
    label: string;
  }
  
  interface ApproachStepProps {
    number: string;
    title: string;
    description: string;
  }
  

    const Offer: React.FC<OfferProps> = ({ label }) => (
    <div className={styles.offer}>
      <Image src={OfferImage} alt={`offer-${label}`} />
      <span>{label}</span>
    </div>
  );

  const ApproachStep: React.FC<ApproachStepProps> = ({ number, title, description }) => (
    <div className={styles.content}>
      <header>{`${number}. ${title}`}</header>
      <p>{description}</p>
    </div>
  );

const Portfolio = () => {
  return (
    <div className={styles.portfolio__section}>
      <Banner
        imageSrc={PortfolioBannerImage}
        altText="services-banner-image"
        overlayText="Brand Management"
      />

      <div className={styles.page__width}>
        <div className={styles.portfolio__details}>
          <h1>What we do in Brand Management</h1>
          <p>
            We create memorable brands that are aligned with your business goals. From logo design to full-scale brand strategy, we build brands that last.
          </p>

          <div className={styles.offers__container}>
            <Offer label="Positioning" />
            <Offer label="Strategy" />
            <Offer label="Growth" />
            <Offer label="Identity" />
          </div>
        </div>

        <div className={styles.approach__section}>
          <h1>Our Unique Approach to Brand Management</h1>
          <p>
            At Assisials, we follow a comprehensive and creative approach to ensure your brand not only stands out but thrives in today’s competitive landscape. Here’s a step-by-step breakdown of how we manage and transform brands for success.
          </p>

          <div className={styles.approach__container}>
            <Image src={DigitalMarketingImage} alt="digital-marketing" />
            <div className={styles.approach__content}>
              <ApproachStep 
                number="1"
                title="Strategy & Research" 
                description="We begin by conducting in-depth research and strategic analysis to understand your brand’s unique challenges, goals, and market position. This foundational step helps us define the target audience, competitors, and key trends to develop an actionable brand strategy."
              />
              <ApproachStep 
                number="2"
                title="Brand Identity Creation" 
                description="Next, we bring your brand to life by designing a strong visual and verbal identity. From logos, typography, and color schemes to taglines, messaging, and tone of voice, we create a cohesive brand identity that resonates with your target audience."
              />
            </div>
          </div>

          <div className={`${styles.approach__container} ${styles.reverse}`}>
            <Image src={DigitalMarketingImage} alt="digital-marketing" />
            <div className={styles.approach__content}>
              <ApproachStep 
                number="3"
                title="Positioning" 
                description="Once the brand identity is established, we position your brand in the market with clarity and precision. Our goal is to define your brand’s unique selling proposition (USP) and key differentiators that set you apart from competitors."
              />
              <ApproachStep 
                number="4"
                title="Growth & Evaluation" 
                description="Brand management is an ongoing process. We constantly monitor, refine, and evolve your brand to keep it relevant in an ever-changing marketplace. By tracking performance metrics and consumer behavior, we adjust strategies as needed to maintain your brand’s strength."
              />
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default Portfolio;
