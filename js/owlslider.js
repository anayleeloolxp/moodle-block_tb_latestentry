require(["jquery"],function($) {
    
    $(document).ready(function() {

        $('.lastentrylist').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            autoplay: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: false
                },
                600: {
                    items: 1,
                    nav: true,
                    dots: false
                },
                1000: {
                    items: 1,
                    nav: true,
                    dots: false
                }
            }
        });
    });    
});