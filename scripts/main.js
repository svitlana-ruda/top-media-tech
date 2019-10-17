$(document).ready(function(){
    
    $('.menu-button').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });

});


window.onload = function() {


    // First animation
    
    var canvas = document.getElementById("anim1");
    var context = canvas.getContext("2d");
    var waveListFirst = [];

    var drawFirst = function() {
		window.requestAnimationFrame(drawFirst);
		waveListFirst[0].clearCanvas();

		for(var w of waveListFirst)
			w.redraw();
    }
    
    for(var i = 0; i < 5; i++) {
        waveListFirst.push(
            new Wave({
                canvas: canvas,
                frequency: 0.005,
                phase: 30 * i, 
                amplitude: 10 * (i+1),
                color: "#c69e78",
                shift: 1 * (i+1), 
                lineWidth: 0.5,
                outline: true,
                fill: false,
                gradient: false,
                origin: { x: 0, y: canvas.height/2 },
                fixedStart: false,
                fixedEnd: false,
                damping: false
            })
        );
    }

    drawFirst();


    // Second animation

    var canvas = document.getElementById("anim2");
    var context = canvas.getContext("2d");
    var waveListSecond = [];

    var drawSecond = function() {
		window.requestAnimationFrame(drawSecond);
		waveListSecond[0].clearCanvas();

		for(var w of waveListSecond)
			w.redraw();
    }
    
    for(var i = 0; i < 5; i++) {
        waveListSecond.push(
            new Wave({
                canvas: canvas,
                frequency: 0.003,
                phase: 50 * i, 
                amplitude: 30 * (i+1),
                color: "#c69e78",
                shift: 1 * (i+1), 
                lineWidth: 0.5,
                outline: true,
                fill: false,
                gradient: false,
                origin: { x: 0, y: canvas.height/2 },
                fixedStart: false,
                fixedEnd: false,
                damping: false
            })
        );
    }

    drawSecond();


    // Third animation

    var canvas = document.getElementById("anim3");
    var context = canvas.getContext("2d");

    var thirdwave = new Wave({
                        canvas: canvas,
                        frequency: 0.01,
                        phase: 90,
                        amplitude: 20,
                        color: "#c69e78",
                        shift: 1,
                        lineWidth: 0.5,
                        outline: true,
                        fill: false,
                        gradient: false,
                        origin: { x: 0, y: canvas.height/2 },
                        fixedStart: false,
                        fixedEnd: false,
                        damping: false
                    });

    thirdwave.draw();

}