import express from 'express';

const app = express();
app.use(express.json())


const pessoas = [
    { id: 1, nome: "Ana", idade: 25 },
    { id: 2, nome: "Bruno", idade: 30 },
    { id: 3, nome: "Carla", idade: 22 },
    { id: 4, nome: "Diego", idade: 28 },
    { id: 5, nome: "Eduarda", idade: 26 },
    { id: 6, nome: "Felipe", idade: 33 },
    { id: 7, nome: "Giovana", idade: 24 },
    { id: 8, nome: "Henrique", idade: 27 },
    { id: 9, nome: "Isabela", idade: 29 },
    { id: 10, nome: "João", idade: 31 }
  ];

//Fazer um get por id que bvusque o registro com id passado no parametro
app.get('/idade/:idPessoa', (req, res) => {
    const ids = Number(req.params.idPessoa);
    return res.status(200).send(pessoas.find((valor) => valor.id == ids))
});

// Fazer um get normal que devolva todos, mas caso eu passe uma query = ? devolva somente com a idade da query
app.get('/idade', (req, res) => {
    const idades = Number(req.query.idIdade); 

    if (!idades) {
        const todas = pessoas.map(`Nome: ${pessoas.nome}, Idade: ${pessoas.idade}`);
        return res.status(200).send(todas);
    }

    const filtro = pessoas
        .filter(pessoas.idade == idades)
        .map(`Nome: ${pessoas.nome}, Idade: ${pessoas.idade}`);

    return res.status(200).send(filtro);
});


// Passar o nome no corpo, a idade nos  parametros, verificar se é maior que 18, se for, retorna true, senao, false
app.post('/idade/:idade', (req, res) => {
    const { nome } = req.body;
    const idade = Number(req.params.idade);

    if (idade >= 18) {
        return res.status(200).send({
            message: true,
            pode: 'Pode ir no Medevassa'
        });
    } else {
        return res.status(200).send({
            message: false,
            pode: 'Não pode ir no Medevassa'
        });
    }
});


app.listen('3131', (e) => {
    if (e) {
        return console.log(e);
    } else {
        console.log(`api rodando na http://localhost:3131`);
    }
})