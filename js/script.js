/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */

//Accordeon Menü//

$(document).ready(function(){
    $(".burger").click(function(){
        $(".nav_mobile ul").slideToggle(500);
    });
});

//Burger Buns//


$(document).ready(function(){
$('.burger').on("click", function (event) {
    $('.line').toggleClass('rota');
    $('.line').toggleClass('rota_reset');
});
    });

//Topbar resize//

$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".topbar").addClass('small');
        } else {
            $(".topbar").removeClass("small");
        }
    });
});

//morevideo//

$(document).ready(function(){
    $(".more").click(function(){
        $("#one .video2").slideToggle(500);
    });
});

//moretermine//

$(document).ready(function(){
    $(".more2").click(function(){
        $("#two .termine2").slideToggle(500);
    });
});

