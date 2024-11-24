import React, { useState, useEffect } from "react";

import { books as bookData } from "../constants/mockData.js";
import BookCards from "./BookCards.jsx";
import SideCard from "./SideCard.jsx";
import styles from "./Books.module.css";
import SearchBox from "./SearchBox.jsx";

function Books() {
  const [books, setBooks] = useState(bookData);
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState([]);

  // Handle adding/removing a book from the liked list
  const handleLikedList = (book, status) => {
    if (status) {
      // Remove the book from liked list
      setLiked(liked.filter((i) => i.id !== book.id));
    } else {
      // Add the book to liked list
      setLiked([...liked, book]);
    }
  };

  // Search handler to filter books based on search query
  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      setBooks(newBooks);
    } else {
      // If search is empty, show all books
      setBooks(bookData);
    }
  };

  // Reset books and keep liked list when search is cleared
  const searchClear = () => {
    if (!search) {
      setBooks(bookData);
    }
  };

  // Effect to handle search and liked state properly
  useEffect(() => {
    searchHandler();
  }, [search]);

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
          {books.map((book) => {
            const isLiked = liked.some((likedBook) => likedBook.id === book.id);
            return (
              <BookCards
                key={book.id}
                data={book}
                isLiked={isLiked}
                handleLikedList={handleLikedList}
              />
            );
          })}
        </div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorite</h4>
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
