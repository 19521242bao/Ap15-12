const knex = require("knex");
const querry = knex({
    client:"mysql",
    connection:{
        host:"localhost",
        port:"3306",
        user:"root",
        password:"",
        database:"app1"
    },
    pool:{max:100,min:0}
},(e)=>{
console.log(e);
}) 
module.exports = querry;