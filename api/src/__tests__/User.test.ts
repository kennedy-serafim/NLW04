import request from "supertest";
import { app } from "../app";
import createConnection from "../database";

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Should be able to create a user", async () => {
    const response = await request(app).post("/users").send({
      email: "fake@data.co.mz",
      name: "Fake Name",
    });

    expect(response.status).toBe(201);
  });

  it("Should not able to create a user when email exists", async () => {
    const response = await request(app).post("/users").send({
      email: "fake@data.co.mz",
      name: "Fake Name",
    });

    expect(response.status).toBe(400);
  });
});
