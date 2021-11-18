const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const app = express();
const credentials = require('./credentials');
const {username, password} = credentials;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect(
    "mongodb+srv://"+username+":"+password+"@cluster0.ezrij.mongodb.net/DoctorData?retryWrites=true&w=majority", 
  {
    useNewUrlParser: true
  },(err)=>{
      if(err){
          console.log(err.message);
      }else{
          console.log("connected to cluster")
      }
  }
);

const DoctorspeSchema = new mongoose.Schema({
    doctor_name: String,
    specilization: String,
    Phone_no: String,
    email: String,
    edu_qua: String,
});

const Doctor = mongoose.model("Doctor", DoctorspeSchema);

var find_spec = ["ENT","General"];
var spec=[];

Doctor.find(function(err, Doctor){
    if(err){
        console.log(err);
    }
    else{
        for(var j=0;j<find_spec.length;j++){
            Doctor.forEach(function(Doctor){
            //console.log(DiagCenter.test_name.length);
            let a=1;
            
                if(Doctor.specilization == find_spec[j]){
                    //console.log("Found in",DiagCenter.center_name);
                    //console.log(centerslis.length);
                    /*for(var i=0;i<spec.length;i++){                    
                        if(spec[i].doctor_name==Doctor.doctor_name){                        
                            spec[i].specilization.push(find_spec[j]);
                            //console.log("step1");
                            a=-1;
                        } 
                        
                    }     
                    if(a==1){  */ 
                        spec.push({doctor_name: Doctor.doctor_name,specilization: Doctor.specilization,Phone_no: Doctor.Phone_no,email: Doctor.email,edu_qua: Doctor.edu_qua});
                    //console.log("step2");
                        //console.log(centerslis);  
                    //}
                    //else{
                     //   console.log(centerslis);
                    //}    
                }
            
            
        });
    }
    console.log(spec);
    }
})

app.get("/spec", function(req,res){
    Doctor.find({specilization: req.body.name}, function(err,foundspec){
        if(!err){
            res.send(spec);
        }else{
            res.send(err);
        }
    })
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });