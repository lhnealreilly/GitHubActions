import express from "express"
const app = express();
import swaggerUi from "swagger-ui-express"
import swaggerDoc from './docs/specification.json' assert {'type' : 'json'}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/**
 * @openapi
 * /testEndpoint:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get('/testEndpoint', (req, res) => {

});

app.listen(4000, () => {
    console.log(`Example app listening on port ${4000}`)
  })