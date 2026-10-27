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
