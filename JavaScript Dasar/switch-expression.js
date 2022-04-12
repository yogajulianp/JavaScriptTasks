const nilai = "A";

switch (nilai) {
    case "A":
        console.log("Selamat, Anda lulus dengan amat baik");
        break;
    case "B":
    case "C":
        console.log("Anda lulus");
        break;
    case "D" :
        console.log("Anda tidak lulus");
        break;
    default:
        console.log("Mungkin Anda salah Jurusan")
}

if (nilai === "A") {
    console.log("Selamat, Anda lulus dengan amat baik");
} else if ( nilai === "B" || nilai === "C") {
    console.log("Anda lulus");
} else if ( nilai === "D") {
    console.log("Anda tidak lulus");
} else {
    console.log("Mungkin Anda salah Jurusan")
}
