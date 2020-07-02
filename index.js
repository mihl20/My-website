var current = new Date();
var day_night = current.getHours();

if(day_night >= 18) {
  $("body").addClass("night").removeClass("morning").removeClass("afternoon");
  $("h1").text("Good Evening Michael");
  $("h2").text("What can I help you with tonight?");
} else if(day_night < 18 && day_night >= 12) {
  $("body").addClass("afternoon").removeClass("night").removeClass("morning");
  $("h1").text("Good Afternoon Michael");
  $("h2").text("What can I help you with this afternoon?");
} else {
  $("body").addClass("morning").removeClass("night").removeClass("afternoon");
  $("h1").text("Good Morning Michael");
  $("h2").text("What can I help you with this morning?");

}
