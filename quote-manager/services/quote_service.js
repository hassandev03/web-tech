const createQuoteService = (quotesRepository) => {
  const getAllQuotes = async () => {
    return await quotesRepository.findAll();
  };

  const getQuoteById = async (id) => {
    return await quotesRepository.findById(id);
  };

  const createQuote = async (quoteData) => {
    if (!quoteData.text || !quoteData.author) {
      throw new Error('Quote text and author are required');
    }
    return await quotesRepository.create(quoteData);
  };

  return {
    getAllQuotes,
    getQuoteById,
    createQuote
  };
};

module.exports = createQuoteService;
