// const sayGreeting = (name) => {
//     const greeting = `Selamat datang ${name}`;
//     console.log(greeting);
// }

//const sayGreeting = (name) => console.log(`Selamat datang ${name}`);

//const sayGreeting = name => console.log(`Selamat datang ${name}`);

//sayGreeting("Yoga")

// const jumlah = (first, second) => {
//     return first+second;
// }

//const jumlah = (first, second) => first+second;

//console.log(jumlah(75,100));

//arrow function sebagai parameter
function nameAuthor(callback){
    callback("Yoga Julian")
}

nameAuthor(name => console.log(`Halo ${name}`))