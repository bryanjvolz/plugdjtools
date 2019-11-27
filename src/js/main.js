// Plug DJ
'use strict';

//Initialize
(function() {
  console.log('Metal Friday Tools initalized');
  hideAdvert();
  autoUpvote();
  addEasySkipButton();
})();

function hideAdvert(){
  /** Hide ad overlay **/
  var autohideAd = setInterval(function(){
    var advertOverlay = document.getElementById("community_right_rail");
    if( typeof advertOverlay !== 'undefined' ){
      advertOverlay.remove();
    }
  },5000);
}

function autoUpvote(){
  console.log('init autoUpvote');
  var autoThumbsUp = setInterval(function(){
    var thumbsUp = document.getElementsByClassName('btn-like')[0];
    if( !thumbsUp.classList.contains('disabled') && !thumbsUp.classList.contains('clicked') ){
      mfBtnClick(thumbsUp);
      console.log('autoThumbsUp btnClick');
    }
  },50000);
}

function addEasySkipButton(){
  console.log("addEasySkipButton");
  //.action.skip
  //<i class="icon icon-skip"></i>
  console.log('init skip btn');

  var time = setInterval(function(){
    var skipBtn = document.getElementsByClassName('skip')[0];
    var controlBar = document.querySelectorAll('.room-controls--desktop ul')[0];
    if( typeof skipBtn === 'undefined' ){
      console.log('MF Tools - create skip btn');
      var currentNode = document.activeElement;
      $('#dj-canvas').focus();
      currentNode.focus();
      controlBar.innerHTML = controlBar.innerHTML + '<li class="room-controls--desktop__item"><button class="room-controls--desktop-btn btn-skip" title="Skip"><span class="sr-only">Skip</span><i class="icon icon-skip" aria-hidden="false"></i></button><span class="room-controls--desktop__item-value">SKIP</span></li>';
      //mfBtnClick(skipBtn);
    }
  },5000);

}

var mfBtnClick = function (elem) {
  var evt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  var canceled = !elem.dispatchEvent(evt);
};