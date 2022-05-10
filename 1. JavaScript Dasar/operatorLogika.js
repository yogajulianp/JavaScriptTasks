/*
&&   artinya dan
||   artinya atau
!    artinya kebalikannya
*/

const nilaiUjian = 85;
const nilaiPresensi = 90

const lulusUjian = nilaiUjian > 75;
const lulusPresensi = nilaiPresensi > 80;

const lulus = lulusPresensi && lulusUjian
console.log(lulus);