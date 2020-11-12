let fs = require("browserify-fs")

let id = document.querySelector(".id")
let pass = document.querySelector(".password")
let log = document.querySelector(".button")



log.addEventListener("click", () => {
    let user = {
        "id": id.value,
        "pass": pass.value 
    }
    fetch("http://127.0.0.1:5000/login", {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
          }
    }).then((resp) => {
        return resp.json();
    }).then((data) => {
        console.log("Sent!")
    })
})

