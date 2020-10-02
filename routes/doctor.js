const { Router } = require('express');

const { getAll, getId, createDoctor, update, destroy } = require('../controllers/doctor')

const router = Router();

//api/v1/doctor
router.get('/', getAll);

router.get('/:id', getId);

router.post('/', createDoctor);

router.put('/:id', update);

router.delete('/:id', destroy);


module.exports = router;