
$(".clearfix li a").click(function () {
    $(this).parent().addClass('see').siblings().removeClass('see');
});