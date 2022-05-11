export class Customer {
    constructor(name) {
        this.name = name
    }

    sayGreeting(name){
        console.log(`Hallo, selamat datang ${this.name}, nama saya ${name} `)
    }
}

