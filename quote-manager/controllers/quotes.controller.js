const createQuoteController = (quotesService) => {
  const getAllQuotes = async (req, res, next) => {
    try {
      const quotes = await quotesService.getAllQuotes();
      res.json(quotes);
    } catch (error) {
      next(error);
    }
  };

  const getQuoteById = async (req, res, next) => {
    try {
      const quote = await quotesService.getQuoteById(req.params.id);
      if (!quote) {
        return res.status(404).json({ message: 'Quote not found' });
      }
      res.json(quote);
    } catch (error) {
      next(error);
    }
  };

  const createQuote = async (req, res, next) => {
    try {
      const newQuote = await quotesService.createQuote(req.body);
      res.status(201).json(newQuote);
    } catch (error) {
      next(error);
    }
  };

  return {
    getAllQuotes,
    getQuoteById,
    createQuote
  };
};

module.exports = createQuoteController;
