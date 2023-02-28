
function Lagre() {
    var innhold = document.getElementById("myTextarea").value;
    //key = innhold, mens verdi blir inputen
    localStorage.setItem("innhold", innhold);
  }
function Last() {
    var innhold = localStorage.getItem("innhold");
    document.getElementById("myTextarea").value = innhold;
  }