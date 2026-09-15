const myFunctions = require("./sample-functions.js");

// ---------------------------------------------------------------
// div(a, b)
// ---------------------------------------------------------------
describe("div", () => {
  test("divides two positive integers evenly", () => {
    expect(myFunctions.div(10, 2)).toBe(5);
  });

  test("returns a fractional result when not evenly divisible", () => {
    expect(myFunctions.div(7, 2)).toBe(3.5);
  });

  test("handles a negative dividend", () => {
    expect(myFunctions.div(-10, 2)).toBe(-5);
  });

  test("handles a negative divisor", () => {
    expect(myFunctions.div(10, -2)).toBe(-5);
  });

  test("two negatives give a positive result", () => {
    expect(myFunctions.div(-10, -2)).toBe(5);
  });

  test("zero divided by a positive number is 0", () => {
    expect(myFunctions.div(0, 5)).toBe(0);
  });

  test("zero divided by a negative number is -0", () => {
    expect(myFunctions.div(0, -5)).toBe(-0);
  });

  test("dividing by 1 returns the same number", () => {
    expect(myFunctions.div(42, 1)).toBe(42);
  });

  test("dividing a number by itself returns 1", () => {
    expect(myFunctions.div(13, 13)).toBe(1);
  });

  test("handles decimal inputs (floating point)", () => {
    expect(myFunctions.div(0.3, 0.1)).toBeCloseTo(3);
  });

  test("handles repeating decimal results", () => {
    expect(myFunctions.div(1, 3)).toBeCloseTo(0.3333);
  });

  test("positive number divided by 0 is Infinity", () => {
    expect(myFunctions.div(5, 0)).toBe(Infinity);
  });

  test("negative number divided by 0 is -Infinity", () => {
    expect(myFunctions.div(-5, 0)).toBe(-Infinity);
  });

  test("0 divided by 0 is NaN", () => {
    expect(myFunctions.div(0, 0)).toBeNaN();
  });

  test("very large result overflows to Infinity", () => {
    expect(myFunctions.div(Number.MAX_VALUE, 0.5)).toBe(Infinity);
  });

  test("very small result underflows to 0", () => {
    expect(myFunctions.div(Number.MIN_VALUE, 2)).toBe(0);
  });
});

// ---------------------------------------------------------------
// containsNumbers(text)
// ---------------------------------------------------------------
describe("containsNumbers", () => {
  test("returns false for letters only", () => {
    expect(myFunctions.containsNumbers("abc")).toBe(false);
  });

  test("returns true when a digit is at the start", () => {
    expect(myFunctions.containsNumbers("1abc")).toBe(true);
  });

  test("returns true when a digit is in the middle", () => {
    expect(myFunctions.containsNumbers("ab5cd")).toBe(true);
  });

  test("returns true when a digit is at the end", () => {
    expect(myFunctions.containsNumbers("abc9")).toBe(true);
  });

  test("returns true for digits only", () => {
    expect(myFunctions.containsNumbers("12345")).toBe(true);
  });

  test("returns true for the digit 0", () => {
    expect(myFunctions.containsNumbers("zero0")).toBe(true);
  });

  test("returns true for a single digit", () => {
    expect(myFunctions.containsNumbers("7")).toBe(true);
  });

  test("returns false for an empty string", () => {
    expect(myFunctions.containsNumbers("")).toBe(false);
  });

  test("returns false for special characters only", () => {
    expect(myFunctions.containsNumbers("!@#$%^&*()")).toBe(false);
  });

  test("returns false for number words (no actual digits)", () => {
    expect(myFunctions.containsNumbers("one two three")).toBe(false);
  });

  test("returns false for a single space", () => {
    expect(myFunctions.containsNumbers(" ")).toBe(false);
  });

  test("returns false for words separated by spaces", () => {
    expect(myFunctions.containsNumbers("hello world")).toBe(false);
  });

  test("returns false for tabs and newlines", () => {
    expect(myFunctions.containsNumbers("\t\n")).toBe(false);
  });

  test("returns true for a digit surrounded by spaces", () => {
    expect(myFunctions.containsNumbers("room 4 b")).toBe(true);
  });
});

// ---------------------------------------------------------------
// sum(a, b)
// ---------------------------------------------------------------
describe("sum", () => {
  test("adds two positive numbers", () => {
    expect(myFunctions.sum(12, 18)).toBe(30);
  });

  test("adds a positive and a negative number", () => {
    expect(myFunctions.sum(10, -4)).toBe(6);
  });

  test("adds two negative numbers", () => {
    expect(myFunctions.sum(-3, -7)).toBe(-10);
  });

  test("adding zero returns the same number", () => {
    expect(myFunctions.sum(5, 0)).toBe(5);
  });

  test("handles decimals", () => {
    expect(myFunctions.sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
