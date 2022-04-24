//construction function , merupakan class pada javaScript

function PersonData(){
    this.firstName = ""
    this.lastName = ""
}

//membuat object dari constructor, cukup new pada pemanggilan constructor

const yoga = new PersonData();
yoga.firstName = "Yoga";
yoga.lastName = "Prasutiyo"

const mila = new PersonData();
mila.firstName = "Mila";
mila.lastName = "Tina"

console.log(yoga);
console.log(mila);