//bisa masukkin banyak parameter, dan rest parameter di taruh di akhir
function jumlah(name, ...items) {
    let total = 0
    for (const item of items) {
        total += item;
    }
   console.log(`Total ${name} adalah ${total}`)
    
}

jumlah("Apple", 10,10,10,50,20,25,25);
jumlah("Emas", 200,450,990,510,350);

//Spread Syntax
const arrayValues = [20,20,20,20,20,20];
jumlah("jumlah array", ...arrayValues);// untuk bentuk parameter array, tambahkan titik 3 kali(...)


//total dengan argument, tidak bisa ditambahakan parameter lain
function oldJumlah(){
    //console.info(arguments)
    let total = 0;
    for (const argument of arguments){
        //console.log(argument)
        total += argument;
    }
    console.log(`Total with Arguments adalah ${total}`)
}

oldJumlah(1,2,3,4,5,6)