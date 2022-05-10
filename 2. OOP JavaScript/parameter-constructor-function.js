//construction function , merupakan class pada javaScript

function PersonData(namaDepan, namaAkhir){
    this.firstName = namaDepan;
    this.lastName = namaAkhir;
    this.sayGreeting = function (name) {
        console.log(`Hallo, selamat datang ${name}, nama saya ${this.firstName} ${this.lastName}.`)
    }
}

//membuat object dari constructor, cukup new pada pemanggilan constructor
const yoga = new PersonData("Yoga", "Prasutiyo");
// yoga.firstName = "Yoga";
// yoga.lastName = "Prasutiyo";
yoga.sayGreeting("Ronaldo");

const mila = new PersonData("Mila","Tina");
// mila.firstName = "Mila";
// mila.lastName = "Tina";
mila.sayGreeting("Ronaldo");

console.log(yoga);
console.log(mila);

