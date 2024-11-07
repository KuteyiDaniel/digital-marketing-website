"use client"
import { FaPlus, FaMinus } from 'react-icons/fa6';
import React, { useState } from 'react';
import styles from './faq.module.scss';

const Faq = () => {
  interface FaqQuestion {
    question: string;
    answer: string;
  }

  const FaqQuestions: FaqQuestion[] = [
    {
      question: 'What services does Assisials Agency provide?',
      answer: "We offer a wide range of services including Public Relations, Advertising, Digital Marketing, Talent Management, Brand Management, and Project Management."
    },
    {
      question: 'How do I get started with a project at Assisials Agency?',
      answer: "To get started, simply contact us through our website or by phone. Our team will schedule a consultation to discuss your needs and outline a plan tailored to your objectives."
    },
    {
      question: 'Can I customize services to fit my business needs?',
      answer: "Absolutely! We understand that each business is unique, so we offer flexible service packages that can be tailored to meet your specific requirements and goals."
    },
    {
      question: 'How long does it take to complete a typical project?',
      answer: "Project timelines vary depending on the scope and complexity, but most projects are completed within 4 to 12 weeks. We always work closely with you to set realistic deadlines."
    },
    {
      question: 'What industries do you specialize in?',
      answer: "We specialize in a variety of industries including entertainment, tech, fashion, real estate, and healthcare, providing targeted strategies for each sector."
    },
    {
      question: 'How can I track the progress of my project?',
      answer: "We provide regular updates and reports, and you will have access to a dedicated project manager who will ensure that you are kept informed every step of the way."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Close if already open, otherwise open
  };

  return (
    <div className={styles.faq__container}>
      {FaqQuestions.map((data, index) => {
        const isOpen = activeIndex === index; // Check if the current FAQ is open

        return (
          <div key={index} className={styles.faq}>
            <div 
              className={styles.faq__question} 
              onClick={() => toggleFaq(index)}
            >
              <p>{data.question}</p>
              {isOpen ? <FaMinus /> : <FaPlus />}
            </div>

            <div 
              className={`${styles.faq__answer} ${isOpen ? styles.visible : styles.hidden}`}
            >
              {data.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
