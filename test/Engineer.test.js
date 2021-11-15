const { TestWatcher } = require("jest");
const Engineer = require("../Lib/Engineer");


Test("Can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Dallas", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Dallas", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Dallas", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });