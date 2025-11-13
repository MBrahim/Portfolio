import React, { useState } from 'react';
import people from './reviews_data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  console.log();
   return (
    <article className='review center'>
      <h4 className='author' style={{ color: 'white', fontSize: '1.5em', marginBottom: '1rem' }}>{name}</h4>
      <p className='info' style={{ color: 'white', fontSize: '1.1em', lineHeight: '1.6' }}>{text}</p>
      <div className='button-container'>
      <button className='prev-btn' onClick={prevPerson} style={{
        background: 'transparent',
        border: 'none',
        color: 'rgb(170, 54, 124)',
        fontSize: '1.5em',
        cursor: 'pointer',
        padding: '0.5rem',
        transition: 'all 0.3s ease'
      }}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={nextPerson} style={{
        background: 'transparent',
        border: 'none',
        color: 'rgb(170, 54, 124)',
        fontSize: '1.5em',
        cursor: 'pointer',
        padding: '0.5rem',
        transition: 'all 0.3s ease'
      }}>
        <FaChevronRight />
      </button>
    </div>
    </article>
  );
};

export default Review;