// 1- alert()
// 2- document.writeln()
// 3- document.getElementById().innerHTML = 
// 4- console.log()
// let res = "";
// let list1 = [10, 5, 8, 12, 17, 22, 60, 1];
// let sum = 0;
// for(let i = 0; i < list1.length; i++){
//     sum += list1[i];
// }
// document.getElementById("i1").innerHTML = sum / list1.length + "<br>";


// let x = [5];
// let z = 2;
// document.getElementById("i1").innerHTML += z.length + "<br>";
// let x = document.getElementsByTagName("td");
// console.log(x);
// for (let i = 0; i < x.length; i++){
//     x[i].innerHTML = i *10;
// }

let student = {
    first_name: "Ahmad",
    "last_name": "Tahseen",
    "age": 20,
    "marks": [
        {
            "name": "Math",
            "mark": 25
        },
        {
            "name": "Phis",
            "mark": 30
        }
    ]
}
document.getElementById("name").innerHTML = student.first_name + " " + student.last_name;
document.getElementById("age").innerHTML = student.age;
document.getElementById("mark").innerHTML = 
    "<span> subject: " + student.marks[0].name + "</span><br>" +
    student.marks[0].mark; 
console.log(student);

class stu{
    constructor(){
        this.name = "";
        this.lname = "";
    }
    get_name(){
        return this.name;
    }
    set_name(name){
        this.name = name;
        return this;
    }
    set_l_name(lname){
        this.lname = lname;
        return this;
    }

    get_full_bname(){
        return this.name + " " + this.lname;
    }
}

let s1 = new stu();
s1.set_name("Ahmad").set_l_name("Yaser");
console.log(s1);