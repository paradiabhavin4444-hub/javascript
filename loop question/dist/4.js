"use strict";
const start3 = Number(prompt("Enter start number:"));
const end3 = Number(prompt("Enter end number:"));
for (let i = start3; i <= end3; i++) {
    if (i % 2 !== 0) {
        document.writeln(i);
    }
}
