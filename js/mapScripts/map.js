//=========== LEAFLET MAP ============//

var MapLeaflet = {

    icon1 : "img/dispo.png",
    icon2 : "img/nonDispo.png",
    icon3 : "img/noPark.png",
    lyon : {lat: 45.750000, lng: 4.850000},
    valeurName : null,
    valeurFirstN : null,
    urljcd: "https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=b7b2cc0898cd2664ab049efd4f80b6b9a016ed25",

    // - Initialisation de la map && requete AJAJ - //

    that : function(){ // that fait référence à this dans le contexte voulu
        thatReservation = this;
        thatMapLeaflet = this;
        thatDivClickContent = this;
        thatDisplayRightBloc = this;
        thatAjax = this;
        thatStation = this;
    },

    initMap: function(){

       map = L.map('map').setView(this.lyon, 16);

        L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
            maxZoom : 15
        }).addTo(map);

        ajaxGet(this.urljcd, function (data) {
            stations = JSON.parse(data);
            stations.forEach(function(station) {
                Station = station;
                thatAjax.addMarkers(Station);
                thatAjax.eventListMarker(Station);
            });

        });

    },

    // - Mise en place des marqueurs sur map

    addMarkers : function(Station){

        if(Station.status === "OPEN" && Station.available_bikes > 0) {
            var dispoIco = L.icon({
                iconUrl: this.icon1
            });
            lyonMarker = L.marker(Station.position, {icon : dispoIco}).addTo(map);
        } else if(Station.status === "CLOSED"){
            var closeIco = L.icon({
                iconUrl: this.icon2
            });
            lyonMarker = L.marker(Station.position, {icon : closeIco}).addTo(map);
        } else if(Station.status === "OPEN" && Station.available_bike_stands > 0 && Station.available_bikes === 0){
            var noPark = L.icon({
                iconUrl: this.icon3
            });
            lyonMarker = L.marker(Station.position, {icon: noPark}).addTo(map);
        }
    },

    // - Mise en place d'eventListener sur map google

    eventListMarker : function(Station){

        lyonMarker.on('click', function () {
            myStation = Station;
            $("#divClick").remove();
            if(Station.status === "OPEN" && Station.available_bikes > 0){
                thatDisplayRightBloc.displayRightBloc(Station);
            } else if(Station.status === "OPEN" && Station.available_bikes === 0 && Station.available_bike_stands > 0){
                thatDisplayRightBloc.displayRightBloc(Station);
            } else if(Station.status === "CLOSED"){
                thatDisplayRightBloc.displayRightBloc(Station);
            }
        }).addTo(map);

    },

    // - Mise en place du bloc apparant après click sur marqueurs selon status station

    displayRightBloc : function(Station){

        if(Station.status === "OPEN" && Station.available_bikes > 0){

            if(localStorage.name){
                divClick.logged();
            } else if(localStorage.firstName === undefined){

               divClick.noLogged();

            }

        } else if(Station.status === "OPEN" && Station.available_bikes === 0 && Station.available_bike_stands > 0){

            divClick.noBikeAvailable();

        } else if(Station.status === "CLOSED"){

            divClick.closedStation();

        }

    },

    // - Vérification des saisies users && redirige vers l'objet reservationBike

    inputVerif : function(inputName , inputFirstN){

        var valeurAccept = /^[a-zA-ZÀ-ÿ]+$/;
        this.valeurName = $(inputName).val();
        this.valeurFirstN = $(inputFirstN).val();

        if((this.valeurName.length >= 2 && this.valeurFirstN.length > 2) &&
        this.valeurName.match(valeurAccept) && this.valeurFirstN.match(valeurAccept)){

            $('#labelName').remove();
            $('#inputName').remove();
            $('#labelFirstN').remove();
            $('#inputFirstN').remove();

            this.displayCanvas();

        } else if(this.valeurName.length === 0 || this.valeurFirstN.length === 0){
            alert("Veuillez saisir quelque chose.");
            return false;
        } else if(!this.valeurName.match(valeurAccept) || !this.valeurFirstN.match(valeurAccept)){
            alert("Les caractères saisis ne composent pas un nom ou prénom.");
            return false;
        }

    },

    // - Initialisation canvas signature

    displayCanvas : function(){

        canvas();

    },

    reservation : function(){
        reservationBike = new Object(ReservationBike);
        reservationBike.init();
        reservationBike.activeReservation();
    }



};





























/********************************************************************************************** */

        /* CLIC CANVAS TACTILE */
        
        //$('#canvas').on( "touchstart" , function (e) {
        //    e.preventDefault();
        //    console.log("tactile ok");
        //    mousePressed = true;
        //    Draw(Touch.pageX - $(this).offset().left, Touch.pageY - $(this).offset().top, false);
        //});
        //$('#canvas').on("touchmove" , function (e) {
        //    e.preventDefault();
        //    console.log("bouge");
        //    console.log($(this).offset().top);
        //    if (mousePressed) {
        //        //console.log("souris bougé appuyé !")
        //        Draw(Touch.pageX - $(this).offset().left, Touch.pageY - $(this).offset().top, true);
        //    }
        //});
        //$('#canvas').on("touchend" , function (e) {
        //    e.preventDefault();
        //    //console.log("souris relaché");
        //    mousePressed = false;
        //    console.log("relaché");
        //})

/*callbackStation : function(data){

stations = JSON.parse(data);
console.log(stations);
stations.forEach(this.forEachStation.bind(this));

},

forEachStation : function(station){

Station = station;

this.addMarkers(Station);
this.eventListMarker(Station);

},*/

//eventListMarker : function(){
//
//    lyonMarker.on('click', this.eventListMarkerBind.bind(this)).addTo(map);
//    //myStation = Station;  // create myStation for use in ---- > divClickContent.js
//    //console.log(myStation);
//
//},
//
//eventListMarkerBind : function(){
//
//    myStation = Station;  // create myStation for use in ---- > divClickContent.js
//
//    $("#divClick").remove();
//
//    if(Station.status === "OPEN" && Station.available_bikes > 0){
//
//        this.displayRightBloc(Station);
//
//    } else if(Station.status === "OPEN" && Station.available_bikes === 0 && Station.available_bike_stands > 0){
//
//        this.displayRightBloc(Station);
//
//    } else if(Station.status === "CLOSED"){
//
//        this.displayRightBloc(Station);
//
//    }
//
//},

/************************************************************************************************ */



