const UserModel = require('../model/tivra')
const express = require('express')
const app = express()
var bodyParser = require('body-parser');


//Show the list of User

module.exports.userAdded=(req,res)=>{
    console.log(req.params['name']);
     var user=new UserModel({
      name:req.params['name'],
      email:req.params['phone'],
      age:req.params['age'],
     }
    );
  console.log(req.params['age']);
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
  console.log("test");
  console.log(req.body.name);
  console.log(req.params.id);
  UserModel.findOne({ _id: req.params.id },
      (err, UserModel) => {
          if (!UserModel)
              return res.json('Could not load Vendor');
          else {
              UserModel.name= req.body.name;
              UserModel.save().then(UserModel => {
                  res.json(UserModel);
              })
                  .catch(err => {
                      res.status(400).send("unable to update Vendor in the database");
                  });

          }
      }
  );
}