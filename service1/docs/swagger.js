import path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import express from 'express';

const app = express();
const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

const options = {
  info: {
    version: '1.0.0',
    title: 'Albums store',
    license: {
      name: 'MIT',
    },
    description: fs.readFileSync(`${__dirname}/service-description.md`, 'utf-8')
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic',
    },
  },
  exposeApiDocs: false,
  exposeSwaggerUI: false,
  baseDir: `./`,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: ['./**/*.js'],
};

const s = expressJSDocSwagger(app)(options)
s.on('finish', async (swagger_output) => {
  fs.writeFileSync(`./docs/specification.json`, JSON.stringify(swagger_output));
})