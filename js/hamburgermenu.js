$(function() {
    $('.hamburgermenu').click(function() {
        $('#line1').toggleClass('line1_1');
        $('#line2').toggleClass('line2_1');
        $('#line3').toggleClass('line3_1');
        $('.sidemenu').toggleClass('in');
    });
  });