const client = require('./connection.js')
const express = require('express');
const app = express();
let cors = require("cors");
app.use(cors());
app.use(express.json());

client.connect();

app.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    
})

app.post('/signup', (req, res) => {
    try {
        //wait
        const { name, email } = req.body
        console.log(name,email)
        const newteam =  client.query(
            'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',[name,email]
        );
        res.send(newteam);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

