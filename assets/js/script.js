async function criarPost(title, body) {
    let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts", 
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            body,
            userId: 2
        })
    })

    let json = await response.json()
    
    let areaDosPost = document.querySelector(".posts")
    areaDosPost.innerHTML += 
    `<div>
        <h3>Post #${json.id}</h3>
        <h4>${json.title}</h4>
        <p>${json.body}</p>
        <hr>
    </div>`

    document.querySelector("#titleField").value = ""
    document.querySelector("#bodyField").value = ""
}


document.querySelector("#postForm").addEventListener("submit",(event) => {
    event.preventDefault()

    let title = document.querySelector("#titleField").value
    let body = document.querySelector("#bodyField").value //O "".value" pega o conteúdo digitado pelo usuário.

   criarPost(title, body)
})

/* Fluxo final do Projeto:

Usuário preenche título
↓
Usuário preenche conteúdo
↓
Submit do formulário
↓
preventDefault()
↓
Captura dos valores (.value)
↓
criarPost(title, body)
↓
fetch POST
↓
JSON.stringify()
↓
API responde
↓
response.json()
↓
Novo post aparece na tela*/