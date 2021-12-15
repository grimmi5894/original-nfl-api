const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const getTeamById = (request, response) => {
  const { id } = request.params
  const teamById = teams.filter((team) => team.id === parseInt(id))

  return response.send(teamById)
}

module.exports = { getAllTeams, getTeamById }
