import Image, { StaticImageData } from 'next/image';
import styles from './image-with-overlay.module.scss';

interface ImageWithOverlayProps {
  imageSrc: StaticImageData | string; 
  altText: string;
  overlayContent: React.ReactNode; 
}

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({ imageSrc, altText, overlayContent }) => {
  return (
    <section className={styles.imageWithOverlay}>
      <Image src={imageSrc} className={styles.backgroundImage} alt={altText} />
      <div className={styles.overlay}>
        {overlayContent}
      </div>
    </section>
  );
};

export default ImageWithOverlay;
