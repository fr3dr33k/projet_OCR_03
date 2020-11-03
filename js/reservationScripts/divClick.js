// ========= DIVCLICK ======== //

var divClick = {

    noLogged: function(){
        divClickContent.noLoggedContent();                  // - Affiche les inputs (1)
    },

    logged : function () {
        divClickContent.noLoggedContent();                    // - Affiche si déja inscrit (2)
    },

    noBikeAvailable : function () {
        divClickContent.noBikeAvailableContent();           // - Affiche avec le nombre de place disponible (3)
    },

    closedStation : function () {
        divClickContent.closedStationContent();             // - Affiche que la station est fermée  (4)
    }

};