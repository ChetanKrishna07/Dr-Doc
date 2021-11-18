const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect(
    "mongodb+srv://Bhavesh:v%401b%402h%233@cluster0.ezrij.mongodb.net/Diagnostic?retryWrites=true&w=majority", 
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

const DiagnosisSchema = new mongoose.Schema({
    center_name: String,
    Address: String,
    Phone_no: String,
    website: String,
    test_name: Array,
});

const DiagCenter = mongoose.model("DiagCenter", DiagnosisSchema);



var check_test = ["PCV", "WBC Count", "Haemoglobin"];


var centerslis=  [];

DiagCenter.find(function(err, DiagCenter){
    if(err){
        console.log(err);
    }
    else{
        for(var j=0;j<check_test.length;j++){
            DiagCenter.forEach(function(DiagCenter){
            //console.log(DiagCenter.test_name.length);
            let a=1;
            for(var k=0;k<DiagCenter.test_name.length;k++){
                if(DiagCenter.test_name[k] == check_test[j]){
                    //console.log("Found in",DiagCenter.center_name);
                    //console.log(centerslis.length);
                    for(var i=0;i<centerslis.length;i++){
                        if(centerslis[i].center_name==DiagCenter.center_name){   
                            centerslis[i].test_name.push(check_test[j]);
                            //console.log("step1");
                            a=-1;
                        } 
                    }     
                    if(a==1){
                       
                        centerslis.push({center_name: DiagCenter.center_name,Address: DiagCenter.Address,Phone_no: DiagCenter.Phone_no,website: DiagCenter.website,test_name:[check_test[j]]});
                    //console.log("step2");
                        //console.log(centerslis);  
                    }
                    //else{
                     //   console.log(centerslis);
                    //}    
                }
            } 
            
        });
    }
    console.log(centerslis);
    }
})

app.get("/diag", function(req,res){
    DiagCenter.find({med_name: req.body.name}, function(err,foundMed){
        if(!err){
            res.send(centerslis);
        }else{
            res.send(err);
        }
    })
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });