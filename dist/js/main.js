"use strict";function hideAdvert(){setInterval(function(){var t=document.getElementById("community_right_rail");void 0!==t&&t.remove()},5e3)}function autoUpvote(){console.log("init autoUpvote");setInterval(function(){var t=document.getElementsByClassName("btn-like")[0];t.classList.contains("disabled")||t.classList.contains("clicked")||(mfBtnClick(t),console.log("autoThumbsUp btnClick"))},5e4)}function addEasySkipButton(){console.log("addEasySkipButton"),console.log("init skip btn");setInterval(function(){var t=document.getElementsByClassName("skip")[0],o=document.querySelectorAll(".room-controls--desktop ul")[0];if(void 0===t){console.log("MF Tools - create skip btn");var n=document.activeElement;$("#dj-canvas").focus(),n.focus(),o.innerHTML=o.innerHTML+'<li class="room-controls--desktop__item"><button class="room-controls--desktop-btn btn-skip" title="Skip"><span class="sr-only">Skip</span><i class="icon icon-skip" aria-hidden="false"></i></button><span class="room-controls--desktop__item-value">SKIP</span></li>'}},5e3)}console.log("Metal Friday Tools initalized"),hideAdvert(),autoUpvote(),addEasySkipButton();var mfBtnClick=function(t){var o=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});t.dispatchEvent(o)};