import styles from './banner.module.scss';
import Image, { StaticImageData } from 'next/image';

interface BannerProps {
    imageSrc: StaticImageData | string; 
    altText: string;
    overlayText: string;
}

const Banner: React.FC<BannerProps> = ({ imageSrc, altText, overlayText }) => {
  return (
    <div className={styles.banner__container}>
      <Image src={imageSrc} alt={altText} className={styles.banner__image} priority/>
      <div className={styles.banner__overlay}>
        <header>{overlayText}</header>
      </div>
    </div>
  );
}

export default Banner;
