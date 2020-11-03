// ============== CANVAS ========== //

function canvas() {

    $("#submit").remove();
    $("#divClick").append('<div id = "canvasDiv" width="150px" height="180px"></div>');
    var canvasDiv = $("#canvasDiv");
    var canvas = $("<canvas id='canvas' width='150' height='180'></canvas>");
    var submit1 = $("<input id='submit1' type='button' value='Réservez-le'>");
    canvasDiv.append(canvas);
    var clear = $("<i id='clear' class='fas fa-sync-alt'>");
    canvasDiv.append(clear);
    canvasDiv.append(submit1);
    var canvas = $("#canvas");
    var mousePressed = false;
    var lastX, lastY;
    var ctx;
    ctx = document.getElementById("canvas").getContext("2d");

    /* CLIC SOURIS CANVAS */

    $('#canvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#canvas').mousedown(function (e) {
        //console.log("souris appuyé ! ");
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#canvas').mouseup(function (e) {
        //console.log("souris relaché");
        mousePressed = false;
    });
    $('#canvas').mouseleave(function (e) {
        //console.log("reste");
        mousePressed = false;
    })

    function Draw(x, y, isDown) {
        if (isDown) {
            ctx.beginPath();
            ctx.strokeStyle = $('#selColor').val();
            ctx.lineWidth = $('#selWidth').val();
            ctx.lineJoin = "round";
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.stroke();
        }
        lastX = x;
        lastY = y;
    }

    $("#clear").click(function clearArea() {
        // Use the identity matrix while clearing the canvas
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    })

    $("#submit1").on("click", function () {

        if (sessionStorage.minutes || sessionStorage.seconds) {
            reservationBike = new Object(ReservationBike);
            reservationBike.reservationEnd();
            thatMapLeaflet.reservation();
        } else {
            thatMapLeaflet.reservation();
        }

    })
}
