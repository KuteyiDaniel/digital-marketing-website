import { useState } from 'react';
import Slider from '../slider/slider';
import styles from './testimonial.module.scss'

const Testimonial = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const testimonialInformation = [
        {
            customerName: "Don Jazzy",
            customerFeedback: "Working with The Assisials Agency transformed our brand, taking our marketing to new heights with creative strategies and delivering results beyond our expectations.",
            customerPosition: "CEO of MAVIN Records"
        },
        {
            customerName: "Chinedu Okafor",
            customerFeedback: "The team at The Assisials Agency exceeded all our expectations. Their attention to detail and innovative approach helped us capture a larger audience and boost our sales significantly.",
            customerPosition: "Marketing Director at Apex Innovations"
        },
        {
            customerName: "Aisha Bello",
            customerFeedback: "I couldn't be happier with the results from The Assisials Agency. They provided tailored marketing solutions that elevated our online presence and brought us closer to our customers.",
            customerPosition: "Founder of Bello Enterprises"
        },
        {
            customerName: "Tunde Alabi",
            customerFeedback: "Assisials helped us rebrand and create an engaging digital marketing strategy that has been pivotal in our business growth. The team's professionalism and expertise are top-notch.",
            customerPosition: "COO of Alabi Ventures"
        }
    ];
    

    type TestimonialData = {
        customerFeedback: string;
        customerName: string;
        customerPosition: string;
      };
      
      const renderTextSlot = (data: TestimonialData) => (
        <div className={styles.testimonial__slide__background}>
          <div className={styles.testimonial__slide}>
            <p className={styles.feedback}>{data.customerFeedback}</p>
            <div className={styles.customer__information}>
              <p>{data.customerName}</p>
              <span>{data.customerPosition}</span>
            </div>
          </div>
        </div>
      );
      
    
  return (
    <div className={styles.testimonial__container}>
           <Slider
            items={testimonialInformation} 
            itemsPerSlide={1}
            infinite={true} // Enable infinite scrolling
            automatic={true} // Automatic sliding
            showArrows={true} // Show arrows for navigation
            showDots={true} // Show dots for navigation
            active={activeSlide} // Active slide index
            itemSlot={renderTextSlot as (item: object) => React.ReactNode} 
            onActiveChange={setActiveSlide}
            slideDuration={0.5} // Slide transition duration (in seconds)   
        />
    </div>
  )
}

export default Testimonial
