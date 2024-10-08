$(document).ready(function () {
    $("#mobile_btn").on("click", function () {
        $("#mobile_menu").toggleClass("active");
        $("#mobile_btn").find("i").toggleClass("fa-x");
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '10px 10px 25px rgba(0, 0, 0, 0.1');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');

        if (scrollPosition > 300) {
            $('#btnTopo').fadeIn();
        } else {
            $('#btnTopo').fadeOut();
        }
    });

    $('#btnTopo').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });

    ScrollReveal().reveal('#cta', {
        delay: 200,
        distance: '20%',
        origin: 'left',
        duration: 2000
    });

    ScrollReveal().reveal('.servico', {
        delay: 200,
        distance: '20%',
        origin: 'left',
        duration: 2000
    });

    ScrollReveal().reveal('#lamp', {
        delay: 200,
        distance: '20%',
        origin: 'left',
        duration: 1000
    });

    ScrollReveal().reveal('.feedback', {
        delay: 200,
        distance: '20%',
        origin: 'right',
        duration: 2000
    });

    ScrollReveal().reveal('#footer_items', {
        delay: 200,
        distance: '20%',
        origin: 'top',
        duration: 2000
    });
});