const request = require("supertest");
const app = require("../server");

describe("Livestock Record API", () => {
  test("GET / should return API message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Livestock Record API is running");
  });

  test("GET /api/owners should return owners", async () => {
    const res = await request(app).get("/api/owners");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /api/animals should return animals", async () => {
    const res = await request(app).get("/api/animals");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /api/healthrecords should return health records", async () => {
    const res = await request(app).get("/api/healthrecords");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});