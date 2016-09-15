### Topics

- HTTP Protocol. How the HTTP Request - Response cycle works.
- Working with query parameters in express. Ex: Filter a list of contacts by name
- Working with forms in express. Ex: Add a new contact to the list using a form.
- Doing a redirect. What does it mean in HTTP terms. How to use it in express.

### HTTP

- How does HTTP work?
  - HTTP is a protocol (a predefined set of steps) that an HTTP client must use to connect to an HTTP server.
  - Client makes a request. Server sends a response.

![HTTP diagram](https://s3.amazonaws.com/monicao/lighthouse/20160915_HTTP.png)

- Anatomy of an HTTP Request
  - Method: GET, POST, PUT, PATCH, DELETE
  - URL. Ex: http://localhost:8000/contacts?name=Bob
  - POST requests also send a body (long string with data).

- Anatomy of an HTTP Response
  - Status: A number between 100-600 that indicates if the request was successful, if a crash happen on the server, etc.
  - Body: Data. Usually a long string of HTML.


Links:

- Express Cheat Sheet: https://gist.github.com/monicao/93094ea1d0dcd3ecbae17f43a3283350
