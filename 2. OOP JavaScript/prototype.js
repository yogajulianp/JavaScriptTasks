//construction function , merupakan class pada javaScript, ini juga merupakan prototype

function PersonData(namaDepan, namaAkhir){
    this.firstName = namaDepan;
    this.lastName = namaAkhir;
    this.sayGreeting = function (name) {
        console.log(`Hallo, selamat datang ${name}, nama saya ${this.firstName} ${this.lastName}.`)
    }
}

//membuat object dari constructor, cukup new pada pemanggilan constructor, nama object ini adalah instance
const yoga = new PersonData("Yoga", "Prasutiyo");


const mila = new PersonData("Mila","Tina");


console.log(yoga);
console.log(mila);
