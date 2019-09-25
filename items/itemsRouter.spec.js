const request = require("supertest")
const server = require("../api/server.js")

describe('itemRouter.js', () => {
  describe('GET /items', () => {
    it('returns 200 ok & toMatch json', () => {
      return request(server)
        .get('/api/items')
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.type).toMatch(/json/i)
        });
    });
  });
});

?

describe('itemRouter.js', () => {
  describe('UPDATE /items', () => {
    it('returns 200 ok & toMatch json', () => {
      let item = {
        name: "Update Marbles"
      }
      return request(server)
        .put('/api/items/6')
        .send(item)
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.type).toMatch(/json/i)
        });
    });
  });
});

describe('itemRouter.js', () => {
  describe('DELETE /items', () => {
    it('returns 200 ok & toMatch json', () => {
      return request(server)
        .delete('/api/items/6')
        .then(response => {
          expect(response.status).toBe(200);
        });
    });
  });
});