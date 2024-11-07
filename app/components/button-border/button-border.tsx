import Link from 'next/link'; // Import Next.js Link component
import styles from './button-border.module.scss';

interface ButtonBorderProps {
  text: string;
  link: string;
}

const ButtonBorder: React.FC<ButtonBorderProps> = ({ text, link }) => {
  return (
    <Link className={styles.link} href={link}>
      <div className={styles.button__border}>
        {text}
      </div>
    </Link>
  );
};

export default ButtonBorder;
