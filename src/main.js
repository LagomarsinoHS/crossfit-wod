const express = require('express')
const app = express()
const morgan = require('morgan');


const PORT = process.env.PORT || 3000;
const v1WorkoutRouter = require('./routes/v1/workoutRoutes.routes')
app.use(morgan('dev'))
app.use(express.json())


app.use('/api/v1/workouts', v1WorkoutRouter)

app.listen(PORT, () => console.log(`🚀 Server Listening on port ${PORT}`))