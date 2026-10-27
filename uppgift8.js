/* Lösning till Uppgift 8 – Objekt. Av Mariam Aljizawi, 2026 */
"use strict";

// Objekt som representerar en bok
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
};
// Skriver ut information om en bok som skickas in som parameter
function printBookInfo(bookToPrint) {
  console.log("Titel: " + bookToPrint.title);
  console.log("Författare: " + bookToPrint.author);
  console.log("Utgivningsår: " + bookToPrint.year);
}

printBookInfo(book);
