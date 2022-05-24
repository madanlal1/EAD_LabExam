const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({

    name:
        {
             type:String
         },
    email:
        {
             type:String
         },
    phone:
         {
             type:String
         }, 
    city:
         {
             type:String
         },
    postcode:
         {
             type:Number
         },
    image:
         {
             type:String
         }
     }
 );


 const _data = mongoose.model('register', registerSchema);
 module.exports = _data;