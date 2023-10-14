// function send(){
    // var request = new XMLHttpRequest();
    // request.open("GET", "/data/student.json");
    //request.open("GET", "https://my-json-server.typicode.com/typicode/demo/db");
    // request.open("GET", "http://api.weatherapi.com/v1/current.json?key=69863d237a644144bfe112940230907 &q=Damascus&aqi=no");
    // request.send(); 
    // request.onreadystatechange = function () {
    //     let resp = this.responseText;
    //     let json_resp = JSON.parse(resp);
    //     console.log(json_resp);
        //document.getElementById("content").innerHTML = json_resp[1].FirstName + " " + json_resp[1].LastName;
        //document.getElementById("content").innerHTML = json_resp.comments[1].body;
    //     document.getElementById("card-title").innerHTML = json_resp.location.country+ " - " + json_resp.location.name;
    //     document.getElementById("card-body").innerHTML = json_resp.current.temp_c + "<br>" + json_resp.current.temp_f;
    //     document.getElementById("card-image").src = json_resp.current.condition.icon;
    // }
// }


$(document).ready(function(){
    $.get("http://api.weatherapi.com/v1/current.json?key=69863d237a644144bfe112940230907&q=Damascus&aqi=no", function(d, status){
        $("#card-body").html(d.current.temp_c);
        $('#card-image').attr("src", d.current.condition.icon);
        console.log(d);
    });
});