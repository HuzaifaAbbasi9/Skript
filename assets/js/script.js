$(document).ready(function () {
    header = $('header');

    $(window).scroll(function () {
        f();
    });

    function f() {
        if ($(this).scrollTop() > header.height()) {
            header.addClass('header-active');
        } else {
            header.removeClass('header-active');
        }
    }

    f();

    setTimeout(function () {
        document.getElementById("loading").classList.add("none");
    }, 1000);
    $('.header-bars').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('overflow-hidden');
        $(header).toggleClass('active');
    })
    $('.overlay').click(function (e) {
        e.preventDefault();
        $('body').removeClass('overflow-hidden');
        $(header).removeClass('active');
    })
});