import monsgoose from 'mongoose';
const Taskschema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    completed : {
        type : Boolean,
        default : false,
    }

})

module.exports = mongoose.model('Task', Taskschema);