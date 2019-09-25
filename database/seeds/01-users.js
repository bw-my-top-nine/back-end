const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex('users').insert([
    
    { email: "user1@gmail.com", password: bcrypt.hashSync("password1") },
    
    { email: "user2@gmail.com", password: bcrypt.hashSync("password2") }, 
    
    { email: "user3@gmail.com", password: bcrypt.hashSync("password3") }, 
    
    { email: "user4@gmail.com", password: bcrypt.hashSync("password4") }, 
    
    { email: "user5@gmail.com", password: bcrypt.hashSync("password5") }
  
  ]);
};