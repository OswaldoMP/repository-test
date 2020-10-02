// Import 
const Sequelize = require('sequelize');
const Doctor = require('../models/doctor');

const getAll = (req, res) => {

};

const getId = (req, res) => {

};


const createDoctor = async(req, res) => {
    try {
        let { name, last_name, email, password } = req.body;
        let doctor2 = {
            name,
            last_name,
            email,
            password
        };
        console.log('pas1');

        const doctor = await Doctor.build(doctor2, {
            fields: ['name', 'last_name', 'email', 'password']
        });

        console.log('pas');

        if (doctor) {
            return res.json({
                ok: true,
                doctor
            });
        }
    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }

};

const update = (req, res) => {

};

const destroy = (req, res) => {

};


module.exports = {
    getAll,
    getId,
    createDoctor,
    update,
    destroy
}