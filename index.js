const express = require('express')
const bodyParser = require('body-parser')
const teams = require('./teams')
const { getAllTeams, getTeamById, saveNewTeam } = require('./controller/teams')
const app = express()

app.get('/', getAllTeams)

app.get('/teams/:id', getTeamById)

app.post('/', bodyParser.json(), saveNewTeam)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

// Part Two
// In a new branch called `part-two-answer`, continuing from Part One, you are tasked with creating a handler 
// for the following route:
//    * POST /teams - Create a new team from the data provided and respond with the newly created team, 
//     should error if all fields are not provided
// Part Two Extra Credit
// Update your POST /teams route so that the user does not provide the ID and instead your code determines 
// the next ID in line and uses that for the team being created.

app.listen(1340, () => {
  console.log('Listening on port 1340...') // eslint-disable-line no-console
})













