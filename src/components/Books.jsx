import React, { useState } from "react";

import { books as bookData } from "../constants/mockData.js";
import BookCards from "./BookCards.jsx";
import SideCard from "./SideCard.jsx";
import styles from "./Books.module.css";
import SearchBox from "./SearchBox.jsx";
// let newLikedList = "";
function Books() {
  const [books, SetBooks] = useState(bookData);
  const [search, setSearch] = useState([]);
  const [liked, setLiked] = useState([]);

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);

      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
    console.log(liked);
  };

  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLocaleLowerCase().includes(search)
      );
      SetBooks(newBooks);
    } else {
      SetBooks(bookData);
    }
  };

  const searchClear = () => {
    if (!search) {
      SetBooks(bookData);
      setLiked(newLikedList);
    }
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
        searchClear={searchClear}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCards
              key={book.id}
              data={book}
              handleLikedList={handleLikedList}
            />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorite</h4>{" "}
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
