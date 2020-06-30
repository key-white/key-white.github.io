if ($(window).scrollTop() >= 150) $("#ToTop").fadeIn(800);
$(window).scroll(function(){
    if ($(window).scrollTop() <= 150) $("#ToTop").fadeOut(800);
    else $("#ToTop").fadeIn(800);
});
 
if ($(window).scrollTop() <= $(document).height()) $("#OnBottom").fadeIn(800);
$(window).scroll(function(){
    if ($(window).scrollTop() >= $(document).height()) $("#OnBottom").fadeOut(800);
    else $("#OnBottom").fadeIn(800);
});
 
$("#ToTop").click(function(){$("html,body").animate({scrollTop:0}, 800)});
$("#OnBottom").click(function(){$("html,body").animate({scrollTop:$(document).height()}, 800)});	
