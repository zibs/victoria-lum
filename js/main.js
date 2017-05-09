$(document).ready(function() {
  $(".work-links > h5").hover(
    function() {
      let underscore = $(this).find("span").fadeTo("slow", 0).stop(true, true)
      $(this).click(function() {
        // remove click status from others
        $(".base-project").hide();
        $("span").not(underscore).fadeTo("slow", 1).stop(true, true)
        var project = "project-" + $(this).attr("id");
        $(".clicked").removeClass("clicked active");
        $(".project").not($(project)).removeClass("active").addClass("hidden");

        $(".active").not($(this)).removeClass("active");
        $("#" + project).toggleClass("active hidden");
        $(this).toggleClass("active");
        $(".clicked").not($(this)).removeClass("clicked");
        $(this).addClass("clicked");
      });

      event.stopPropagation();
    },
    function() {
      var project = "project-" + $(this).attr("id");
      if ($(this).hasClass("clicked")) {
      } else {
        $(this).find("span").fadeTo("slow", 1).stop(true, true)
        // $(this).removeClass("active");
        // $("#" + project).toggleClass("active hidden");
        // $(".base-project").show();
      }
    }
  );
});

$(document).ready(function() {
  $('.contact-email').click(function() {
    $('.email').toggleClass('hidden')
  })
})
