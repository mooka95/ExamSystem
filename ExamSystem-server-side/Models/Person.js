const bcrypt = require('bcrypt');
const  {  saltRounds ,jwtSecret} =require('../config');

class Person {
  constructor(name,password,email){
      this.name = name;
      this.password= password;
      this.email = email;
  }

  hashPassword=async(password)=>{
     this.password= await bcrypt.hash(password,saltRounds);
  
   }
}

module.exports =Person;