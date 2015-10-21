$.noConflict();
jQuery(document).ready(function($) {
  $(".experience_details").hide();
  $(".expand").show();
  $(".experience_details", ".expanded").show();
  // $(".expand", ".expanded").html('<img src="images/icon_arrow_up.png" width="13" alt="collapse" />');
  $(".expand").each(function () {
    console.log('test');
    $(document).click(function () {
      console.log('test2');
      if ($(this).parent().hasClass("expanded")) {
          $(this).prev().hide("fast");
          $(this).parent().removeClass("expanded");
          $(this).html('<img src="images/icon_arrow_down.png" width="13" alt="expand" />');
      } else {
          $(".expanded").each(function () {
              $(".experience_details", this).hide("fast");
              $(".expand", this).html('<img src="images/icon_arrow_down.png" width="13" alt="expand" />')
              $(this).removeClass("expanded");
          });
          $(this).prev().show("fast");
          $(this).parent().addClass("expanded");
          $(this).html('<img src="images/icon_arrow_up.png" width="13" alt="collapse" />');
      }
      return false;
    });
  });
});