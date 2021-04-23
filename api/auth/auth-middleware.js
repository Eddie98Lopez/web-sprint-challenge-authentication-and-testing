//const db = require('../../data/dbConfig')
const Users = require('./users-model')




const usernameFree = async (req, res, next) =>{
const username = await Users.findBy({username:req.body.username})
if(!username){
    next()
}
else{
    res.status(400).json("Username already in use")
}

}


const userExists = async (req,res,next)=>{

    const user = await Users.findBy({username: req.body.username})
    if(user){
        req.user = user
        next()
    }
    else{
        res.status(400).json('Invalid Credentials')
    }

}


module.exports ={userExists, usernameFree}

