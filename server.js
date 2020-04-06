//CRIANDO SERVDIOR EM NODE.
// Ctrl + C para o servidor

const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public')) // para aceitar arquivos estáticos

server.set("view engine", "html")

//caminho da pasta
nunjucks.configure("views",{
    express:server
})


//configurando a rota principal.
//req - request (requisição) | res - response(resposta)

//OUVINDO A ROTA PRINCIPAL
server.get("/",function(req, res){
    return res.render("about");
}) 


//Caso queira criar uma nova rota.
// server.get("/xpto",function(req, res){
//     return res.send("xpto")
// })  


server.listen(5000, function(){
    console.log("server is running")
})
