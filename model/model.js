const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({

    fname:
        {
             type:String,
             required:true
         },
    lname:
        {
             type:String,
             required:true
         },
    email:
         {
             type:String,
             required:true
         }, 
    image:
         {
             type:String,
             required:true
         }
     }
 );


 const _data = mongoose.model('register', registerSchema);
 module.exports = _data;