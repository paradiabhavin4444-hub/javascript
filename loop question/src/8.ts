const start6: number = Number(prompt("Enter start number:"));
const end6: number = Number(prompt("Enter end number:"));

let sum1: number = 2;

for (let i = start; i <= end; i++) {
  document.writeln(sum1 + " * " + i + " = " + (sum1 * i) + "<br>");
}
