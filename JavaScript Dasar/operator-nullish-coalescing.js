let parameter=null;

let data = parameter;
if(data === undefined || data === null) {
    data = "Nilai Default"
}

console.log(data)

//dengan Nullish Coalescing Operator
data = parameter ?? "Nilai Default2"

console.log(data)