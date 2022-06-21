
const Person= require('./Person');

class Doctor  extends Person {
    
    constructor(name,email,password,personId){
        super(name,password,email);
        this.personId=personId;
    }




}

module.exports =Doctor;

