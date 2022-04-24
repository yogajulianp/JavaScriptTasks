function KepalaCabang(firstName){
    this.firstName = firstName;
    this.sayGreeting = function (name) {
        console.log(`Hallo ${name}, nama saya adalah ${this.firstName}`)
    }
}

function ManagerPusat(firstName, lastName) {
    this.lastName = lastName;
    KepalaCabang.call(this, firstName);
}

const yoga = new ManagerPusat("Yoga", "Julian")
console.log(yoga)