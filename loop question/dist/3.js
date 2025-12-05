"use strict";
const start = Number(prompt("Enter start number:"));
const end = Number(prompt("Enter end number:"));
for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        document.writeln(i);
    }
}
