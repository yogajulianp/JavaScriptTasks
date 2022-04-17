function outer(){

    function inner(){
        console.log("inner")
    }

    inner();
    inner();
    inner();
}

outer();
inner();