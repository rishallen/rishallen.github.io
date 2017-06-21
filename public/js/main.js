$(document).ready(function () {

  $('.hidden').css('visibility','visible').hide().fadeIn(6000);

  $('.hide').css('visibility','visible').hide();
  $("#flip").click(function(){
     $("#panel").slideToggle("slow");
  });

  //Work Expereince: Software Development Intern
  $("#click2").click(function(){
     $("#panel2").slideToggle("slow");
  });

  //Work Expereince: Counselor
  $("#click3").click(function(){
     $("#panel3").slideToggle("slow");
  });

  // Project: Tonalyze
  $("#click4").click(function(){
     $("#panel4").slideToggle("slow");
  });

  // Project: Besty
  $("#click5").click(function(){
     $("#panel5").slideToggle("slow");
  });

  // Project: World Traveler
  $("#click6").click(function(){
     $("#panel6").slideToggle("slow");
  });

  // Education: Floodgate
  $("#click7").click(function(){
     $("#panel7").slideToggle("slow");
  });

  // Education: Floodgate
  $("#click8").click(function(){
     $("#panel8").slideToggle("slow");
  });

  // Education: Floodgate
  $("#click9").click(function(){
     $("#panel9").slideToggle("slow");
  });

  // Education: Floodgate
  $("#click10").click(function(){
     $("#panel10").slideToggle("slow");
  });

  //rotate the words in top header
  $(".rotate").textrotator({
  animation: "spin",
  separator: ",",
  speed: 3000
  });

});
