const {Schema, model, ObjectId} = require("mongoose")


const User = new Schema({
    email: {type: String, required :true, unique:true},
    password: {type: String, requirment :true},
    diskSpace: {type: Number, default:1024**3*10},
    usedSpace: {type: Number, default: 0},
    email: {type: String, requirment :true, unique:true},
    avatar: {type: String},
    files: [{type: ObjectId, ref:'File'}]
})

module.exports = model('User', User)