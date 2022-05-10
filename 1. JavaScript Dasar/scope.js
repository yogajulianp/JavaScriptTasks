
//global scope
let hitung = 0;

//global scole
function tambah(){

    hitung++;
}

function other(){

}

tambah();
tambah();
tambah();

//console.log(hitung);


function kesatu(){
    //local scope first
    let variableSatu= "Kesatu"
   
    function nestedPertama(){
        console.log(variableSatu);
        const nestedVariablePertama = "nested kesatu"
    }

    nestedPertama();
    console.log(nestedVariablePertama);

}

function kedua() {
    //local scope second
    let variableDua ="Kedua"
    //console.log(variableSatu); //ERROR
    
}

kesatu();
kedua();

//global scope
//console.log(variableSatu); //ERROR
//console.log(variableDua);   // ERROR