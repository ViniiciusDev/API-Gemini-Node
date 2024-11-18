import express from "express"; // Realizo o Import do servidor Express que se encontra na pasta node_modules

const App = express(); // Salvo o servidor dentro de uma variável.
App.listen(3000, () => {
    console.log("Escutando nosso servidor.");    //No servidor eu executo a função listen() com a porta 3000.
});

App.get("/api", (req, res) => {
    res.status(200).send("Bem-Vindo ao meu Primeiro Servidor Express!!");  // Com o get eu defino a rota /api e dentro da função get eu envio um status 200 e uma mensagem com a função send.
});