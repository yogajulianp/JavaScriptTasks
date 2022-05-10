//---Membuat fungsi kedalam properti object
/*
function sayHello(name){
    console.log(`Hallo, selamat datang ${name}`)
}

const author = {
    nameAuthor: "Yoga Julian",
    sayGreeting: sayHello
} 
*/

//---Membuat fungsi kedalam properti object
const author = {
    nameAuthor: "Yoga Julian",
    sayGreeting: function (name){
        console.log(`Hallo, selamat datang ${name}`)
    }
}

//author.sayGreeting("Tina");


//--- Menambah Method ke Object
const rumah = {
    tipeTema: "Modern"
}

rumah.ownerGreeting = function (owner){
    console.log(`Selamat telah membangun rumah Quran, ${owner}`)
}

//console.log("object rumah : ",rumah);
rumah.ownerGreeting("Yoga Julian");


 