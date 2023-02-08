const mongoose= require ('mongoose')

const user = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},

},
{collation : 'User-data'
})

const model = mongoose.model('Userdata',user)

module.exports = user