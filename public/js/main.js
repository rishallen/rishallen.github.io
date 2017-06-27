$(document).ready(function () {

  $('.hidden').css('visibility','visible').hide().fadeIn(6000);

  $('.hide').css('visibility','visible').hide();
  $("#flip").click(function(){
     $("#panel").slideToggle("slow");
  });
  // Work Expereince: MEMBERSHIP
  $("#click3").click(function(){
     $("#panel3").slideToggle("slow");
  });

  //Work Expereince: Software Development Intern
  $("#click2").click(function(){
     $("#panel2").slideToggle("slow");
  });

  //Work Expereince: Counselor/Faculty
  $("#click13").click(function(){
     $("#panel13").slideToggle("slow");
  });

  // Work Expereince: MEMBERSHIP
  $("#click11").click(function(){
     $("#panel11").slideToggle("slow");
  });

  // Project: Tonalyze
  $("#click14").click(function(){
     $("#panel14").slideToggle("slow");
  });

  // Project: Besty
  $("#click5").click(function(){
     $("#panel5").slideToggle("slow");
  });

  // Project: Sentiment
  $("#click6").click(function(){
     $("#panel6").slideToggle("slow");
  });

  // Project: Sentiment
  $("#click6").click(function(){
     $("#panel6").slideToggle("slow");
  });

  // Project: Sentiment
  $("#click15").click(function(){
     $("#panel15").slideToggle("slow");
  });

  // Education: Floodgate
  $("#click16").click(function(){
     $("#panel16").slideToggle("slow");
  });

  // Education: ADA
  $("#click8").click(function(){
     $("#panel8").slideToggle("slow");
  });

  // Education: SPU
  $("#click9").click(function(){
     $("#panel9").slideToggle("slow");
  });

  // Education: UW
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
