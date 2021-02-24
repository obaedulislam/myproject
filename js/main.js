jQuery(document).ready(function(){
    $('#videolink').magnificPopup({
        type:'inline',
        midClick: true
    });

    $('.team_canvas').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        margin: 15,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items:2,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })

    $('.client_info').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        margin: 15,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items:2,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.their-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        margin: 15,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items:2,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});

$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per +'%');
});

$(function(){
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

   
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type:'image',  
        gallery:{
            enabled: true
        }
   });



/**
   $('.gallery').isotope({
       itemSelector: '.items'
   });

   var $gallery = $('.gallery').isotope({ filter: filtervalue
   });

   $('.filtering').on('click', 'span', function(){
       var filtervalue = $(this).attr('.data-filter');
       $gallery.isotope({filter: filtervalue});
   });

   $('filtering').on('click', 'span', function () {
      $(this).addClass('active').siblings().removeclass('active');
   });
**/






});



$(document).ready(function(){

    $('.list').click(function(){
        const value = $(this).attr('.data-filter');
        if(value == 'all'){
            $('.items').show('1000');
        }
        else{
            $('.items').not('.'+value).hide('1000');
            $('.items').filter('.'+value).show('1000');
        }
        $('.list').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    
    });
    
});

