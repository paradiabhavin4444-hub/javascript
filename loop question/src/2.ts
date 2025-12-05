const start2: number = parseInt(prompt("Enter start number:") || "0");
const end2: number = parseInt(prompt("Enter end number:") || "0");

let i: number = start2;

while (i <= end2) {
  document.writeln(i);
  i++;
}
