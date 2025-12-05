"use strict";
const start5 = Number(prompt("Enter start number:"));
const end5 = Number(prompt("Enter end number:"));
let num = 5000;
let count = 0;
for (; num > 0;) {
    num = Math.floor(num / 10);
    count = count + 1;
}
document.writeln(num);
