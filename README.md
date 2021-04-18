# REST

- Motive is to learn to build RESTful APIs with Node.js, Express & MongoDB.
- To learn status codes, middleware and routes etc..
- Basic CRUD operations.

## Fetch the API to front-end

- Go to codepen.io and type in the JS window and check the console, cheers !

- fetch('http://localhost:4200/posts')
  .then(result => {
  return result.json();
  })
  .then(data => {
  console.log(data);
  })
