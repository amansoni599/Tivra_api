const UserModel = require('../model/tivra')
const express = require('express')
const app = express()
var bodyParser = require('body-parser');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const statewithcities=require("../controller/statewithcities.json");


//Show the list of User

module.exports.userAdded=(req,res)=>{
    console.log(req.body.name);
     var user=new UserModel({
      name:req.body.name,
      email:req.body.email,
      age:req.body.age,
     }
    );
    user.save(function(err){
      if(err){
        console.log(err);
      }else{
        res.json(user);
      }
    });
  };

  module.exports.findAllUser = (req, res, next) => {
    UserModel.find({}).then(function (user) {
        res.send(user);
    });
};

module.exports.deleteUser = (req, res, next) => {
  console.log(req.params['id']);
  UserModel.findOne({ _id: req.params['id'] },
      (err, user) => {
          if (err) return res.status(400).json(err);

          if (!user)
              return res.status(404).json({ status: false, message: 'User record not found.' });
          else
              user.delete((err) => {
                  if (err) return res.status(400).json(err)
                  else return res.status(200).json({ status: true });

              });
      }
  );
};

module.exports.updateUser = (req, res, next) => {
 
  console.log(req.body.name);
  console.log(req.params.id);
  UserModel.findOne({ _id: req.params.id },
      (err, UserModel) => {
          if (!UserModel)
              return res.json('Could not load user');
          else {
              UserModel.name= req.body.name;
              UserModel.save().then(UserModel => {
                  res.json(UserModel);
              })
                  .catch(err => {
                      res.status(400).send("unable to update user in the database");
                  });

          }
      }
  );
}

module.exports.auth = async (req, res, next) => {
  try {
    UserModel.findOne({email: req.body.email},(err,user)=>{
      if(user==null){
  res.status(401).json("User not Found");
      }else{
        const token = jwt.sign(
          { email: user.email, userId: user._id },
          "secret_this_should_be_longer",
          { expiresIn: "1h" }
      );
      console.log(token)
      res.status(200).json({
          token: token
      });
      }
    });
  } catch (error) {
    console.log(error);
  }
 
     
};


module.exports.signup = async (req, res, next) => {
  //TODO create a transaction for this method...
  //check if email is already used and send error
console.log(req.body.email);
console.log(req.body.password);
  UserModel.findOne( { email: req.body.email },
      async (err, userModel) => {
          if (err) return res.status(400).json(err);
          if (userModel)
              return res.status(409).json({ status: false, message: 'User record already exists.' });
          else {
             let response = await createNewUser(req, res);;
             return res; 
          }
      });
};

async function createNewUser(req, res) {
  bcrypt.hash(req.body.password, 10)
     .then  ( async (hash) =>{
         await  createPrefWithUser(req, hash, res);
         //return res;
     }).catch(err => {
          return res.status(500).json({ error:err });
     });
 //return res;
}

async function createPrefWithUser(req, hash, res) {

  let user=UserModel({
    email:req.body.email,
    password:hash,
  });
  console.log(user);

user.save(function(err){
  if(err){
    console.log(err);
  }else{
    res.status(200).json({
      status: true,
      message: "User created!",
      // result: user.name
  });
  }
});
}

module.exports.StateWithDistricts = async (req, res, next) => {
res.status(200).json(statewithcities);
};

