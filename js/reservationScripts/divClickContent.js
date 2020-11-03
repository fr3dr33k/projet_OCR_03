// ======= CONTENU DIVCLICK ===== //

var divClickContent = {

    //(1)
    noLoggedContent : function(){

        var conteneurMap = $("#conteneurMap");        // - Conteneur de GG map et de divclick
        var divClick = $("<div id='divClick'></div>");
        var titleDivClick = $("<p id='titleDivClick'></p>");
        var adrssNumbTitle = $("<p id='adrssNumbTitle'></p>");
        var labelName = $("<label id='labelName'></label>");
        var labelFirstN = $("<br><label id='labelFirstN'></label>");

        if(localStorage.name != undefined){
            var inputFirstN = $("<input id='inputFirstN' type='text' style='font-weight: lighter; color: gray'>").val(localStorage.firstName);
            var inputName = $("<input id='inputName' type='text' style='font-weight: lighter; color: gray'>").val(localStorage.name);
        } else{
            var inputFirstN = $("<input id='inputFirstN' type='text' style='font-weight: lighter; color: gray'>");
            var inputName = $("<input id='inputName' type='text' style='font-weight: lighter; color: gray'>");
        }

        var dispoBike = $("<p id='dispoBikeTitle'></p>");
        var submit = $("<input id='submit' type='submit' value='Cliquez pour signer'>");
        $(conteneurMap).append(divClick);
        $(divClick).append(titleDivClick);
        $(divClick).append(adrssNumbTitle);
        $(divClick).append(dispoBike);
        $(divClick).append(labelName);
        $(divClick).append(inputName);
        $(divClick).append(labelFirstN);
        $(divClick).append(inputFirstN);
        $(divClick).append(submit);
        $(labelName).append(inputName);
        $(labelFirstN).append(inputFirstN);
        $(titleDivClick).prepend("Détails station :<br>");
        $(adrssNumbTitle).prepend("<p>Numéro et Adresse :  <br><span id='adrssNumb'>" + myStation.name + " à l'adresse " + myStation.address + " </span></p><br>");
        $(dispoBike).prepend("Vélo(s) disponible(s) :  <br><span id='veloDispo'>" + myStation.available_bikes + "</span><br>");
        $(dispoBike).append("Place(s) de stationnement(s) :  <br><span id='veloDispo'>" + myStation.available_bike_stands + "</span><br>");
        $(labelName).prepend("Saisissez votre nom : <br>");
        $(inputName).append("<br><br>");
        $(labelFirstN).prepend("Saisissez votre prénom : <br>");
        $(inputFirstN).append("<br><br>");
        // Au click dirige vers controle de saisie
        $("#submit").click(function () {
            thatDivClickContent.inputVerif(inputName, inputFirstN);
        });

    },

    //(2)
    loggedContent : function(){

        var conteneurMap = $("#conteneurMap");
        var divClick = $("<div id='divClick'></div>");
        var titleDivClick = $("<p id='titleDivClick'></p>");
        var adrssNumbTitle = $("<p id='adrssNumbTitle'></p>");
        var dispoBike = $("<p id='dispoBikeTitle'></p>");
        var submit1 = $("<input id='submit1' type='button' value='Réservez-le'>");
        var paraName = $("<p><span id='paraName1'>Bienvenue,</span>" + " <span id='paraName'>" /* + localStorage.name.toUpperCase() + " "*/ + localStorage.firstName.toUpperCase() + "</span></p>");
        $(conteneurMap).append(divClick);
        $(divClick).append(titleDivClick);
        $(divClick).append(paraName);
        $(divClick).append(adrssNumbTitle);
        $(divClick).append(dispoBike);
        $(divClick).append(submit1);
        $(titleDivClick).prepend("Détails station :<br>");
        $(adrssNumbTitle).prepend("<p>Numéro et Adresse :<br><span id='adrssNumb'>" + myStation.name + " à l'adresse " + myStation.address + "</span></p>");
        $(dispoBike).prepend("Vélo(s) disponible(s) :<br><span id='veloDispo'>" + myStation.available_bikes + "</span></p>");
        $(dispoBike).append("Place(s) de stationnement(s) :<br><span id='veloDispo'>" + myStation.available_bike_stands + "</span></p>");

        $("#submit1").click(function(){
            //clearTimeout(reservationBike.counterEnd);
            reservationBike.reservationEnd();
            thatDivClickContent.reservation();
        })

    },

    //(3)
    noBikeAvailableContent : function(){

        var conteneurMap = $("#conteneurMap");
        var divClick = $("<div id='divClick'></div>");
        var titleDivClick = $("<p id='titleDivClick'></p>");
        var adrssNumbTitle = $("<p id='adrssNumbTitle'></p>");
        var dispoBikeStand = $('<p id="adrssNumbTitle">Nombre de place parking :<br><span id="adrssNumb">' + myStation.available_bike_stands + '</span></p>');
        $(conteneurMap).append(divClick);
        $(divClick).append(titleDivClick);
        $(divClick).append(adrssNumbTitle);
        $(divClick).append(dispoBikeStand);
        $(titleDivClick).prepend("Détails station :<br>");
        $(adrssNumbTitle).prepend("<p>Numéro et Adresse :<br><span id='adrssNumb'>" + myStation.name + " " +  myStation.address + "</span></p><br>");

    },

    //(4)
    closedStationContent : function () {

        var conteneurMap = $("#conteneurMap");
        var divClick = $("<div id='divClick'></div>");
        var titleDivClick = $("<p id='titleDivClick'>Désolé aucun vélo n'est disponible.</p><br>");
        var adrssNumbTitle = $("<p id='adrssNumbTitle'></p>");
        $(conteneurMap).append(divClick);
        $(divClick).append(titleDivClick);
        $(divClick).append(adrssNumbTitle);
        $(adrssNumbTitle).append("<p>Numéro et Adresse :<br><span id='adrssNumb'>" + myStation.name + " à l'adresse " +  myStation.address + "</span></p><br>");
        $(titleDivClick).css("margin" , "0.5em");
        $(titleDivClick).css("min-width" , "150px");

    }

};