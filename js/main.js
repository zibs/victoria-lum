$(document).ready(function() {
    $(".work-links > h5").hover(
      function() {
      $(".base-project").hide()
      var project = 'project-' + $(this).attr('id')
      $('.active').not($(this)).removeClass('active');
      $('#' + project).toggleClass('active hidden')
      $(this).toggleClass('active');
      event.stopPropagation();
    },
    function() {
      var project = 'project-' + $(this).attr('id')
      $(this).removeClass('active')
      $('#' + project).toggleClass('active hidden')
      $(".base-project").show()
    }
  )
});
