var keyword= "a";
var password= "";

function formChanged(){
  password = document.getElementsByName("password")[0].value;
  console.log(password);
}
//animation initial menu + svg
function pwCheck(){
  if(password != keyword){
    console.log(password);
      $('#pwField').addClass('animated shake');
        $('#pwField').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('#pwField').removeClass('animated shake');
        });
      }
  else{
    console.log("success!");
    $('#pwPage').addClass('animated fadeOutUp');
    setTimeout(function() {
    $('#heart').removeClass('d-none');
  }, 500);
    setTimeout(function() {
    $('#heart').fadeOut('normal');
  }, 2000);
    setTimeout(function() {
    $('#sizer').removeClass('d-none');
    $('#load').removeClass('d-none');
    $('#loader').addClass('animated bounce');
  }, 2500);
    setTimeout(function() {
    $('#load').fadeOut('normal');
    $('#sizer').fadeOut('normal');
    }, 10500);
    setTimeout(function() {
      $('#load2').removeClass('d-none');
    }, 11000);
    setTimeout(function() {
      $('#load2').fadeOut('normal');
    }, 16000);
    setTimeout(function() {
      $('#load3').removeClass('d-none');
    }, 16500);
    setTimeout(function() {
      $('#load3').fadeOut('normal');
    }, 23000);
    setTimeout(function() {
    $('#page').removeClass('d-none');
    $('#page').addClass('animated fadeIn');
    }, 23500);
  }
}
$('#pwForm').addClass('animated fadeInDown');
