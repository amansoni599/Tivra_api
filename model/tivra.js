var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

const userSchema=new Schema({
   
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    age:{
        type:String
    },
    token:{
        type:String
    },
    password:{
        type:String
    }
   
},{timestamps:true});
userSchema.virtual('id').get(function () {
    return this._id;
});

module.exports = mongoose.model('UserModel',userSchema)

