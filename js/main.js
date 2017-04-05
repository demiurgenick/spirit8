$(document).ready(function(){

  //SLICK SLIDER
  $('.slider-body').slick({
      dots: true,
      arrows: false,
      speed: 300,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
          {
              breakpoint: 800,
              settings: {
                slidesToShow: 2
              }
            },
      ]
  });

    $('.slider-body-client').slick({
      dots: true,
      arrows: false,
      speed: 300,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
      {
          breakpoint: 800,
          settings: {
            slidesToShow: 2
          }
        },
      ]
    });
    
    
    $('.slider-testim').slick({
      dots: true,
      arrows: false,
      speed: 300,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    
    
    
    
    //NAVIGATION
    $('.start-nav a').click(function(event) {
        event.preventDefault(); 

        var id = $(this).attr('href'), 
            top = $(id).offset().top; 
        $('body').animate({scrollTop: top}, 1500); 
    });
    
    //DOWN
    $('.btnDown a').click(function(event) {
        event.preventDefault(); 

        var id = $(this).attr('href'), 
            top = $(id).offset().top; 
        $('body').animate({scrollTop: top}, 1500); 
     
    });
    
    //SCROLL
    window.onscroll = function() { 
            if ($(document).scrollTop() + $(window).height() > $('.about').offset().top && $(document).scrollTop() - $('.about').offset().top < $('.about').height()) { 
                if($('.about').hasClass('visible')) {
                    
                } else {
                    $('.mac').addClass('visible');
                    $('.mac>img').addClass('visible');
                }
                
                

        } 
        
//        if ($(document).scrollTop() + $(window).height() > $('.wrappShape').offset().top && $(document).scrollTop() - $('.wrappShape').offset().top < $('.wrappShape').height()) { 
//               if($('.wrappShape').hasClass('visible')) {
//                    
//                } else {
//                    $('.topShape').addClass('visible');
//                    $('.bottShape').addClass('visible');
//                } 
//        } 

    }
    
    
    
    //VALID FORM
    var validName = false,
        validEmail = false,
        validMess = false;
    
    $('form').submit(function(event) {
       event.preventDefault(); 
        
        
        var name = $('#nameUser').val();
        var email = $('#emailUser').val();
        var mess = $('#messageUser').val();
        
        
        if(name == "") {
            $('#nameUser').removeClass('inputOk');
            $('#nameUser').addClass('inputError');
            $('.nameBlock').append('<span class="glyphicon glyphicon-remove error"></span>');
            
        } else {
            $('#nameUser').addClass('inputOk');
            $('.nameBlock .error').remove();
            $('#nameUser').removeClass('inputError');
            $('.nameBlock').append('<span class="glyphicon glyphicon-ok ok"></span>');
            validName = true;
        }
        
        if(email == "") {
            $('#emailUser').removeClass('inputOk');
            $('#emailUser').addClass('inputError');
            $('.emailBlock').append('<span class="glyphicon glyphicon-remove error"></span>');
        } else {
            $('#emailUser').addClass('inputOk');
            $('.emailBlock .error').remove();
            $('#emailUser').removeClass('inputError');
            $('.emailBlock').append('<span class="glyphicon glyphicon-ok ok"></span>');
            validEmail = true;
        }
        
        if(mess == "") {
            $('#messageUser').removeClass('inputOk');
            $('#messageUser').addClass('inputError');
            $('.messageBlock').append('<span class="glyphicon glyphicon-remove error"></span>');
        } else {
            $('#messageUser').addClass('inputOk');
            $('.messageBlock .error').remove();
            $('#messageUser').removeClass('inputError');
            $('.messageBlock').append('<span class="glyphicon glyphicon-ok ok"></span>');
            validMess = true;
        }
        
        
        if(validName == true && validEmail == true && validMess == true) {
            $('form').unbind('submit').submit();
        }
    });
    
    
    
    
    //PORTFOLIO
    $('.port-nav a').click(function(event){
       event.preventDefault(); 
        
        
    });
    
    $('#linkWeb').click(function(event) {
        $('.port-web').addClass('visible');
        $('.port-photo').removeClass('visible');
        $('.port-mobile').removeClass('visible');
    });
    
    $('#linkAll').click(function(event) {
        $('.port-block').addClass('visible'); 
    });
    
    
    
     $('#linkMobile').click(function(event) {
        $('.port-mobile').addClass('visible');
        $('.port-photo').removeClass('visible');
        $('.port-web').removeClass('visible');
    });
    
     $('#linkPhoto').click(function(event) {
        $('.port-photo').addClass('visible');
        $('.port-mobile').removeClass('visible');
        $('.port-web').removeClass('visible');
    });
    
    
    //MEDIA NAV 
    $('.humb').click(function(event) {
        $('.start-nav').toggleClass('visible');
        $('.start-headin').toggleClass('visible');
    });
});


