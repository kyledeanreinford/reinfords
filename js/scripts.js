// Change nav background color on nav on scroll
document.body.onscroll = function changeNavBackground() {
  if (document.body.scrollTop > 275 || document.documentElement.scrollTop > 275) {
    document.getElementById('main1Overlay').className = "navOnScroll";
    console.log("scrolling");
  } else {
    document.getElementById('main1Overlay').className = "navBeforeScroll";
  };
}
