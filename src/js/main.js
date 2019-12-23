// Plug DJ
'use strict';

//Initialize
(function() {
  console.log('Metal Friday Tools v1 initalized');
  hideAdvert();
  autoUpvote();
})();

function hideAdvert(){
  /** Hide ad overlay. Please contribute to PlugDJ to keep them alive **/
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

var mfBtnClick = function (elem) {
  var evt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  var canceled = !elem.dispatchEvent(evt);
};