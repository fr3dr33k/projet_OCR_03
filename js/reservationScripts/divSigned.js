// SI RESERVATION EN COURS AFFICHE DIRECTEMENT L'ENCART DE RESERVATION

if(sessionStorage.seconds > 0){
    reservationBike = new Object(ReservationBike);
    thatReservationBike = reservationBike;
    reservationBike.reActiveReservation();
    reservationBike.reStartCounter();
}