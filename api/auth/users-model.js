const db = require('../../data/dbConfig.js')

const findBy = (filter) =>{
    return db('users').where(filter).first()
}

const findById = (id) =>{
    return db('users').select('id','username').where(filter).first()
}


const addUser = async (newUser) =>{
    const [id] = await db('users').insert(newUser)
    return findById(id)
}

module.exports= {findBy, addUser}
