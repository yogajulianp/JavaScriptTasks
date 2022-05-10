//anonymous fungsi ditaruh di variable
//anonim fungsi parlu ditaruh pada variable untuk menjalankannya
const greeting = function (name) {
    console.log(`Hallo ${name}`)
}

greeting("Yoga");
greeting("Prasutiyo");


//anonymous fungsi sebagai parameter
function giveName(callback) {
    callback("Yoga Julian")
}

giveName(greeting);

giveName(function(name){
    console.log(`Selamat datang dan terus berjuang, ${name}`)
})
