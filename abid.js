


let table = +prompt("enter any number")
let num = 5;
for (let i=0; i <= 10; i++){
    if (table == 0){
        console.log(num + "*" + i + "=" + i * num)
    }else{
        console.log(table + "*" + i + "=" + i * table)
    }
}