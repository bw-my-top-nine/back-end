const request = require("supertest")
const server = require("../api/server.js")

describe('router.js', () => {
  describe('POST /register', () => {
    let user = {
      email: "user9@gmail.com",
      password: "password"
    }
    it('returns 201 created & toMatch json', () => {
      return request(server)
        .post('/api/authentication/register')
        .send(user)
        .then(response => {
          expect(response.status).toBe(201);
          expect(response.type).toMatch(/json/i)
        });
    });
  });
});

describe('authenticationRouter.js', () => {
  describe('POST /login', () => {
    let user = {
      email: "user7@gmail.com",
      password: "password"
    }
    it('returns 200 ok & toMatch json', () => {
      return request(server)
        .post('/api/authentication/login')
        .send(user)
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.type).toMatch(/json/i)
        });
    });
  });
});

describe('authenticationRouter.js', () => {
  describe('DELETE /delete', () => {
    let user = {
      email: "user7@gmail.com",
      password: "password"
    }
    it('returns 200 ok & toMatch json', () => {
      return request(server)
        .delete('/api/authentication/users/1')
        .send(user)
        .then(response => {
          expect(response.status).toBe(200);
        });
    });
  });
});