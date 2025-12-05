const start4: number = Number(prompt("Enter start number:"));
const end4: number = Number(prompt("Enter end number:"));

let sum: number = 0;

for (let i = start4; i <= end4; i++) {
  sum = sum + i;
}

document.write(String(sum));
