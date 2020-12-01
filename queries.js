const { request, response } = require("express");

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'react-crud.clj7qm4xqlwn.us-east-1.rds.amazonaws.com',
    database: 'stockapp',
    password: 'testpass',
    port: '5432'
})
const getAllusers = (request, response) => {
    pool.query('SELECT * FROM users', (error,result) =>{
        if(error){
            throw error
        }
        response.status(200).json(result.rows)
    })
}
module.exports = {
    getAllusers
}