const StockPortfolio = require("./stockPortfolio");

describe("StockPortfolio", () => {
  test("is created with no ticker symbols", () => {
    const portfolio = new StockPortfolio();
    expect(portfolio.holdings.size).toBe(0);
  });
});
