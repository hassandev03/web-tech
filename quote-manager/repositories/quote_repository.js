// Simulating a database
let quotes = [
  { id: 1, text: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde' },
  { id: 2, text: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.', author: 'Thomas A. Edison' }
];

const findAll = async () => {
  return quotes;
};

const findById = async (id) => {
  return quotes.find(q => q.id === parseInt(id));
};

const create = async (quoteData) => {
  const newQuote = {
    id: quotes.length + 1,
    text: quoteData.text,
    author: quoteData.author
  };
  quotes.push(newQuote);
  return newQuote;
};

module.exports = {
  findAll,
  findById,
  create
};
