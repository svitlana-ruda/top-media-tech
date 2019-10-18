$(document).ready(function(){
    
    $('.menu-button').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });

});


window.onload = function() {


var waves = new SineWaves({
    el: document.getElementById('anim1'),
    
    speed: 1,
    
    width: function() {
      return $(window).width();
    },
    
    // height: function() {
    //   return $(window).height();
    // },
    
    ease: 'SineInOut',
    
    wavesWidth: '70%',
    
    waves: [
      {
        timeModifier: 4,
        lineWidth: 0.3,
        amplitude: -25,
        wavelength: 25
      },
      {
        timeModifier: 2,
        lineWidth: 0.3,
        amplitude: -50,
        wavelength: 50
      },
      {
        timeModifier: 1,
        lineWidth: 0.3,
        amplitude: -100,
        wavelength: 100
      },
      {
        timeModifier: 0.5,
        lineWidth: 0.3,
        amplitude: -200,
        wavelength: 200
      },
      {
        timeModifier: 0.25,
        lineWidth: 0.3,
        amplitude: -400,
        wavelength: 400
      }
    ],
   
    // Called on window resize
    resizeEvent: function() {
      var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
      gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
      gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
      
      var index = -1;
      var length = this.waves.length;
        while(++index < length){
        this.waves[index].strokeStyle = "#c69e78";
      }
      
      // Clean Up
      index = void 0;
      length = void 0;
      gradient = void 0;
    }
  });

  var waves = new SineWaves({
    el: document.getElementById('anim2'),
    
    speed: 1,
    
    width: function() {
      return $(window).width();
    },
    
    // height: function() {
    //   return $(window).height();
    // },
    
    ease: 'SineInOut',
    
    wavesWidth: '70%',
    
    waves: [
      {
        timeModifier: 4,
        lineWidth: 0.3,
        amplitude: -25,
        wavelength: 25
      },
      {
        timeModifier: 2,
        lineWidth: 0.3,
        amplitude: -50,
        wavelength: 50
      },
      {
        timeModifier: 1,
        lineWidth: 0.3,
        amplitude: -100,
        wavelength: 100
      },
      {
        timeModifier: 0.5,
        lineWidth: 0.3,
        amplitude: -200,
        wavelength: 200
      },
      {
        timeModifier: 0.25,
        lineWidth: 0.3,
        amplitude: -400,
        wavelength: 400
      }
    ],
   
    // Called on window resize
    resizeEvent: function() {
      var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
      gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
      gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
      
      var index = -1;
      var length = this.waves.length;
        while(++index < length){
        this.waves[index].strokeStyle = "#c69e78";
      }
      
      // Clean Up
      index = void 0;
      length = void 0;
      gradient = void 0;
    }
  });

  var waves = new SineWaves({
    el: document.getElementById('anim3'),
    
    speed: 1,
    
    width: function() {
      return $(window).width();
    },
    
    // height: function() {
    //   return $(window).height();
    // },
    
    ease: 'SineInOut',
    
    wavesWidth: '70%',
    
    waves: [
      {
        timeModifier: 4,
        lineWidth: 0.3,
        amplitude: -25,
        wavelength: 35
      }
    ],
   
    // Called on window resize
    resizeEvent: function() {
      var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
      gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
      gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
      
      var index = -1;
      var length = this.waves.length;
        while(++index < length){
        this.waves[index].strokeStyle = "#c69e78";
      }
      
      // Clean Up
      index = void 0;
      length = void 0;
      gradient = void 0;
    }
  });

}