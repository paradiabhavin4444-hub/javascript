"use strict";
const start4 = Number(prompt("Enter start number:"));
const end4 = Number(prompt("Enter end number:"));
let sum = 0;
for (let i = start4; i <= end4; i++) {
    sum = sum + i;
}
document.write(String(sum));
