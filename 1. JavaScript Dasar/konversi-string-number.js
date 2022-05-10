/* 
parseInt(string)         konveersi string ke number(bilangan bulat)
parseFloat(string)       konversi string ke number (bilangan pecahan)
Number(string)           konversi dari string ke number (bilangan bulat pecahan)
number.toString()        konversi dari number ke String
*/

const value1 = parseInt("1");
const value2 = 1;
const sum = value1 + value2;
console.log(sum);

console.log(parseInt("1.9"));
console.log(parseFloat("1.9"));
console.log(Number("1.9"));

//number ke string
const a = 2;
const b = 3;
const total = a.toString() + b.toString();
console.log(total)

// NaN  artinya Not a number
console.log(parseInt("2salah"));
console.log(parseFloat("2.2yoga"));

console.log(Number("2salah"));
console.log(Number("2.2yoga"));
console.log(Number("salah"));

const angkaPertama = Number("salah");
const totalNumber = angkaPertama + 100;
console.log(totalNumber);

console.log("\n")
//isNaN untuk mengecek apakah ada NaN atau tidak
console.log(angkaPertama);
console.log(isNaN(angkaPertama));
console.log(isNaN(100));
console.log(isNaN(NaN));
