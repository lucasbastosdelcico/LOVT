
 //Importar o express
const express = require("express")

// Criar um servidor: app

const app = express()

// definindo a pasta de arquivos estaticos 
app.use(express.static((__dirname+"/public")))


// Criar uma rota "/" que vai enviar um arquivo views /Index.html

app.get ('/', (req,res) => {

    res.sendFile(__dirname + '/views/index.html')


})

// Rodar o  servidor na porta 2525

app.listen(3030,()=> {console.log("Servidor rodando na porta 3030")})