w3.includeHTML(myCallback);
function myCallback() {
  document.getElementById("text-banner").innerHTML = bannerName;
  $(function() {
    $('#load-me-later').show();
    $('#header-banner').show();
    $('#footer').show();
  });
}

$(window).on("load",function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut(4000);
});