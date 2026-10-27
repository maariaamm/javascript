/* Lösning till Uppgift 4. Skriver ut heltal från 1 till 20. kodblocket under skriver ut endast jämna tal. Av Mariam Aljizawi, 2026 */
"use strict";

// programmet skriver ut alla tal från 1-20
for (let number = 1; number <= 20; number++) {
  console.log(number);
}

//programmet skriver endast ut jämna tal
for (let number = 1; number <= 20; number++) {
  if (number % 2 === 0) {
    // kontrollerar så att modulo är 0, stämmer det så är det ett jämnttal
    console.log(number);
  }
}
