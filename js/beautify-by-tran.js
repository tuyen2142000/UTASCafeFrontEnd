$(document).ready(function(){
    $('.dropdown-toggle').click(function() {
        $(this).next('.dropdown-menu').slideToggle(400);
    });

      $(".menu-drop").css({backgroundColor: "#F7ECDE", "border": "none",transition: "background-color 0.2s"});

    $(window).scroll(function(){
        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) { 
                $("#home-nav").css({backgroundColor: "#2A363B",transition: "background-color 0.2s"});
                $("#log-nav").css({backgroundColor: "#E5E0D9",transition: "background-color 0.2s"});
                $(".menu-drop").css({backgroundColor: "#F7ECDE", "border": "none",transition: "background-color 0.2s"});
            } else {
              $("#home-nav").css({backgroundColor: "transparent",transition: "background-color 0.2s"});
              $("#log-nav").css({backgroundColor: "transparent",transition: "background-color 0.2s"});
              $(".menu-drop").css({backgroundColor: "#F7ECDE", "border": "none",transition: "background-color 0.2s"});
            }
          });
    })

    $('.ins-step').hover(
        function () {
            $(this).css({backgroundColor: "#99B898", "border": "none",transition: "background-color 0.4s"});
        },

        function () {
            $(this).css({backgroundColor: "transparent", "border": "none",transition: "background-color 0.4s"});
        }
    );

    $('.shop-img').hover(
        function () {
            $(this).animate({height: '+=3px',width: '+=3px'});
        },

        function () {
            $(this).animate({height: '-=3px',width: '-=3px'});
        }
    );

    $('.laz-food-img-large').hover(
        function () {
            $(this).fadeTo(200, 0.7);
            $(this).siblings().fadeTo(200, 1);
        },

        function () {
            $(this).fadeTo(200, 1);
            $(this).siblings().fadeTo(200, 0);
        }
    );

    $('.laz-food-img-med').hover(
        function () {
            $(this).fadeTo(200, 0.7);
            $(this).siblings().fadeTo(200, 1);
        },

        function () {
            $(this).fadeTo(200, 1);
            $(this).siblings().fadeTo(200, 0);
        }
    );

    $('.laz-food-img').hover(
        function () {
            $(this).fadeTo(200, 0.7);
            $(this).siblings().fadeTo(200, 1);
        },

        function () {
            $(this).fadeTo(200, 1);
            $(this).siblings().fadeTo(200, 0);
        }
    );

});