//fungsi generator Sederhana
function* dataAuthors(){
    yield "Yoga";
    yield "Julian";
    yield "Prasutiyo";
}

console.log(dataAuthors)
const authors = dataAuthors();
//console.log(authors);
for (const author of authors) {
    console.log(author);
} 

//fungsi generator kompleks
//Lazy (kebalikan dari eager)
function* makeGanjil(value){
    for(let i = 0; i <=  value; i++){
        if(i % 2 === 1) {
            console.log(`Yield ke ${i}`)
            yield i;
        }
    }
}

//eager (dibuat dulu semuanya ,.baru di iterasi)
function makeGanjilArray(value) {
    const result = []
    for (let i = 1; i<= value; i++) {
        if (i % 2 === 1) {
            console.log(`Yield ke ${i}`)
            result.push(i);
        }
    }
    return result;
}

const numbers = makeGanjil(50);
// for (const number of numbers ){
//     console.log(number);
// }

console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);




