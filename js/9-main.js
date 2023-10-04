// x = "<h1>Hello Dears</h1>";
// // alert(x);
// // document.writeln(x);
// x = 10;  & | !
//  let x = "<h1>";
//  x += "Ahmad";
//  x += "</h1>";
// document.getElementById("div1").innerHTML = x;
// console.log(x);
// for(let i = 0; i< 100; i++){

// }

let a = 1;
let b = -3;
let c = 2;
let eq = a + "X<sup><small>2</small></sup> + " + b + "X + " + c + "= 0 <br>";
let delta = b ** 2 - 4 * a * c;
console.log(delta);
if (delta < 0){
    eq += "There are no solutions!!";
}
if(delta == 0){
    eq += "There is one solutions: <br>";
    let x = (-1 * b) / (2 * a);
    eq += "X = " + x;
}
if(delta > 0){
    eq += "There is tow solutions: <br>";
    let x1 = (-1 * b - Math.sqrt(delta)) / (2 * a);
    let x2 = (-1 * b + Math.sqrt(delta)) / (2 * a);
    eq += "X<sub><small>1</small></sub> = " + x1 + "<br>";
    eq += "X<sub><small>2</small></sub> = " + x2 + "<br>";
}
document.getElementById("eq").innerHTML = eq;

res = "<table class=\"table\">";

for(let i = 1; i < 10; i++){
    res += "<tr>";
    res += "<th>" + i + "</th>";
    for(let j = 1; j < 10; j++){
        res += "<td>" + (i * j) + "</td>";
    }
    res += "</tr>";
}

res += "</table>";
document.getElementById("table").innerHTML = res;

let arr = [1, 2, 3, 4, 5, 6, "Ahmad"];
