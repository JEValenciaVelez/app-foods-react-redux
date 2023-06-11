const { Router } = require('express');


const RouteRecipes = require('./RouteRecipes');
const RouteDatabase = require('./RouteDatabase');
const RouteDiets = require('./RouteDiets');
const RouteDelete = require('./RouteDelete');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', RouteRecipes);
router.use('/database', RouteDatabase);
router.use('/diets', RouteDiets);
router.use('/delete', RouteDelete);



module.exports = router;
