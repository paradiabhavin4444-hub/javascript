const start5: number = Number(prompt("Enter start number:"));
const end5: number = Number(prompt("Enter end number:"));

let num: number = 5000;
let count: number = 0;

for (; num > 0; ) {
  num = Math.floor(num / 10);
  count = count + 1;
}
document.writeln(num); 
