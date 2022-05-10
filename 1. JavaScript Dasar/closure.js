//membuat closure
function createPenjumlah(value){
    const user = "Yoga Julian"

    function penjumlah(param){
        console.log(user)
        return value + param
    }

    return penjumlah;
}

const jumlahDua = createPenjumlah(2)
// function jumlahDua(param){
//    console.log("Yoga Julian");
//    return 2 + param;

console.log(jumlahDua(10));
console.log(jumlahDua(15));

const jumlahDuaPuluh = createPenjumlah(20);
// function jumlahDua(param){
//    console.log("Yoga Julian");
//    return 20 + param;

console.log(jumlahDuaPuluh(10));
console.log(jumlahDuaPuluh(15));