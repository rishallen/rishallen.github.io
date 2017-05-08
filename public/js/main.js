$(document).ready(function () {

  $('.hidden').css('visibility','visible').hide().fadeIn(6000);

  $(".greeting").click(function(){
     $("#sub1").slideUp("slow");
  });

  $("#sub").draggable({axis:"x"});

  $(function() {
   $("#selectable").selectable();
  });

  $(function() {
   $("#selectable2").selectable();
  });

  $(function() {
   $("#selectable-summary").selectable();
  });

});
