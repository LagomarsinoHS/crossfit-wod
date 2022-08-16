const Workout = require('../database/workout')
const { v4: uuid } = require('uuid');

const getAllWorkoutsS = () => {
    const allWorkouts = Workout.getAllWorkoutData()
    return allWorkouts;
}

const getWorkout = () => {
    return;
}

const createWorkoutS = (workout) => {
    const dataToInsert = {
        ...workout,
        id: uuid(),
        createAt: new Date().toLocaleString('en-US'),
        updateAt: new Date().toLocaleString('en-US'),
    }
    
    Workout.createNewWorkout(dataToInsert)
    return dataToInsert;
}

const updateWorkout = () => {
    return;
}

const deleteWorkout = () => {
    return;
}


module.exports = {
    getAllWorkoutsS,
    getWorkout,
    createWorkoutS,
    updateWorkout,
    deleteWorkout
}