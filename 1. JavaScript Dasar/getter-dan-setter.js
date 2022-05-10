
//fungsi di objek, maka manggilnya sebagai fungsi
/*const author = {
    firstName: "Yoga",
    lastName: "Julian",
    fullName: function(){
        console.log(this)
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(author.fullName());*/

//getter, dengan getter maka fungsinya bisa kita jadikan property
const author = {
    firstName: "Yoga",
    lastName: "Julian",
    get fullName(){
        //console.log(this);
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        console.log("this :",this)
        console.log(`ubah fullname menjadi ${value}.`)
        const array = value.split(" ")
        console.log(array)
        this.firstName = array[0];
        this.lastName = array[1];

    }
};
console.log(author.fullName);

author.fullName = "Muzdahir Prasutiyo";
//author.firstName="Tiyo"
console.log(author.fullName);

author.fullName = "Satria Pendekar";
console.log(author.fullName);

author.fullName = "Yoga Julian";
console.log(author.fullName);



