$(document).ready(function() {
  $(".work-links > h5").hover(
    function() {
      $(this).find("span").fadeTo("slow", 0)
      $(".base-project").hide();
      var project = "project-" + $(this).attr("id");

      $(".clicked").removeClass("clicked active");
      $(".project").not($(project)).removeClass("active").addClass("hidden");

      $(".active").not($(this)).removeClass("active");
      $("#" + project).toggleClass("active hidden");
      $(this).toggleClass("active");

      $(this).click(function() {
        // remove click status from others
        $(".clicked").not($(this)).removeClass("clicked");
        $(this).addClass("clicked");
      });

      event.stopPropagation();
    },
    function() {
      var project = "project-" + $(this).attr("id");
      if ($(this).hasClass("clicked")) {
        console.log("not going to do anyhting else");
      } else {
        $(this).find("span").fadeTo("slow", 1)
        $(this).removeClass("active");
        $("#" + project).toggleClass("active hidden");
        $(".base-project").show();
      }
    }
  );
});
