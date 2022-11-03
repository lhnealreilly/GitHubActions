import express from "express"
const app = express();
import swaggerDoc from './docs/specification.json' assert {'type' : 'json'}
import swaggerUi from 'swagger-ui-express'
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/**
 * Describes the different data needed for a user
 * @typedef {object} userObject
 * @property {string} name - user name
 * @property {string} email - email address
 */

/**
 * GET /api/v1
 * @summary This is the summary of the endpoint
 * @return {string} 200 - success response
 */
app.get('/testEndpoint', (req, res) => {

});

/**
 * POST /api/createUser
 * @description Creates a new user
 * @summary This endpoint creates a new user object in the database.
 * @param {string} name.path - name param description
 * @param {userObject} request.body.required - User Data
 * @return {string} 404 - failed - reason
 */

app.listen(4000, () => {
    console.log(`Example app listening on port ${4000}`)
  })