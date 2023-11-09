const img = document.getElementById('img')
fetch('https://api.thecatapi.com/v1/images/search?lkljà-è_ç')
    .then(res => {
        if (res.ok) {
            res.json().then(data => {
                img.src = data[0].url
            })
        } else {
            console.log("erreur")
            document.getElementById("erreur").innerHTML(":erruer")
        }
    })
    .catch(err => {
        console.log("erreur")
        document.getElementById("erreur").innerHTML(":erruer")
    })