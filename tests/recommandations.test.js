const request = require("supertest");
const app = require("../app");

// describe("GET /recommandations", () => {
//     it("should return 200 OK", () => {
//         return request(app).get("/recommandations").expect(200);
//     });
//     // verify that the response is JSON
//     it("should return JSON", () => {
//         return request(app)
//             .get("/recommandations")
//             .expect("Content-Type", /json/);
//     });
//     // verify that the response is an array
//     it("should return an array", () => {
//         return request(app)
//             .get("/recommandations")
//             .then((response) => {
//                 expect(Array.isArray(response.body)).toBeTruthy();
//             });
//     });
// });