
let button = document.getElementById("toppBtn");
//når brukeren scroller 20 px dukker knappen opp
window.onscroll = function() {scrolle()};

function scrolle() {
  //hvis over 20px vertikalt
  //doc.body er for body elementet, mens doc.docElement for HTML element
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
//knappen trykkes og du blir sendt til toppen av dokumentet
function topFunction() {
  document.documentElement.scrollTop = 0;
}