$(document).ready(function()    {
 
const start = function()  {

  const openCredits = document.getElementById("leah-mice__movie");
  const playButton = document.getElementById("play-btn__movie");
  const pauseButton = document.getElementById("pause-btn__movie");
  const ppButton = document.getElementById("pp-btn__movie");

// array that holds Leah Rose titles
const synopsisLeahRose = [`New York City.`, 
`Summer 1929.`, 
`She has it all. Youth. Beauty. A loving husband. A beautiful home. 
Enough money for a lifetime.`, 
`And during the last summer of the 1920s, popular socialite Leah Rose indulges
in all the delights the good life has to offer with husband Alfred and their 
circle of fabulous friends.`, 
`But what Leah and no one else around her knows is that these glorious golden days
are numbered. Just a few miles south of her
exclusive Upper East Side address, a storm is brewing on Wall Street. 
Born of years of reckless stock speculation,
the storm will strike at the very heart of the global
economy. And when it does in the final days of October, it leaves Leah's world 
of privilege and security utterly destroyed.`, 
`In the desperate months that follow, while Alfred leaves town to try his hand at 
bootlegging in a bid to restore that cherished world,
Leah grudgingly agrees to stay with a trusted but strapped actor friend from his 
youth in a squalid house he shares with other starving artists, intellectuals 
and people on the fringes of society.`, 
`Living among these Greenwich Village bohemians for whom 
she has little affection, Leah will face hard realities
her pampered existence has left her ill-equipped to meet - an unplanned pregnancy; a landlord who 
wants her out unless she can pay rent; having to find a job with no experience; and with each 
passing day he's gone, the growing fear that Alfred isn't coming back. All against the spectre of 
dangerous new political ideologies on the rise.`, 
`Yet even with all she's lost, Leah will come to gain something far more valuable.
Through her difficult journey and the people she meets along the way, Leah 
will discover who she really is. Learning a trade and sobering up, she reconnects with her roots and 
awakens to the plight of the powerless, and emerges with a sense 
of purpose far greater than anything she's ever known, and the strength and wisdom to 
face whatever the dark days ahead may bring.`, 
`When the world around her lost its way, she made her own.`,
`Leah Rose`, 
`"This is a masterful work that deserves to be recognized and produced."`,
`–– Austin Film Festival Reader`];



const soundPlay = function(e) {
      openCredits.play();
    //   synopsisLeahRose[0].start();
      picturePlay();
      console.log("roll sound!")
  }

  $("#play-btn__movie").on("click", function() {
    soundPlay(openCredits);
   });
 
  const soundPause = function(e) {
      openCredits.pause(); 
    //   picturePause();
      console.log("pause sound!")
  }

  $("#pause-btn__movie").on("click", function() {
    soundPause(openCredits);
   });



  const soundPP = function(e)   {
      if (openCredits.paused)  {
          openCredits.play();
          picturePlay();
        //   ppButton.textContent = "PAUSE";
          $(".pp-symbol__movie").html("&#10073; &#10073;");
      }
      else {
          openCredits.pause();
        //   ppButton.textContent = "PLAY";
          $(".pp-symbol__movie").html("&#x25ba;");
  }
}

$("#pp-btn__movie").on("click", function() {
    soundPP(openCredits);
   });

const picturePlay = function(e)   {
     
      $("#lr-syn1__movie").html(synopsisLeahRose[0]).delay(1000).fadeIn(500).delay(6000).fadeOut(500);
      $("#lr-syn2__movie").html(synopsisLeahRose[1]).delay(4500).fadeIn(1000).delay(2000).fadeOut(500);
      
      $("#lr-syn3__movie").html(synopsisLeahRose[2]).delay(11000).fadeIn(500).delay(19000).fadeOut(500);
      $("#lr-syn4__movie").html(synopsisLeahRose[3]).delay(14000).fadeIn(500).delay(16000).fadeOut(500);
      $("#lr-syn5__movie").html(synopsisLeahRose[4]).delay(16000).fadeIn(500).delay(14000).fadeOut(500);
      $("#lr-syn6__movie").html(synopsisLeahRose[5]).delay(19000).fadeIn(500).delay(11000).fadeOut(500);
      $("#lr-syn7__movie").html(synopsisLeahRose[6]).delay(22000).fadeIn(500).delay(8000).fadeOut(500);
      $("#lr-syn8__movie").html(synopsisLeahRose[7]).delay(25000).fadeIn(500).delay(5000).fadeOut(500);
      
      $("#lr-tagline__movie").html(synopsisLeahRose[8]).delay(33000).fadeIn(500).delay(11000).fadeOut(500);
      $("#lr-title__movie").html(synopsisLeahRose[9]).delay(38000).fadeIn(1000).delay(5500).fadeOut(500);
      
      $("#lr-aff-img__movie").delay(46000).fadeIn(1000).delay(11500).fadeOut(500);
      $("#lr-quote__movie").html(synopsisLeahRose[10]).delay(49000).fadeIn(1000).delay(8500).fadeOut(500);
      $("#lr-aff__movie").html(synopsisLeahRose[11]).delay(51000).fadeIn(1000).delay(6500).fadeOut(500);
          

      console.log("roll credits!")
      // return;    
    //   stop();                                     // return to stop function?
  }

//   const picturePause = function(e)   {
//       synopsisLeahRose.pause();
//   }


//   stop();

};







/* MAIN PAGE */  

// from bottom index, brings us to Leah Rose trailer and plays trailer theme //
const movieLeahRose = $("#leah-eliz")[0];
$("#lr-play-symbol__movie").on("click", function()   {
  movieLeahRose.play();
});


/* LEAH ROSE PAGE */



window.onload = start;

});



 