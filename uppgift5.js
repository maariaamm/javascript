/* Lösning till Uppgift 5 – Arrayer. Av Mariam Aljizawi, 2026 */
"use strict";

// Skapar en array med fem maträtter
const dishes = ["Pasta carbonara", "Lasagne", "Köttbullar", "Pizza", "Tacos"];

// Skriver ut hela arrayen
console.log(dishes);

// Skriver ut det första och det sista elementet
console.log(dishes[0]);
console.log(dishes[dishes.length - 1]);
// Lägger till en ny maträtt sist i arrayen
dishes.push("Sushi");
// Tar bort den första maträtten i arrayen
dishes.shift();

// Skriver ut arrayen igen efter förändringarna
console.log(dishes);
