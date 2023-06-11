
const {Router} = require('express');
const { getDiets } = require('../controllers/getDiets');

const router = Router();

router.get('/', async (req, res) => {
    try{
        const diets = await getDiets();
        res.status(200).json(diets);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});


module.exports = router