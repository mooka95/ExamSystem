const Student=require('../Models/Student');
const pool = require('../db');
exports.saveStudent=async (req, res, next) => {
    const student=new Student(req.body.name,req.body.email,req.body.password);
    await student.hashPassword(student.password);
   await InsertToDatabase(student)
    res.status(201).json({
        student
    })

}

InsertToDatabase = async (student) => {
    const sql ="INSERT INTO people (name,email,password) VALUES ?";
    const values = [
        [
            student.name,
            student.email,
            student.password
        ],
    ];
  const addedDoctor=  await pool.query(sql, [values]);
student.personId=addedDoctor.insertId;
  
    await pool.query("INSERT INTO students (personId) VALUES ?",[[[student.personId]]]);
  };