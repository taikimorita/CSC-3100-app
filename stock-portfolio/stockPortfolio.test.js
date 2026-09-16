const StockPortfolio = require("./stockPortfolio");

describe("StockPortfolio", () => {
  let portfolio;

  beforeEach(() => {
    portfolio = new StockPortfolio();
  });

  // 2.1
  describe("creation", () => {
    test("is created with no ticker symbols", () => {
      expect(portfolio.uniqueSymbolCount()).toBe(0);
    });
  });

  // 2.2
  describe("isEmpty", () => {
    test("is empty when newly created", () => {
      expect(portfolio.isEmpty()).toBe(true);
    });

    test("is not empty after a purchase", () => {
      portfolio.purchase("GME", 5);
      expect(portfolio.isEmpty()).toBe(false);
    });
  });

  // 2.3
  describe("purchase", () => {
    test("adds shares for a new symbol", () => {
      portfolio.purchase("GME", 5);
      expect(portfolio.sharesOf("GME")).toBe(5);
    });

    test("adds shares to an existing symbol", () => {
      portfolio.purchase("GME", 5);
      portfolio.purchase("GME", 3);
      expect(portfolio.sharesOf("GME")).toBe(8);
    });
  });

  // 2.4
  describe("sell", () => {
    test("subtracts shares from a symbol", () => {
      portfolio.purchase("RBLX", 10);
      portfolio.sell("RBLX", 4);
      expect(portfolio.sharesOf("RBLX")).toBe(6);
    });
  });

  // 2.5
  describe("uniqueSymbolCount", () => {
    test("counts symbols, not shares", () => {
      portfolio.purchase("GME", 5);
      portfolio.purchase("RBLX", 10);
      expect(portfolio.uniqueSymbolCount()).toBe(2);
    });

    test("does not double count repeated purchases of a symbol", () => {
      portfolio.purchase("GME", 5);
      portfolio.purchase("GME", 5);
      expect(portfolio.uniqueSymbolCount()).toBe(1);
    });
  });

  // 2.6
  describe("keeps only owned symbols", () => {
    test("removes a symbol when all its shares are sold", () => {
      portfolio.purchase("GME", 5);
      portfolio.purchase("RBLX", 10);
      portfolio.sell("GME", 5);
      expect(portfolio.uniqueSymbolCount()).toBe(1);
    });

    test("is empty again after selling everything", () => {
      portfolio.purchase("GME", 5);
      portfolio.sell("GME", 5);
      expect(portfolio.isEmpty()).toBe(true);
    });
  });

  // 2.7
  describe("sharesOf", () => {
    test("returns the number of shares owned for a symbol", () => {
      portfolio.purchase("RBLX", 10);
      expect(portfolio.sharesOf("RBLX")).toBe(10);
    });

    test("returns zero for a symbol not in the portfolio", () => {
      expect(portfolio.sharesOf("AAPL")).toBe(0);
    });
  });

  // 2.8
  describe("overselling", () => {
    test("throws when selling more shares than owned", () => {
      portfolio.purchase("GME", 5);
      expect(() => portfolio.sell("GME", 6)).toThrow(
        "Not possible to sell this number of shares.",
      );
    });

    test("throws when selling a symbol not owned", () => {
      expect(() => portfolio.sell("AAPL", 1)).toThrow(
        "Not possible to sell this number of shares.",
      );
    });

    test("leaves the portfolio unchanged after a failed sale", () => {
      portfolio.purchase("GME", 5);
      expect(() => portfolio.sell("GME", 6)).toThrow();
      expect(portfolio.sharesOf("GME")).toBe(5);
    });
  });
});

/*
 * Reflection on TDD:
 * Partially. I followed the red green refactor cycle for the first increment
 * (2.1): I wrote the test before the module existed, watched it fail, then
 * wrote the minimum code to pass it. For the remaining increments I didn't
 * follow the cycle strictly, though I went back over how each one would have
 * been built test first (e.g. extracting sharesOf() as a refactor in 2.7).
 * My take on TDD is mixed. Writing the test first made me think about the
 * interface up front which I found useful, but doing tiny steps for every
 * increment felt tedious. I'd probably use it selectively, like for bug
 * fixes or complex logic rather than for everything.
 */
