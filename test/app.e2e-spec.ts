import { dbc } from "../src/app.module";

describe("AppController (e2e)", () => {
  it("/ (GET)", () => {
    expect(dbc.entities).toEqual(["entities/path/of/mock"]);
  });
});
