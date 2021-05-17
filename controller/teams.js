const models = require('../models')

const getAllTeams = async (request, response) => {
  const teams = await models.teams.findAll()

  return response.send(teams)
}

const getTeamById = async (request, response) => {
  const { id } = request.params

  const matchingTeam = await models.teams.findOne({ where: { id } })

  return response.send(matchingTeam)
}

const saveNewTeam = async (request, response) => {
  const {
    location, mascot, abbreviation, conference, division
  } = request.body

  if (!location || !mascot || !abbreviation || !conference || !division) {
    return response
      .status(400)
      .send('The following fields are required: location, mascot, abbreviation, conference, division')
  }

  const newTeam = await models.teams.create({
    location, mascot, abbreviation, conference, division
  })

  return response.status(201).send(newTeam)
}

module.exports = { getAllTeams, getTeamById, saveNewTeam }
