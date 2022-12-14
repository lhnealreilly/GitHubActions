
<h1 id="service2">service2 v1.0.0</h1>

<details> <summary> <b>Table of Contents</b> </summary>

- [Author](#author)
- [Service Description](#service-description)
- [How to build](#how-to-build)
- [Authentication](#authentication)
- [Default](#default)
  - [get__api_v1](#get__api_v1)
  - [post__api_createUser](#post__api_createuser)
- [Schemas](#schemas)
  - [userObject](#userobject)
    - [Properties](#properties)


</details>

# Author

Liam Neal Reilly

# Service Description

This is the second service that is super cool

# How to build

Docker

Base URLs:

 License: MIT

# Authentication

- HTTP Authentication, scheme: basic

# Default

## get__api_v1

`GET /api/v1`

<details> <summary>Code samples</summary>

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

</details>

*This is the summary of the endpoint*

<details> <summary> Example responses </summary>

> 200 Response

```json
"string"
```

</details>

<h3 id="get__api_v1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success response|string|

<aside class="success">
This operation does not require authentication
</aside>

## post__api_createUser

`POST /api/createUser`

<details> <summary>Code samples</summary>

```javascript
import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://example.com/api/createUser',
  headers: {'Content-Type': 'application/json', Accept: 'application/json'},
  data: {name: 'string', email: 'string'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

</details>

*This endpoint creates a new user object in the database.*

Creates a new user

<details> <summary>Body parameter</summary>

```json
{
  "name": "string",
  "email": "string"
}
```

</details>

<h3 id="post__api_createuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|false|name param description|
|body|body|[userObject](#userobject)|true|User Data|

<details> <summary> Example responses </summary>

> 201 Response

```json
{
  "name": "string",
  "email": "string"
}
```

> 404 Response

</details>

<h3 id="post__api_createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created new user|[userObject](#userobject)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|failed|string|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

## userObject

```json
{
  "name": "string",
  "email": "string"
}

```

Describes the different data needed for a user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|user name|
|email|string|false|none|email address|

