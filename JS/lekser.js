
function promtTing() {
            
    //Henter elementet via ID
    document.getElementById("mlem").innerHTML = sporr;

    //apostrok fordi det er tekst (string)
    svar = "uhmm skjønte ikke helt..."
    //var fordi let ikke kan bli deklarert mer enn en gang
    //gir variblen en verdi (promptet yk)
    var sporr = prompt("Må du jobbe med skole i dag?")
    // == fordi den må ha samme verdi, altså at "ja" = ja er true, men "ja" = lol er false. Mulig med === også, da er både verdien og datatypen lik.
    if (sporr == "ja") {
        var sporr = prompt("Har du jobbet med skole i dag?");
        if (sporr == "ja") {
            svar = "Du overlevde!";
        } else if (sporr == "nei"){
            svar = "Begynn å jobb da!";
        }      
    } else if (sporr == "nei") {
        svar = "Heldig du er :(";
    }
    // Ikke nødvendig med else fordi default svar allerede er der og kjører uten else.
    // hvis ikke noen av conditions-ene blir "met" så blir default else ig.
    document.getElementById("mlem").innerHTML = svar;
}