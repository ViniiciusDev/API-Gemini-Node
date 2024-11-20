import express from "express"; // Realizo o Import do servidor Express que se encontra na pasta node_modules

// Se torna necessário criar um Mock de dados para testarmos se nosso banco de dados será lido.
const posts = [
    { id: 1, descricao: "Gato de Test", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato de Jato", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Gato Voador", imagem: "https://placecats.com/millie/300/150" },
    { id: 4, descricao: "Gato Aranha", imagem: "https://placecats.com/millie/300/150" },
];

const App = express(); // Salvo o servidor dentro de uma variável.
App.listen(3000, () => {
    console.log("Escutando nosso servidor.");    //No servidor eu executo a função listen() com a porta 3000.
});

App.get("/posts", (req, res) => {
    res.status(200).json(posts);  // Com o get eu defino a rota /api e dentro da função get eu envio um status 200 e uma mensagem com a função send.
});
// Criado nosso Mock agora precisamos criar uma função que busque somente o id.
function buscarPostId(id) {
    return posts.findIndex((post) => {   // Usamos o findIndex para pegar o id de cada post.
        return post.id === Number(id);   // Aqui retornamos somente se o conteudo de post for um número.
    });
};
// Agora criamos nossa rota, que pegar o id de cada elemento do nosso banco de dados e exibe ele singularmente
App.get("/posts/:id", (req, res) => {
    const index = buscarPostId(req.params.id);
    res.status(200).json(posts[index]);
});