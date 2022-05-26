const hamburger_btn = document.querySelector('.hamburger');
const navbar = document.querySelector('.sidebar')
hamburger_btn.onclick = () => {
    navbar.style.display = "block";
}
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
window.addEventListener("load", (event) => {
    var Anotherselector = $(".active").attr("data-filter");
    $(".flower").isotope({
        filter: Anotherselector
    })
})
$(".flower").isotope({
    itemSelector: '.card',
    layoutMode: 'fitRows'
});

$(".filter_list_ul li").click(function() {
    $(".filter_list_ul li").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    $(".flower").isotope({
        filter: selector
    })
})