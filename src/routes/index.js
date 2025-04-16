import clienteRoute from "./clienteRoute.js";
import emprestimoRoute from "./emprestimoRoute.js";
import livroRoute from "./livroRoute.js";
import pessoasRoute from "./pessoasRoute.js";

function Routes(app) {
    livroRoute(app);
    pessoasRoute(app);
    clienteRoute(app);
    emprestimoRoute(app);
}

export default Routes;