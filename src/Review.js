import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const handlePrevPerson = () => {
    if (index <= 0) setIndex(people.length - 1);
    else setIndex(index - 1);
  };

  const handleNextPerson = () => {
    if (index >= people.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  const handleRandomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (index === randomNumber)
      setIndex(randomNumber >= people.length - 1 ? index - 1 : index + 1);
    else setIndex(randomNumber);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleRandomPerson}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
