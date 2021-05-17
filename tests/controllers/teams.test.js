const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { describe, it } = require('mocha')
const { getAllTeams, getTeamById, saveNewTeam } = require('../../controller/teams')
const models = require('../../models')
const { teamsList, singleTeam } = require('../mocks/teams')

chai.use(sinonChai)
const { expect } = chai

describe('Teams Controller', () => {
  describe('Get All Teams', () => {
    it('gets list of all teams from DB, and calls response.send() with that list', async () => {
      const stubbedFindAll = sinon.stub(models.teams, 'findAll').returns(teamsList)
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      await getAllTeams({}, response)
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(teamsList)
    })
  })

  describe('Get Team By Id', () => {
    it('gets a single team associated with the provided id from DB, and calls response.send() with it', async () => {
      const stubbedFindOne = sinon.stub(models.teams, 'findOne').returns(singleTeam)
      const request = { params: { id: 3 } }
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      await getTeamById(request, response)
      expect(stubbedFindOne).to.have.callCount(1)
      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 3 } })
      expect(stubbedSend).to.have.been.calledWith(singleTeam)
    })
  })

  describe('Save New Team', () => {
    it('accepts new team details and saves them as a team, returns the saved team with 201 status', async () => {
      const stubbedCreate = sinon.stub(models.teams, 'create').returns(singleTeam)
      const request = { body: singleTeam }
      const stubbedSend = sinon.stub()
      const stubbedStatus = sinon.stub().returns({ send: stubbedSend })
      const response = { status: stubbedStatus }

      await saveNewTeam(request, response)
      expect(stubbedCreate).to.have.been.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedSend).to.have.been.calledWith(singleTeam)
    })
  })
})
