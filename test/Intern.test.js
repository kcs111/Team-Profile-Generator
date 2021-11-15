const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Texas State University";
  const e = new Intern("Robert", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Robert", 1, "test@test.com", "Texas State University");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Texas State University";
  const e = new Intern("Rober", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});