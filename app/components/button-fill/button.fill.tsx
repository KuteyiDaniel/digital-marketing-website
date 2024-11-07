import Link from 'next/link'; // Import Next.js Link component
import styles from './button-fill.module.scss';

interface ButtonFillProps {
  text: string;
  icon?: React.ReactNode;
  link: string; 
}

const ButtonFill: React.FC<ButtonFillProps> = ({ text, icon, link }) => {
  return (
    <Link className={styles.link} href={link}>
      <div className={styles.button__fill}> 
        {text}
        {icon && <span className={styles.icon}>{icon}</span>} 
      </div>
    </Link>
  );
};

export default ButtonFill;
