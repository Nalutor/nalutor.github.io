$(function () {
    var result = window.matchMedia('(min-width:1200px)');
    var random = parseInt(10*Math.random()+1);
    if (result.matches) {
        $("body").css("background", "url(/images/" + random + ".jpeg)  50% 50% fixed");
    }
})