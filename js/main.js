
// ========= MAIN ======== //

function main(){
    //SLIDER
    var mySlider = new Object(Slider);
    explain = [ $("<p id='overSlideExplain'> - <img src='img/dispo.png'> - </br><span id='overSlideExplainText'>possible de réserver.</span></p>"),
        $("<p id='overSlideExplain'> - <img src='img/noPark.png'> - </br><span id='overSlideExplainText'>voir le nombre de place disponible.</span></p>"),
        $("<p id='overSlideExplain'> - <img src='img/nonDispo.png'> - </br><span id='overSlideExplainText'>station est fermée.</span></p>")
    ];
    containHowUse = [
        $('<p id="txtContain">1) Cliquez sur un marqueur de votre choix</p><br><p id="imgContainHowUse"><img src="img/s1.png"></p>'),
        $('<p id="txtContain">2) Saisissez votre nom et prénom</p><br><p id="imgContainHowUse"><img src="img/s2.png"></p>'),
        $('<p id="txtContain">3) Signez et cliquez sur le bouton réservez</p><br><p id="imgContainHowUse"><img src="img/s4.png"></p>'),
        //$('<img id="imgContainHowUse" src="img/s3.png"><br><span id="txtContain">Votre vélo est réservé à la station que vous avez choisi ! :)<br></span>'),
    ];
    var images = [
        ["img/velov4.jpg", explain, containHowUse],
        ["img/velov1.jpeg", explain, containHowUse],
        ["img/velov7.jpeg", explain, containHowUse]
    ];

    //MAP
    var myMap = new Object(MapLeaflet);

    //MAIN
    mySlider.init(images);
    myMap.that();
    myMap.initMap();
}
main();