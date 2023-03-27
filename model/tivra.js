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
    dob:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    registerLatLang:{
        type:String
    },
    currentLatLang:{
        type:String
    },
    emailVarification:{
        type:Boolean
    },
    password:{
        type:String
    }
   
},{timestamps:true});
userSchema.virtual('id').get(function () {
    return this._id;
});

module.exports = mongoose.model('UserModel',userSchema)

