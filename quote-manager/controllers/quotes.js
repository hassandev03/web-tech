class QuoteController {
  constructor(quotesService) {
    this.quotesService = quotesService;
  }

  getAllQuotes = async (req, res, next) => {
    try {
      const quotes = await this.quotesService.getAllQuotes();
      res.json(quotes);
    } catch (error) {
      next(error);
    }
  };

  getQuoteById = async (req, res, next) => {
    try {
      const quote = await this.quotesService.getQuoteById(req.params.id);
      if (!quote) {
        return res.status(404).json({ message: 'Quote not found' });
      }
      res.json(quote);
    } catch (error) {
      next(error);
    }
  };

  createQuote = async (req, res, next) => {
    try {
      const newQuote = await this.quotesService.createQuote(req.body);
      res.status(201).json(newQuote);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = QuoteController;
