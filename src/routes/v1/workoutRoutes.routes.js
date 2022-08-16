const express = require('express');
const workoutRouter = express.Router();

const { createWorkout, deleteWorkout, getAllWorkouts, getWorkout, updateWorkout } = require('../../controllers/workout.controller')

workoutRouter
    .get('/', getAllWorkouts)

    .get('/:workoutId', getWorkout)

    .post('/', createWorkout)

    .patch('/:workoutId', updateWorkout)

    .delete('/:workoutId', deleteWorkout)


module.exports = workoutRouter 