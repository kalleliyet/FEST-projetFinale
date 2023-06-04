const Participant=require('../models/participantModel')
const mongoose=require('mongoose')

//get all participants
const getParticipants= async (req,res)=>{
    const participants=await Participant.find({}).sort({createdAt:-1})

    res.status(200).json(participants)
}
//get a particpant

const getOneParticipant= async (req,res)=>{

    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such participant that correspands to this id"})
    }

    const participant=await Participant.findById(id)

    if(!participant){
       return res.status(404).json({error:'no such participant'})
    }
    res.status(200).json(participant)
}

//create a participant

const createParticipant= async (req,res)=>{
    const {firstName,lastName,age,ticket}=req.body

    let emptyFields=[]

    if(!firstName){
        emptyFields.push('firstName')
    }
    if(!lastName){
        emptyFields.push('lastName')
    }
    if(!age){
        emptyFields.push('age')
    }
    if(!ticket){
        emptyFields.push('ticket')
    }

    if(emptyFields.length>0){
        return res.status(400).json({error:'please fill all the fields',emptyFields})
    }
        //add doc to db
    try{
        const participant= await Participant.create({firstName,lastName,age,ticket})
        res.status(200).json(participant)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
//delete a participant

const deleteParticipant= async (req,res)=>{

    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such participant that correspands to this id"})
    }

    const participant= await Participant.findOneAndDelete({_id:id})

    if(!participant){
        return res.status(404).json({error:'no such participant'})
     }

     res.status(200).json(participant)
}
//update a participant

const updateParticipant=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such participant that correspands to this id"})
    }

    const participant= await Participant.findOneAndUpdate({_id:id},{...req.body})

    if(!participant){
        return res.status(404).json({error:'no such participant'})
     }

     res.status(200).json(participant)
}

module.exports={
    getParticipants,
    getOneParticipant,
    createParticipant,
    deleteParticipant,
    updateParticipant
}