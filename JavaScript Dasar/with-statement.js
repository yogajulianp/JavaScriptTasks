const author = {
    firstName: "Yoga",
    middleName: "Julian",
    lastName: "Prasutiyo"
};

console.log(author.firstName);
console.log(author.middleName);
console.log(author.lastName);

const firstName ="Yoga Indonesia"

with(author) {
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

console.log("firstName tanpa statement", firstName);