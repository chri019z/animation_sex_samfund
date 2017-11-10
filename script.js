$(document).ready(function)() {


    $(".rum_container").on("click", move);

    function move() {
        console.log("Click")
        $(".rum_container").addClass("morten_float")
    }



}









/*var klikTaeller = 0;
var erDerKlikketPaaAlleKnapper = false;

function koerScriptet() {
    console.log("kør scriptet");


    $(".knap").on("click", knapKlik);
    //5000 = 5 sekunder, da det millisekunder.
    setTimeout(tidGaaet, 5000);
}

function knapKlik() {

    klikTaeller++;
    console.log("knap er klikket!", klikTaeller);
    //hvis man HAr klikket på alle knapper, er variablen true. Variablen som en 1 eller 0. Eller i grafik sætninger, true/false, til/fra.
    if (klikTaeller == 5) {
        erDerKlikketPaaAlleKnapper = true;
        //console.log("DU HAR VUNDET!");
        hvordenGikDet();

    }
    // "this" refererer til hosliggende funktion. "off" slår knappen fra. addClass gør_rød alm_cursor deaktivere knapperne visuelt når trykket.
    $(this).off("click");
    $(this).addClass("goer_roed alm_cursor");

}

function tidGaaet() {

    //hvis man ikke har klikket på alle knapper, variable false, log osv.
    if (erDerKlikketPaaAlleKnapper == false) {
        //console.log("tiden er gået. DU HAR TABT!");
        hvordenGikDet();
        $(".knap").off("click");
        $(".knap").addClass("alm_cursor");
    }
}

function hvordenGikDet() {

    if (erDerKlikketPaaAlleKnapper == true) {
        console.log("DU HAR VUNDET!");
    } else {
        console.log("tiden er gået. DU HAR TABT!");
    }
}*/
