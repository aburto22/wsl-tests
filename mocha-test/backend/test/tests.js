const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

const assert = chai.assert;

chai.use(chaiHttp);

describe("Functional Tests", () => {
  describe("Requests to /", () => {
    it("Get request", (done) => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.text, "welcome!");
          done();
        });
    });

    it("Post request", (done) => {
      chai
        .request(server)
        .post("/")
        .send({ name: "test" })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.name, "test");
          assert.isDefined(res.body._id);
          done();
        });
    });
  });
});
