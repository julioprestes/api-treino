import clienteRoute from "./clienteRoute.js";
import livroRoute from "./livroRoute.js";
import pessoasRoute from "./pessoasRoute.js";

function Routes(app) {
    livroRoute(app);
    pessoasRoute(app);
    clienteRoute(app);
}

export default Routes;