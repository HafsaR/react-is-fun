import React from "react";
import { render } from "react-dom";
import {Library} from './Library';

let bookList = [
  { title: "the Sun also Rises", author: "Ernest Hemingway", pages: 260 },
  { title: "White teeth", author: "Zadie smith", pages: 480 },
  { title: "Harry potter", author: "Bloomsbury", pages: 560 },
  { title: "Hunger", author: "Roxan Gay", pages: 320 },
  { title: "Hunger", pages: 320 },
  { title: "Hunger", author: "Roxan Gay" },
];


render(<Library books={bookList} />, document.getElementById("root"));
