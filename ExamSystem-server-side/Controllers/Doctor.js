const Doctor = require('../Models/Doctor');
const pool = require('../db');
exports.saveDoctor = async (req, res, next) => {

    const doctor = new Doctor(req.body.name,req.body.email,req.body.password);
    await doctor.hashPassword(doctor.password);

   await InsertToDatabase(doctor);

    res.status(201).json({
        doctor
    });



}


InsertToDatabase = async (doctor) => {
    const sql ="INSERT INTO people (name,email,password) VALUES ?";
    const values = [
        [
            doctor.name,
            doctor.email,
            doctor.password
        ],
    ];
  const addedDoctor=  await pool.query(sql, [values]);
doctor.personId=addedDoctor.insertId;
  
    await pool.query("INSERT INTO professors (personId) VALUES ?",[[[doctor.personId]]]);
  };