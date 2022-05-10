
const nilai = 80;
let ucapan;

if (nilai >= 77) {
    ucapan = "Selamat Anda Lulus";
} else {
    ucapan = "Silahkan coba lagi";
}

console.log(ucapan)

//Ternary Operator
ucapan = nilai >= 77 ? "Selamat Anda Lulus" : "Silahkan Coba Lagi";
console.log(ucapan)