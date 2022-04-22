
{
    const userName = ["Yoga","Julian","Prasutiyo", "Muzdahir", "Granmax" ]

    // const firstName = userName[0];
    // const middleName = userName[1];
    // const lastName = userName[2];
    
    const [firstName, middleName, lastName, ...lainnya] = userName
    
    // console.log(firstName);
    // console.log(middleName);
    // console.log(lastName);
    // console.log(lainnya);
}

{
    const author = {
        firstName: "Yoga",
        lastName: "Julian",
        address: {
            street: "Jalan Pengasinan",
            city: "Depok",
            country: "Indonesia"
        },
        hobby: "liat ikan",
        channel: "Yoga Julian Prasutiyo"
    };

    const {firstName, lastName, address:{street, city, country}, ...others}= author;
    console.log(firstName);
    console.log(lastName);
    console.log(street);
    console.log(city);
    console.log(country);
    console.log(others);

    //--------------------------------------------------------------------
}

{
    // function displayUser(user){
    //     console.log(user.firstName)
    //     console.log(user.middleName)
    //     console.log(user.lastName)
    // }

    function displayUser({firstName, middleName, lastName}){
        console.log(firstName)
        console.log(middleName)
        console.log(lastName)
    }

    const user = {
        firstName:"Yoga",
        middleName: "Julian",
        lastName :"Prasutiyo"
    };

    //displayUser(user)
}

{
    // function jumlah(array){
    //     return array[0] + array[1];
    // }

    function jumlah([first, second]){
        return first + second;
    }

    console.log(jumlah([2,5]));
    console.log(jumlah([20,20]))
}

{
    const authors = ["Yoga", "Tono"];
    const [firstName, middleName = "Julian", lastName = "Prasutiyo"] = authors;

    console.log(firstName)
    console.log(middleName)
    console.log(lastName)

}

{
    const author = {
        firstName: "Yoga",
        middleName: undefined,
        lastName: "Muzdahir",
       
    };

    const {firstName, middleName = "Julian", lastName}= author;
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

//Menggunakan Nama Variable Lain
{
    const author = {
        firstName: "Yoga",
        middleName: undefined,
        lastName: "Muzdahir",
       
    };

    const { firstName: namaDepan, 
            middleName: namaTengah = "Julian", 
            lastName: namaBelakang}= author;
    console.log(namaDepan);
    console.log(namaTengah);
    console.log(namaBelakang);
}