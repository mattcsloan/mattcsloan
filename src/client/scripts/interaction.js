// (function() {
//   'use strict';

//   init();

//   function init() {
//     // Experience Page - Accordions
//     $(".experience_details").hide();
//     $(".expand").show();
//     $(".experience_details", ".expanded").show();
//     $(".expand", ".expanded").html('<img src="images/icon_arrow_up.png" width="13" alt="collapse" />');
//     $(".expand").each(function () {
//         $(this).click(function () {
//             if ($(this).parent().hasClass("expanded")) {
//                 $(this).prev().hide("fast");
//                 $(this).parent().removeClass("expanded");
//                 $(this).html('<img src="images/icon_arrow_down.png" width="13" alt="expand" />');
//             } else {
//                 $(".expanded").each(function () {
//                     $(".experience_details", this).hide("fast");
//                     $(".expand", this).html('<img src="images/icon_arrow_down.png" width="13" alt="expand" />')
//                     $(this).removeClass("expanded");
//                 });
//                 $(this).prev().show("fast");
//                 $(this).parent().addClass("expanded");
//                 $(this).html('<img src="images/icon_arrow_up.png" width="13" alt="collapse" />');
//             }
//             return false;
//         });
//     });

//     // Contact Page - Workload Indicator
//     $('.workload').fadeIn('slow');
//     console.log('workload');
//     $('.workload span').animate({
//         width: '87%'
//     }, 2000, function () {
//         $('.workload_content').css({ visibility: "visible" });
//     });

//     // Portfolio Page - Scroll To Top functionality
//     $('.top').click(function () {
//         $('body,html').animate({
//             scrollTop: 0
//         }, 800);
//         return false;
//     });
//   }
// })();