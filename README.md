<!-- Generator: Widdershins v4.0.1 -->

<h1 id="albums-store">Albums store v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Add your description

Base URLs:

 License: MIT

# Authentication

- HTTP Authentication, scheme: basic 

<h1 id="albums-store-default">Default</h1>

## get__api_v1

> Code samples

```javascript
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://example.com/api/v1',
  headers: {Accept: 'application/json'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`GET /api/v1`

*This is the summary of the endpoint*

> Example responses

> 200 Response

```json
{}
```

<h3 id="get__api_v1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success response|Inline|

<h3 id="get__api_v1-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

