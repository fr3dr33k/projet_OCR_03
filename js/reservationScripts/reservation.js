// ========== RESERVATION ============ //

var ReservationBike = {

    minutes : 45, // Minutes du compte à rebours
    seconds : 1, // Secondes du compte à rebours
    station : null,
    stationName : null,
    stationAddress : null,
    firstName : null,
    name: null,
    minutesElement : null, // Élément minutes (celui qui sera inséré dans le HTML)
    secondsElement : null, // Éléments secondes (celui qui sera inséré dans le HTML)
    counter : null, // Attribut du compte à rebours
    counterElement : null,
    counterEnd : null, // Attribut du compte à rebours terminé
    cancelReservation : false, // Demande de confirmation d'annulation de la réservation

    init : function(){

            thatReservationBike = this;
            this.station = myStation;
            this.stationAddress = myStation.address;
            this.stationName = myStation.name;
            this.firstName = thatMapLeaflet.valeurFirstN;
            this.name = thatMapLeaflet.valeurName;
    },

    activeReservation : function(){

        sessionStorage.setItem("minutes" , this.minutes);
        sessionStorage.setItem("seconds" , this.seconds);
        sessionStorage.setItem("stationAddress" , this.stationAddress);
        localStorage.setItem("firstName" , this.firstName);
        localStorage.setItem("name" , this.name);

        //this.

        this.counter = setInterval("thatReservationBike.initCounter()" , 1000);//affichage couper en deux a mettre autre : displayReservation
        this.initCounter();//affichage couper en deux a mettre autre : displayReservation

    },

    displayReservationDiv : function(){

        $("#divSigned").remove();
        divSigned = $("<div id='divSigned'></div>");
        $("body").append(divSigned);

        String.prototype.capitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }

        $("#divSigned").html("<p id='divSignedText'>Félicitation " +
            "<span id='divSignedTextInfo'>" + localStorage.name.capitalize() +
            " " + localStorage.firstName.capitalize() + "</span>" +
            ", votre vélo a été réservé à la station :   " + "<span id='divSignedTextInfo'>" +
            sessionStorage.stationAddress + " </span>"+ "<br><br></p> Pour une durée de  " +
            "<span id='divSignedTextInfo'>" + this.minutes + " minutes et " + this.seconds +
            " secondes </span>");

    },

    initCounter : function(){

        if(this.minutes < 10){
            this.minutesElement = "0" + this.minutes;
        } else{
            this.minutesElement = this.minutes;
        }

        if(this.seconds < 10){
            this.secondsElement = "0" + this.seconds;
        } else{
            this.secondsElement = this.seconds;
        }

        this.startCounter();
        this.displayReservationDiv();

    },

    //Démarage du compteur avec ses conditions
    startCounter : function(){

        if((this.minutes >= 0) && (this.seconds > 0)){

            this.seconds--;
            sessionStorage.setItem("seconds" , this.seconds);

        } else if((this.minutes > 0 ) && (this.seconds <= 0)){

            this.seconds = 59;
            this.minutes--;

            sessionStorage.setItem("minutes" , this.minutes);
            sessionStorage.setItem("seconds" , this.seconds);

        } else if((this.minutes === 0) && (this.seconds === 0)){

            $("#divSigned").remove();
            this.counterEnd = setTimeout("thatReservationBike.reservationEnd()" , 1000);
            this.resetReservation();

        }

    },

    //Init sessionStorage et arrêt du compteur
    reservationEnd : function(){

        $("#divSigned").remove();

        clearInterval(this.counter);

        this.minutes = 45;
        this.seconds = 1;
        this.minutesElement = null;
        this.secondsElement = null;

        sessionStorage.clear();

        clearTimeout(this.counterEnd);

    },

    //Init du storage après une reservation terminée
    resetReservation : function(){

        if(this.counterEnd){

            sessionStorage.clear();
            clearInterval(this.counter);

            this.activeReservation();

        } else if(sessionStorage.length > 0){

            this.counterEnd;
            this.reservationEnd();

        }

    },

    reActiveReservation : function(){
        this.minutes = sessionStorage.minutes;
        this.seconds = sessionStorage.seconds;
        this.counter = setInterval("thatReservationBike.initCounter()" , 1000);//affichage couper en deux a mettre autre : displayReservation
        this.initCounter();//affichage couper en deux a mettre autre : displayReservation
    },

    reStartCounter : function () {
        if((this.minutes >= 0) && (this.seconds > 0)){

            this.seconds--;

        } else if((this.minutes > 0 ) && (this.seconds <= 0)){

            this.seconds = 59;
            this.minutes--;

        } else if((this.minutes === 0) && (this.seconds === 0)){

            $("#divSigned").remove();
            this.counterEnd = setTimeout("thatReservationBike.reservationEnd()" , 1000);
            this.resetReservation();

        }
    }

};