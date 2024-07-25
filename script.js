document.addEventListener('DOMContentLoaded', function() {
    const nome = document.querySelector('.profile-name');
    const user = document.querySelector('.profile-username');
    const avatar = document.querySelector('.profile-avatar');
    const rep = document.querySelector('#rep');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const endpoint = 'https://api.github.com/users/elgle890';
    const url = document.querySelector('#url');

   // const xhttp = new XMLHttpRequest();
   // xhttp.open('GET', endpoint);
   // xhttp.send();
    
    
    fetch(endpoint).then(function(resposta) {
        return resposta.json();
    }).then(function(json) {
        nome.innerText = json.name;
        user.innerText = json.login;
        avatar.src =  json.avatar_url;
        rep.innerText =  json.public_repos;
        seguidores.innerText =  json.followers;
        seguindo.innerText = json.following;
        url.href =  json.html_url;
    });

});