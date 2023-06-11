
const {Router} = require("express");
const { getRecipeById } = require("../controllers/getRecipeById");
const { getRecipesBYName } = require("../controllers/getRecipesByName");
const { getRecipes } = require("../controllers/getRecipes");
const { postRecipe } = require("../controllers/postRecipe");

const router = Router();


router.get('/:idRecipe', async (req,res)=>{
    const {idRecipe} = req.params;
    try{
       const recipe = await getRecipeById(idRecipe);
       res.status(200).json(recipe);
    }catch(error){
        res.status(400).json({error: error.message})
    }
});


router.get('/', async(req, res)=>{
    const {name} = req.query;
    try{
        if(name){
            const recipe = await getRecipesBYName(name);
            res.status(200).json(recipe);
        }else{
            const recipes = await getRecipes();
            res.status(200).json(recipes);
        }
    }catch(error){
        res.status(400).json({error: error.message});
    }
});


router.post('/', async (req, res)=>{
    try{
        const newRecipe = await postRecipe(req.body);
        res.status(200).json(newRecipe);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});


module.exports = router;