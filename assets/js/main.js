w3.includeHTML(myCallback);
var bannerName = "taxes";
function myCallback() {
  const headerBanner = document.querySelector("#header-banner");
  const newItem = document.createElement("div");
  newItem.innerHTML =
    '<div class="container"> <div class="row header-box d-flex align-content-center"> <div class="col-lg-6 pl-lg-5 header-content"> <h1 class="head-text my-0">IT\'S MORE FUN IN</h1> <h1 class="head-text text-white display-3 mt-0">SORSOGON</h1><a href="#about"><button class="btn btn-header" type="button">KNOW MORE</button></a> </div> </div> </div> </div>';
  headerBanner.parentNode.replaceChild(newItem, headerBanner);
  $(function () {
    $("#hero").height("100vh");
    $("#hero").prepend(
      '<img src="./assets/images/whaleshark1.png" alt="whaleshark-shadow" id="whaleshark" class="d-none d-lg-block">'
    );
    $("#load-me-later").show();
    $("#footer").show();
  });
}
$(window).on("load", function () {
  // Animate loader off screen
  $(".se-pre-con").fadeOut(4000);
});
