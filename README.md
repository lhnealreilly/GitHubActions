<!-- Generator: Widdershins v4.0.1 -->

<h1 id="sample-service">Sample Service v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is a sample service to test JSDoc, OpenAPI, and GitHub Actions

Email: <a href="mailto:lnealreilly@umass.edu">Liam Neal Reilly</a> 

<h1 id="sample-service-default">Default</h1>

## get__testEndpoint

> Code samples

```javascript
import axios from "axios";

const options = {method: 'GET', url: 'https://example.com/testEndpoint'};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`GET /testEndpoint`

Welcome to swagger-jsdoc!

<h3 id="get__testendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns a mysterious string.|None|

<aside class="success">
This operation does not require authentication
</aside>

