import React from "react";
import { AiFillHeart } from "react-icons/ai";
import styles from "./BookCard.module.css";

function BookCards({ data, handleLikedList, isLiked }) {
  const { title, author, country, image, language, pages, year } = data;

  // Handle the like/unlike action
  const likeHandler = () => {
    handleLikedList(data, isLiked);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language} </span>
          <span>{pages} </span>
          <span>
            {year} {country}
          </span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <AiFillHeart color={isLiked ? "red" : "white"} fontSize="2rem" />
      </button>
    </div>
  );
}

export default BookCards;
