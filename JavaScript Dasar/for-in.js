const author = {
    firstName : "Yoga",
    middleName : "Julian",
    lastName: "Prasutiyo"
}

for(const properti in author) {
    console.log(`${properti} : ${author[properti]}`)
}


const mapel = ["fisika", "kimia", "matematika"];
for (const indeks in mapel){
    console.log(`${indeks} : ${mapel[indeks]}`)
}