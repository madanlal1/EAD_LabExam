const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const multer = require('multer');
// const data_ = require('./model/model')

// const dataModel = require('./model/model');
// const res = require('express/lib/response');

const app = express();

// connect to mongoDB database
mongoose.connect("mongodb://localhost:27017/UserData", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("connecting to mongoDB server...");
});

app.get('/', (req,res) => {
    res.render('Registration')
})
// middlewares
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.static("public/"));
app.set("view engine", 'ejs')
// app.set("views", "./views")


// // multer
// const storage = multer.diskStorage(
//     {
//         destination:function(req,file,cb)
//         {
//             cb(null,"./public/images")
//         },
//         filename:function(req,file,cb)
//         {
//             cb(null,Date.now()+"_"+file.originalname)
//         }
//     }
// );

// const upload = multer({
//     storage:storage,
// }).single("image");


// //routes
// app.get("/", (req,res) => {
//     res.render('Register');
// })

// app.get("/signin", (req,res) => {
//     res.render('Signin');
// })

// // insert data api...
// app.post('/insertData',upload,(req,res)=>{

//         const {fname,lname,email} = req.body
//         const image = req.file.filename
     
    
//         const user = new data_({
//             fname:fname,
//             lname:lname,
//             email:email,
//             image:image
//         })
//         user.save((err)=>{
//             if(err){
//                 res.send({message:err.message})
//             }
//             else{
//                 res.redirect('/showdata');
//             }
//         })
    
//      console.log(req.body)
//      console.log(req.file.filename)    
// })

// // show data api...
// app.get('/showdata', (req,res) => {

//     data_.find((err,result) => {
//         if (!err) {
//             res.render("Data", {
//                 data: result
//             });
//             console.log(result)
//         } else {
//             console.log('Failed to retrieve data: ' + err);
//         }

//     })
// })

// // delete data api...
// app.get('/delete/:id', (req,res)=>{
//     const {id} = req.params
//     data_.findByIdAndRemove(id).exec();
//     res.redirect("/showdata");
// }) 
    
// // show data api...
// app.get('/retdata/:id',(req,res)=>{

//     const {id} = req.params
//     data_.findById(id).exec((err,users)=>{
//         if(err)
//         {
//             res.send({message:"error"})
//         }
//         else{
//             res.render('Update',{title:"Searching",users:users,})
//         }
//     })

// })

// // update api...
// app.post('/update/:id',upload, async (req,res)=>{
    
//     const {id} = req.params
//     const {fname,lname,email} = req.body
//     const image = req.file.filename
     
//     await data_.findByIdAndUpdate(id,{
//         $set:{
//             fname:fname,
//             lname:lname,
//             email:email,
//             image:image
//         }
//     })

//     res.redirect('/showdata');
// })
    
// // sign in api...
// app.post('/signin',upload, async (req,res)=>{

//     const {email}  = req.body

//     data_.find({'email':{$eq:email}},(error , result)=>
//     {
//        if(error)
//        {
//            res.send(error)
//        }
//        else{
          
//            if(result.length==0)
//            {
//                 res.send("Email or Password does not valid!!!");
//            }
//            else
//            {
//                res.redirect('/showdata');
//            }
//        }
//     })
    
// })


// server configuration at port 3000
app.listen(3000, () => {
    console.log("server is listening at port 3000...")
})