




let lastScrollTop = 0;

$(document).on("scroll", function () {
    let currentScrollTop = $(document).scrollTop();

    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        $(".navbar-header").addClass("navbar__sticky");
    } else if (currentScrollTop < lastScrollTop) {
        $(".navbar-header").removeClass("navbar__sticky");
    }
    lastScrollTop = currentScrollTop;
})

$(document).ready(function(){

    $(".nav-bar").load("navbar.html");


// background image
// let bgImageValue = $('.banner_section').attr('data-image');
// $('.banner_section').css('background-image', `url(${bgImageValue})`);
// $('.banner_section').removeAttr('data-image');

$('.banner_section').css('background-image', `url(${$('.banner_section').attr('data-image')})`).removeAttr('data-image');
// background image end


  $('.homepage-slider').length >0 && $('.homepage-slider').owlCarousel({
    loop:true,
    items: 1,
    dots: 0,
    nav:1,
    navText:['<i class="fa-regular fa-arrow-left fa-3x"></i>','<i class="fa-regular fa-arrow-right fa-3x"></i>']

    })

    // kathmandu tourism hub
    $('.tourism--slider').length > 0 && $('.tourism--slider').owlCarousel({
      loop:true,
      dots: 0,
      items: 1,
      nav:true,    navText:['<i class="fa-regular fa-arrow-left fa-2x"></i>','<i class="fa-regular fa-arrow-right fa-2x"></i>'],
      responsive:{
          0:{
              items:1
          },
          700:{
              items:2,
              margin:10
          },
          1000:{
              items:3,
              margin:20
          }
      }
      })

    // kathmandu tourism hub
    $('.room-packages-slider').length >0 && $('.room-packages-slider').owlCarousel({
      loop:true,
      items: 1,
      nav:false,
       navText:['<i class="fa-regular fa-arrow-left fa-2x"></i>','<i class="fa-regular fa-arrow-right fa-2x"></i>'],
      responsive:{
          0:{
              items:1
          },
          700:{
              items:1,
              margin:10
          },
          1000:{
              items:2,
              margin:20
          }
      }
      })

      /* testimonial slider */

      $(".footer-wrapper").load("footer.html", function(){


        // trigger when loaded completely
        $(document).ready(function () {
            $(window).scroll(function () {
              if ($(this).scrollTop() > 200) {
                $('#scrollToTop').fadeIn();
              } else {
                $('#scrollToTop').fadeOut();
              }
            });

            $('#scrollToTop').click(function () {
              $('html, body').animate({ scrollTop: 0 }, 200);
              return false;
            });
          })



        $('.owl-testimonial').length >0 && $('.owl-testimonial').owlCarousel({
            loop:true,
            items: 1,
            nav:true,
             navText:['<i class="fa-regular fa-arrow-left"></i>','<i class="fa-regular fa-arrow-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                700:{
                    items:1,
                    margin:10
                },
                1000:{
                    items:1,
                    margin:20
                },
                1400:{
                    items:2,
                    margin:30
                }
            }
            })


      });

/* room slider */
$('.room-slider').length > 0 &&  $('.room-slider').owlCarousel({
    loop:true,
    items:1,
    dots: 0,
    margin:10,
    nav:true,
    navText: ["<i class='fa-light fw-medium fa-arrow-left fa-2x'></i>", "<i class='fa-light fw-medium fa-arrow-right fa-2x'></i>"],
  })

  $('.owl-other-rooms').length > 0 && $('.owl-other-rooms').owlCarousel({
    loop:0,
    items:3,
    dots: 0,
    margin:20,
    nav:true,
    navText: ["<i class='fa-light fw-medium fa-arrow-left fa-2x'></i>", "<i class='fa-light fw-medium fa-arrow-right fa-2x'></i>"],

  })
    // document read end here
})