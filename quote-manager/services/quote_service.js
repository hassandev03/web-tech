class QuoteService {
  constructor(quotesRepository) {
    this.quotesRepository = quotesRepository;
  }

  async getAllQuotes() {
    return await this.quotesRepository.findAll();
  }

  async getQuoteById(id) {
    return await this.quotesRepository.findById(id);
  }

  async createQuote(quoteData) {
    if (!quoteData.text || !quoteData.author) {
      throw new Error('Quote text and author are required');
    }
    return await this.quotesRepository.create(quoteData);
  }
}

module.exports = QuoteService;
