

const {Router} = require('express');
const { deleteRecipe } = require('../controllers/delete');

const router = Router();

router.get('/', async (req, res) => {
    try{
        const response = await deleteRecipe(req.body);
        res.status(200).json(response);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});


module.exports = router;