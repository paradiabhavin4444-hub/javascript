let P: number = 10;
let rv: number = 0.23; 
let nv: number = 8;     
let tv: number = 25;   

let A: number = P * Math.pow((1 + rv / nv), nv * tv);
console.log("Amount = " + A);
