console.log("Hello" || "");
console.log("" || []);
console.log("0" || "Nol");
console.log(0 || "Nol");
console.log(null || "NULL");
console.log(undefined || "UNDEFINED");
console.log(0 || false);

const author = {
    firstName: "",
    lastName: "Julian"
}

const name = author.firstName || author.lastName;
console.log(name);

console.log("hello" && "");
console.log("" && []);
console.log("0" && "Nol");
console.log(0 && "Nol");
console.log(null && "NULL");
console.log(undefined && "UNDEFINED");
console.log("undefined" && "null");