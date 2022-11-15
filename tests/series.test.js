const request = require("supertest");
const app = require("../app");

describe("GET /series", () => {
    it("should return 200 OK", () => {
        return request(app).get("/series").expect(200);
    });
    // verify that the response is JSON
    it("should return JSON", () => {
        return request(app)
            .get("/series")
            .expect("Content-Type", /json/);
    });
    // verify that the response is an array
    it("should return an array", () => {
        return request(app)
            .get("/series")
            .then((response) => {
                expect(Array.isArray(response.body)).toBeTruthy();
            });
    });
});