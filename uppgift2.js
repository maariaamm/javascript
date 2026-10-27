/* Lösning till Uppgift 2. Skapar variabler och beräknar pris med moms.  Av Mariam Aljizawi, 2026 */

"use strict";

const pris = 150;
const antal = 2;
const totalt = pris + antal;
const totaltPlusMoms = totalt * 1.25; // beräknar totalsumman med en ökning på 25%

console.log(`Pris: ${pris} kr `);
console.log(`Antal: ${antal}`);
console.log(`Totalt: ${totalt} kr `);
console.log(`Totalt inklusive moms: ${totaltPlusMoms} kr `);
