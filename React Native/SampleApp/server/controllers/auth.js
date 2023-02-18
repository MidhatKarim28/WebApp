const client = require('../connection.js')

const signup = (request, response) => {
    const { name, email } = request.body
  
    client.query('INSERT INTO public.users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
  }

 const users = (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
}

module.exports = {signup,users};