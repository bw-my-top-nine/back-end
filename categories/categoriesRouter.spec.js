const request = require("supertest")
const server = require("../api/server.js")

describe('categoriesRouter.js', () => {
  describe('GET /categories', () => {
    it('returns 200 ok & toMatch json', () => {
      return request(server)
        .get('/api/categories')
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.type).toMatch(/json/i)
        });
    });
  });
});

describe('categoriesRouter.js', () => {
  describe('POST /categories', () => {
    let category = {
      name: "Foods"
    }
    it('returns 201 created & toMatch json', () => {
      return request(server)
        .post('/api/categories/2/categories')
        .send(category)
        .then(response => {
          expect(response.status).toBe(201);
          expect(response.type).toMatch(/json/i)
        });
    });
  });
});

describe('categoriesRouter.js', () => {
  describe('UPDATE /categories', () => {
    let category = {
      name: "Chickens"
    }
    it('returns 200 created & toMatch json', () => {
      return request(server)
        .put('/api/categories/6')
        .send(category)
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.type).toMatch(/json/i)
        });
    });
  });
});

describe('categoriesRouter.js', () => {
  describe('DELETE /categories', () => {
    it('returns 200 created & toMatch json', () => {
      return request(server)
        .delete('/api/categories/6')
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.type).toMatch(/json/i)
        });
    });
  });
});