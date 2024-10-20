var express=require("express");
var mongoose=require("mongoose");

const app= express();

// Use built-in middleware to parse JSON
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
    extended:true
}));
mongoose.connect('mongodb://localhost:27017/Event-Registration', { useNewUrlParser: true, useUnifiedTopology: true });

const db=mongoose.connection;
db.on('error', () => console.log("Error in connection"));
db.once('open', () =>console.log("connected to database"));

app.post("/sign_up",(req, res) => {

    const {name,email,phone,contest}=req.body;
    

    const data={
        name,
        email,
        phone,
        contest
        };
        db.collection('users').insertOne(data,(err,collection) =>{
            if(err){
                throw err;
            }
            console.log("Record succesfully")
        });
        return res.redirect('signup.html');
});

app.get("/",(req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    return res.redirect('home.html');

});
app.listen(3030, () =>{

console.log("listening port 3030");
});