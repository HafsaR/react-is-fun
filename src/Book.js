import React from 'react';

export const Book = ({
    title = "No Title Provided",
    author = "No author",
    pages = 0,
    freeBookmark,
  }) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>pages: {pages} pages</p>
        <p>Free Bookmaek today: {freeBookmark ? " yes" : " no"}</p>
      </section>
    );
  };
  