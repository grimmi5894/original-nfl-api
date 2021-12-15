const { response } = require('express')
const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const getTeamById = (request, response) => {
  const { id } = request.params
  const teamById = teams.filter((team) => team.id === parseInt(id))

  return response.send(teamById)
}

const saveNewTeam = (request, response) => {
  const {
    id, location, mascot, abbreviation, conference, division
  } = request.body

  if (id || !location || !mascot || !abbreviation, conference, division) {
    // eslint-disable-next-line max-len
    return response.status(400).send('The following fields are required: id, location, mascot, abbreviation, conference, division')
  }

  const newTeam = {
    id, location, mascot, abbreviation, conference, division
  }

  teams.push(newTeam)

  return response.status(201).send(newTeam)
}

module.exports = { getAllTeams, getTeamById, saveNewTeam }
