function sayGreeting(firstName, lastName) {
    const greeting = `Hello ${firstName} ${lastName}`;
    return greeting
}

sayGreeting("Yoga", "Julian")
const result = sayGreeting("Rafa", "Prasutiyo")
console.log(result);

//return multiple value
function getFinalAssesment(value) {
    if (value > 90) {
        return "A";
    } else if (value > 80) {
        return "B";
    } else if (value > 70) {
        return "C";
    } else if (value > 60) {
        return "D";
    } else {
        return "E";
    }
}

const finalAssesment = getFinalAssesment(73);
console.log(finalAssesment);

//menghentikan eksekusi dengan return

function isContains(array, searchValue) {
    for (const element of array) {
        console.info(`iterasi Elemen ${element}`);
        if (element === searchValue) {
            return true;
        }
    }
    return false
}

const array = [1,0,4,7,8,34,3221,1,2,34,5,1,2,345,1,5]
const search = 34
const found = isContains(array, search)
console.log(found)