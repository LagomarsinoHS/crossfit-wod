const DB = require('./db.json')
const { savetoDatabase } = require('../database/utils');

const getAllWorkoutData = () => {
    return DB.workouts
}

const createNewWorkout = workout => {
    const exists = getAllWorkoutData().some(d => d.name === workout.name)

    if (exists) {
        console.log("Ya existe Workout");
        return;
    }

    DB.workouts.push(workout)
    console.log(DB.workouts.length);
    savetoDatabase(DB)
}

module.exports = {
    getAllWorkoutData,
    createNewWorkout
}