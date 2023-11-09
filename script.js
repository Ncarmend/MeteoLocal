gitinfo.onclck = () => {
    //fetch("http://api.github.com/users/Ncarmend")
    fetch("http://api.github.com/users/Ncarmend")
        .then(res => res.json())

        //.then(data => console.log(data.avatar - url))
        .then(data => {
            console.log(data)
            output.textContent = "";
            output.textContent = `compte de ${data.name}`

            const img = document.createElement("img")
            img.src = data.avatar_url;
            img.width = "100";
            output.appendChild(img);
        })
}



/*https://api.github.com/user
gitinfo.onclck = () => {
    fetch("http://api.github.com/users/nadfri")
        .then(response => console.log(response.json()))
        .then(response2 => console.log(response2))
    //.then(data => output.textContent = "okok")
    console.log(data)
    //const img = document.createElement("img")
    //img.src = data.bbb
    //output.appendChild(img);
// }*/
/*const axios = require('axios');

const username = 'nom_utilisateur';

axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });*/

/*function getDonnees() {
    return axios.get(`https://api.github.com/users/${Ncarmend}`)
        //.then(reponse => reponse.data)
        .then(res =>console.log)
}*/