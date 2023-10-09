// console.log(window);

// document.getElementById("width").innerHTML = "Width: " + screen.width;
// document.getElementById("height").innerHTML = "height: " + screen.height;
// document.getElementById("ua").innerHTML = window.navigator.userAgent;

// window.alert("Hello");
// let x = parseInt(window.prompt("Enter a value:"));
// document.getElementById("val").innerHTML = x + 5;

// window.confirm("Are you sure?");
// window.open("https://google.com");

// document.getElementById("val").innerHTML = window.location.href + "<br>";
// document.getElementById("val").innerHTML += window.location.host+ "<br>";
// console.log(window.location);




// function startTime() {
//   const today = new Date();
//   let h = today.getHours();
//   let m = today.getMinutes();
//   let s = today.getSeconds();
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById('bom').innerHTML =  h + ":" + m + ":" + s;

// }

// function checkTime(i) {
//   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//   return i;
// }

// setInterval(startTime, 2000);



// DOM:
let x = document.getElementById("mydiv");
x.setAttribute("class", "md");
console.log(x.innerText);

let rows = document.getElementsByTagName("tr");
for (let i = 0; i < rows.length; i++){
    if(i % 2 == 0){
        rows[i].setAttribute("class", "even");
    }else{
        rows[i].setAttribute("class", "odd");
    }
}

console.log(rows);

let y = document.getElementById("mydiv");
y.style.color = "red";
y.style.backgroundColor = "blue";
y.style.borderTop = "2px solid yellow";
y.classList.add("test")
console.log(y.classList);

let ip = document.getElementById("t");
let res = document.getElementById("res");
let op = "";

let val1 = 0;
let val2 = 0;

function change(){
    res.innerHTML = ip.value;
}

function one(){
    res.value += "1";

}

function tow(){
    res.value += "2";
}

function plus(){
    val1 = parseFloat(res.value);
    op = "+";
    res.value = "";
}

function calc(){
    let r = 0;
    val2 = parseFloat(res.value);
    if(op == "+"){
        r = val1 + val2;
    }
    res.value = r;
}