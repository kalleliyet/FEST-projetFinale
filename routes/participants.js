const express = require('express')


const {getParticipants,getOneParticipant,createParticipant,deleteParticipant,updateParticipant}=require('../controllers/participantController')

const router= express.Router()



//Get al participants
router.get('/',getParticipants)



//Get a single participant
router.get('/:id',getOneParticipant)


//post a new participant
router.post('/', createParticipant)



//delete a participant

router.delete('/:id',deleteParticipant)


//update a participant
router.patch('/:id',updateParticipant)

module.exports=router