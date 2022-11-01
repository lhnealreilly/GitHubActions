import express from "express"
const app = express();
import swaggerUi from "swagger-ui-express"
import swaggerDoc from './docs/specification.json' assert {'type' : 'json'}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/**
 * @openapi
 * /:
 *   post:
 *     description: Sample Post Endpoint!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.post('/testEndpoint', (req, res) => {

});

app.listen(4000, () => {
    console.log(`Example app listening on port ${4000}`)
  })