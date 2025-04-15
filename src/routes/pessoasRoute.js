import pessoasController from "../controllers/pessoasController.js";

export default (app) => {
    app.get('/pessoas/:idPessoa', pessoasController.getId);
    app.get('/pessoas' ,pessoasController.getIdade);
    app.post('/pessoas/:idade', pessoasController.postMedevassa);
}

