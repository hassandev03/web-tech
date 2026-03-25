class QuoteRepository {
  constructor() {
    // Simulating a database with an in-memory array
    this.quotes = [
      { id: 1, text: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde' },
      { id: 2, text: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.', author: 'Thomas A. Edison' }
    ];
  }

  async findAll() {
    return this.quotes;
  }

  async findById(id) {
    return this.quotes.find(q => q.id === parseInt(id));
  }

  async create(quoteData) {
    const newQuote = {
      id: this.quotes.length + 1,
      text: quoteData.text,
      author: quoteData.author
    };
    this.quotes.push(newQuote);
    return newQuote;
  }
}

module.exports = QuoteRepository;
