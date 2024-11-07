import styles from './service-card.module.scss';
import { ImArrowUpRight2 } from "react-icons/im";
import Image, { StaticImageData } from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData | string; // Allows both static images and URLs
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc }) => {
  return (
      <div className={styles.service}>
        <div className={styles.image__container}>
          {typeof imageSrc === 'string' ? (
            <Image src={imageSrc} alt={`${title} image`} className={styles.service__image} />
          ) : (
            <Image src={imageSrc} alt={`${title} image`} className={styles.service__image} />
          )}
        </div>

        <div className={styles.text__container}>
          <div className={styles.service__detail}>
            <header>{title}</header>
            <p className={styles.detail}>{description}</p>
          </div>
          <div className={styles.arrow__container}>
            <div className={styles.arrow__sub__container}>
              <ImArrowUpRight2 />
            </div>
          </div>
        </div>
      </div>
  );
};

export default ServiceCard;
