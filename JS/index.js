const botao = document.querySelector('.btn')
const mensagem = document.getElementById('mensagem')
const urlPost = 'https://news-api-node.herokuapp.com/api/v1/news/6a6004d2-1e2a-44fb-8c2f-7c6cf3b53d1b'
const postFeitos = document.querySelector('.post-feitos')
var novoElemento = document.createElement('p')

function mostrarMensagens() {

    fetch(urlPost)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        if(postFeitos) {
            for(var i = 0; i < data.length; i++) {
                var mensagemNova = document.createTextNode([i + 1] + " - " + data[i].post)
                var novoElemento = document.createElement('p')

                novoElemento.appendChild(mensagemNova)
                postFeitos.appendChild(novoElemento)
            }
        }

    });

}
mostrarMensagens()


function enviarMensagem() {

    if(botao) {
        botao.addEventListener('click', function() {
            var poster = {
                post: mensagem.value
            };
        
            fetch('https://news-api-node.herokuapp.com/api/v1/news/6a6004d2-1e2a-44fb-8c2f-7c6cf3b53d1b',
                {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(poster)
                })
                .then(results => results.json())
                mostrarMensagens()
        })
    }

}
enviarMensagem()