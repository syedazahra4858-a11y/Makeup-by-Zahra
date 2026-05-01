$(document).ready(function(){

  var images = [
    'url("bg1.jpg")',
    'url("bg2.jpg")',
    'url("bg3.jpg")'
  ];
  var i = 0;

  function changeBg(){
    $('#banner').fadeOut(600, function(){ 
      $(this).css('background-image', images[i]); 
      $(this).fadeIn(600, function(){ 
        i = (i + 1) % images.length;
        $(this).delay(1800).fadeOut(0, changeBg); 
      });
    });
  }
  changeBg(); 

  $('#signupBtn').click(function(){ 
    $(this).fadeOut(100); 
    $(this).fadeIn(100); 
    window.location.href = 'signup.html';
  });

  $('.row button').click(function(){ 
    $(this).text('Add to Cart🛒'); 
    $(this).css('background', '#504f50'); 
  });
$('.service-btn').click(function(){ 
    $(this).text('Booking Confirmed✅'); 
    $(this).css('background', '#504f50'); 
  });
  $('.form-box button').click(function(){ 
    alert('Account Created!'); 
    $('form-b0x form').fadeOut(300); 
    $('form-box form').fadeIn(300); 
  });
  $('.form-contact button').click(function(){ 
    alert('Message Sent✅'); 
    $('form-b0x form').fadeOut(300); 
    $('form-box form').fadeIn(300); 
  });

});

