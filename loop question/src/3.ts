const start: number = Number(prompt("Enter start number:"));
const end: number = Number(prompt("Enter end number:"));

for (let i = start; i <= end; i++) {
  if (i % 2 === 0) {
    document.writeln(i);
  }
}
