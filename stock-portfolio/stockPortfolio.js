const OVERSELL_MESSAGE = "Not possible to sell this number of shares.";

class StockPortfolio {
  constructor() {
    this.holdings = new Map();
  }

  isEmpty() {
    return this.holdings.size === 0;
  }

  purchase(symbol, shares) {
    this.holdings.set(symbol, this.sharesOf(symbol) + shares);
  }

  sell(symbol, shares) {
    const owned = this.sharesOf(symbol);
    if (shares > owned) {
      throw new Error(OVERSELL_MESSAGE);
    }
    this.#updateShares(symbol, owned - shares);
  }

  uniqueSymbolCount() {
    return this.holdings.size;
  }

  sharesOf(symbol) {
    return this.holdings.get(symbol) ?? 0;
  }

  #updateShares(symbol, shares) {
    if (shares === 0) {
      this.holdings.delete(symbol);
    } else {
      this.holdings.set(symbol, shares);
    }
  }
}

module.exports = StockPortfolio;
