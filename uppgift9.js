/* Lösning till Uppgift 9 – Sammanhängande program. Av Mariam Aljizawi, 2026 */
"use strict";

// Array med objekt som representerar personer
const people = [
  {
    name: "Anna",
    age: 30,
    city: "Sundsvall",
  },
  {
    name: "Sofie",
    age: 45,
    city: "Hudiksvall",
  },
  {
    name: "Markus",
    age: 16,
    city: "Härnösand",
  },
];
// Skriver ut namn, stad och om personen är myndig
function printPersonInfo(person) {
  // Villkor som avgör om personen är myndig (18 år eller äldre)
  if (person.age >= 18) {
    console.log(person.name + " bor i " + person.city + " och är myndig.");
  } else {
    console.log(person.name + " bor i " + person.city + " och är inte myndig.");
  }
}
// Går igenom arrayen med en loop och skriver ut informationen om varje person
for (let i = 0; i < people.length; i++) {
  printPersonInfo(people[i]);
}
