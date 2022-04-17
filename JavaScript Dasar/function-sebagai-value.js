// fungsi di variable
function sayGreeting(name){
    console.log(`Haloo ${name}`)
}

sayGreeting("Yoga")

const greeting = sayGreeting
greeting("Julian")

//fungsi di parameter
function giveName(callback) {
    callback("Yoga Julian")
}

giveName(sayGreeting);
giveName(greeting);