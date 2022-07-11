const router = require('express').Router()
const Plant = require('./plants-model')

// gets all plants in the DB
router.get('/', async (req, res, next) => {
   try {
      res.json(await Plant.getAllPlants())
   } catch (err) {
      next(err)
   }
});

router.post('/', async (req, res, next) => {
   try {
      res.json( await Plant.insertPlant(req.body) )
   } catch (err) {
      next(err)
   }
});

// get the plants for the specific user
router.get('/:user_id', async (req, res, next)=>{
   const { user_id } = req.params
   try{
      res.json( await Plant.getUsersPlants(user_id) )
   } catch(err){
      next(err)
   }
})

module.exports = router