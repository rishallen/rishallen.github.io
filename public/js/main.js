$(document).ready(function () {

  $('.hidden').css('visibility','visible').hide().fadeIn(6000);

  $(".greeting").click(function(){
     $("#sub1").slideUp("slow");
  });

  $("#sub").draggable({axis:"x"});

  $(function() {
   $( "#selectable" ).selectable();


  //  var href = $("a").attr('href');
  //  window.location.href = this.href; //causes the browser to refresh and load the requested url
  });

});
