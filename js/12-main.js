// $("p").css("background-color", "red");
$(document).ready(function(){
    // $('button').click(function(){
    //     $("#d1").hide(2000,function(){
    //         $("#d2").hide(2000, function(){
    //             $("#d3").hide(2000, function(){
    //                 $("#d4").hide(2000);
    //             });            
    //         });        
    //     });    
    //});
    // $("#d1").hide();
    // $("#d3").hide();
    
//    $('#b1').click(function(){
    // $("#d1").show(2000);
    // $("#d2").hide(2000);
    // $("#d3").show(2000);
    // $("#d4").hide(2000);
    // $("div").slideToggle(3000);
//     $("#d1").animate(
//         {
//             // "color": "red",
//             // "width" : "500px",
//             // "height": "500px",
//             "left" : "300px",
//             "top" : "300px"
//         }
//         , 10000);
//    });

//     var div = $("div");
//     div.animate({height: '600px', opacity: '0.4'}, "slow");
//     div.animate({width: '600px', opacity: '0.8'}, "slow");
//     div.animate({height: '200px', opacity: '0.4'}, "slow");
//     div.animate({width: '200px', opacity: '0.8'}, "slow");
//     });
//    $('#b2').click(function(){
//     $('#d1').stop();
//    });

    // $('#b1').click(function(){
    //     // $('#p1').html(
    //     //     $('#d1').html()
    //     // );
    //     // $('#d1').empty();
    //     $('#d1').toggleClass("d1");
    //     $('#p1').css({
    //         "color": "red",
    //         "background-color": "blue",
    //         "font-size" : "x-large"
    //     });
    // });




    
        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#myDIV *").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });



});