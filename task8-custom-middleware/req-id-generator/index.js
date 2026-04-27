module.exports = (req, res, next) => {
  req.id = Math.random().toString(36).substring(2, 9); // Generate a random 7-char ID
  next();
};
