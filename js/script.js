//Tap 클릭한거만 보이게 
$(".clearfix li a").click(function () {
    $(this).parent().addClass('see').siblings().removeClass('see');
});


// Top button
$(".Top").click(function () {
    $("html,body").animate({
        scrollTop:0
    },1000)
});
