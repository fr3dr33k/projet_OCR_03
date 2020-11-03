//============= SLIDER ==============//

var Slider = {

  currentSlide: 0,
  slides: new Array(),
  setImages: function(images){
      this.slides = images;
      },

  interval : null,

// Ecoute d'actions sur Slider
                                                  
  init: function(images){

    this.setImages(images);

    this.auto();

    this.displaySlide();

    // Au clic sur icon fleche droite || A l'appui sur clavier ' -> '
    
    $("#right").click(function(){
	  	this.next();
        this.reAutoAfterClickOrPress();
    }.bind(this));
    $("body").keydown(function(e){
      if(e.keyCode == 39){
        this.next();
        this.reAutoAfterClickOrPress();
      }
    }.bind(this));

    // Au clic sur icon fleche gauche || A l'appui sur clavier ' <- '
    
    $("#left").click(function(){
      this.prev();
      this.reAutoAfterClickOrPress();
    }.bind(this));
    $("body").keydown(function(e){
      if(e.keyCode == 37){
        this.prev();
        this.reAutoAfterClickOrPress();
      };
    }.bind(this));
    $("#pause").click(function(){
        this.pauseInterval();
    }.bind(this));
    $("#play").click(function(){
        this.pauseInterval();
        this.auto();
    }.bind(this));
   
  },

//Stop slider

  pauseInterval: function(){
    clearInterval(this.interval);
  },

  reAutoAfterClickOrPress : function(){
    this.pauseInterval();
    this.auto();
  },

//Mode auto

  auto: function(){
    this.interval = setInterval(function(){this.next()}.bind(this), 5000);    ///////bind this.next
  },

//Suivante slide 

  next: function(){
    if(this.currentSlide === this.slides.length-1){
      this.currentSlide = 0;
      this.displaySlide();
    } else{
      this.currentSlide++;
      this.displaySlide();
    };

  },

//Précédente slide

  prev: function(){
    if(this.currentSlide === 0){
      this.currentSlide  = this.slides.length-1;
      this.displaySlide();
    } else{
      this.currentSlide--;
      this.displaySlide();
    }

  },

//Affichage slide

  displaySlide: function() {

    $("#slide").attr("src" , this.slides[this.currentSlide][0]);
    if(this.currentSlide === 0) {
      var containHow = $("#imgContainHowUse");
      containHow.remove();
      var explainTxt = $("#overSlideExplain");
      explainTxt.remove();
      var txtContainHow = $("#txtContain").remove();
      txtContainHow.remove();
      $('#conteneurSlider').append(explain[0])
      $("#conteneurDescription").append(containHowUse[0])

    } else if(this.currentSlide === 1){

      var containHow = $("#imgContainHowUse");
      containHow.remove()
      var explainTxt = $("#overSlideExplain");
      explainTxt.remove();
      var txtContainHow = $("#txtContain").remove();
      txtContainHow.remove();
      $('#conteneurSlider').append(explain[1])
      $("#conteneurDescription").append(containHowUse[1])

    } else if(this.currentSlide === 2){

      var containHow = $("#imgContainHowUse");
      containHow.remove()
      var explainTxt = $("#overSlideExplain");
      explainTxt.remove();
      var txtContainHow = $("#txtContain").remove();
      txtContainHow.remove();
      $('#conteneurSlider').append(explain[2])
      $("#conteneurDescription").append(containHowUse[2])

    }
  }

};


