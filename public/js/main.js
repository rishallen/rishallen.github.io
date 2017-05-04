$(document).ready(function () {
  $('.hidden').css('visibility','visible').hide().fadeIn(6000);

  $(".greeting").click(function(){
     $("#sub1").slideUp("slow");
  });

  $("#sub").draggable({axis:"x"});

  $(function () {
    $("#selectable").selectable({
      selected: function (event, ui) {
        var selected = $("li[class$='ui-selected']").length;
      }
    });
  });

});
