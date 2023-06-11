
const {Router} = require('express');
const { getDatabase } = require('../controllers/getDatabase');

const router = Router();

router.get('/', async (req, res)=>{
    try{
        const recipes = await getDatabase();
        res.status(200).json(recipes);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

module.exports = router;