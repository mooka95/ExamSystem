const Person=require('../Models/Person');


class Student extends Person {
   
    personId;
    constructor(name,password,email){
        super(name,email,password);
    }
}

module.exports=Student;