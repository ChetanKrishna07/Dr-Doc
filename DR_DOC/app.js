
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
    "mongodb+srv://Bhavesh:v%401b%402h%233@cluster0.ezrij.mongodb.net/Doctor?retryWrites=true&w=majority", 
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

const MedicineSchema = new mongoose.Schema({
    med_name: String,
    Drug: String,
});

const medicine = mongoose.model("medicine", MedicineSchema);


const StoreSchema = new mongoose.Schema({
    store_name: String,
    Address: String,
    Phone_no: String,
    website: String,
    med_name: Array,
});

const store = mongoose.model("store",StoreSchema);



 var med_want = ["Biperiden","Azithromycin"];

 medicine.find(function(err,medicine){
    if(err){
        console.log(err);
    }else{
        medicine.forEach(function(medicine){
            if(medicine.med_name == med_want){
                console.log("Found");
            }  
        });    
    }
})

var storeslis=  [];

store.find(function(err, store){
    if(err){
        console.log(err);
    }
    else{
        for(var j=0;j<med_want.length;j++){
        store.forEach(function(store){
            //console.log(store.med_name.length);
            let a=1;
            for(var k=0;k<store.med_name.length;k++){
                
                if(store.med_name[k] == med_want[j]){
                    //console.log("Found in",store.store_name);
                    //console.log(storeslis.length);
                    for(var i=0;i<storeslis.length;i++){
                        
                        if(storeslis[i].store_name==store.store_name){
                            
                            storeslis[i].med_name.push(med_want[j]);
                            //console.log("step1");
                            a=-1;
                        } 
                        
                    }     
                    if(a==1){
                        
                        storeslis.push({store_name: store.store_name,Address: store.Address,Phone_no: store.Phone_no,website: store.website,med_name:[med_want[j]]});
                    //console.log("step2");
                        //console.log(storeslis);  
                    } 
                    
                }
            } 
            
        });
    }
    console.log(storeslis);
    }
}) 



 app.get("/med", function(req,res){
    store.find({med_name: req.body.name}, function(err,foundMed){
        if(!err){
            res.send(storeslis);
        }else{
            res.send(err);
        }
    })
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
}); 
