// ==UserScript==
// @name         MyAutoScript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Axing
// @match        */autoClick.html
// @grant        none
//@include       file:///C:/Users/Administrator/Desktop/autoClick.html
// ==/UserScript==

(function() {
    'use strict';

    var button = document.getElementById("btn");
    //每秒执行一次，若按钮状态为可用，进行点击
    setInterval(function() {
        if (button.disabled == false) {
            button.click();
            
        }
    },
    1000);


    // Your code here...
})();