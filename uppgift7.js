/* Lösning till Uppgift 7 – Arrayer och funktioner. Av Mariam Aljizawi, 2026 */
"use strict";

// Räknar ut summan av alla tal i en array och returnerar summan
function calculateSum(numbers) {
  let sum = 0;
  // Går igenom arrayen och lägger till varje tal i summan
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}
// Array med sex tal
const numbers = [5, 8, 3, 10, 6, 10];

// skriver ut summan av talen i arrayen
console.log("Summan är " + calculateSum(numbers));
