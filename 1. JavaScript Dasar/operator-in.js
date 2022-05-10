const person = {
    firstName: "Yoga",
    lastName: "Prasutiyo"
}

if ("firstName" in person) {
    console.log(`Selamat berjuang ${person.firstName}`)
} else {
    console.log("Selamat datang")
}


const pengunjung = {
    firstName : "Yoga",
    middleName : undefined,
    lastName: "Prasutiyo"
}

if ("middleName" in pengunjung) {
    console.log(`Welcome ${pengunjung.middleName}`)
} else {
    console.log("Selamat datang")
}

//pada array operator in untuk cek index
const names = [null, "Julian", null];
const result = 0 in names;
console.log(result);