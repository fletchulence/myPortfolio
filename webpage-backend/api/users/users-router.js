const router = require('express').Router()
const User = require('./users-model')
const db = require('./../data/db-config')

router.get('/', async (req, res) => {
   res.json(await User.getAllUsers())
 })

router.get('/:user_id', async (req, res, next) => {
   const userAtId = await User.getById(req.params.user_id)
   try {
      res.json(userAtId)
   } catch (err) {
      next(err)
   }
})

router.post('/', async (req, res) => {
  res.status(201).json(await insertUser(req.body))
})

module.exports = router