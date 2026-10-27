/* Lösning till Uppgift 3. Skriver ut en kategori baserat på ålder. Av Mariam Aljizawi, 2026 */
"use strict";

const age = 17;

if (age < 18) {
  // om age är mindre än 18
  console.log("barn"); // skriver programmet  "barn"
} else if (age >= 65) {
  // om age är 65 eller högre
  console.log("pensionär"); // skriver programmet då "pensionär"
} else {
  console.log("vuxen"); // om inget av ovanstående stämmer skriv ut "vuxen"
}
