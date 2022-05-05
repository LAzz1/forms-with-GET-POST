const express = require('express')
const bodyParser = require('body-parser');

const port = 3000;
var path = require('path')
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/thankyou.html',urlencodedParser, (req, res)=>{
    res.send(`
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>Formulário Enviado!</title>    
    <style>
    html {
        font-family: Arial, Helvetica, sans-serif;
        background-color: #DCDCDC;
    }
    footer {
        background-color: #696969;
        color: aliceblue;
        margin-top: auto;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;

    }
</style>

<h1>Informações do Usuário</h1>
<h2>${req.body.name}</h2>

<p>Email: ${req.body.email}</p>
<p>Curso: ${req.body.courses}</p>

<footer>
Copyright bt Lucas Andrade Zilio 2022
</footer>
`);
    
});

app.listen(port);