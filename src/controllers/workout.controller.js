const { getAllWorkoutsS, createWorkoutS } = require('../services/workout.service')

const getAllWorkouts = (req, res) => {
    const allWorkouts = getAllWorkoutsS()
    res.json(allWorkouts)
}

const getWorkout = (req, res) => {
    res.send('Get 1 workout')
}

const createWorkout = (req, res) => {
    const { body } = req
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        res.json({
            msg: 'Faltan Datos'
        })
    };

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }
    const createWorkout = createWorkoutS(newWorkout)
    res.json({ status: 'OK', data: createWorkout }).status(201)
}

const updateWorkout = (req, res) => {
    res.send('Update workout')
}

const deleteWorkout = (req, res) => {
    res.send('Delete workout')
}


module.exports = {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}