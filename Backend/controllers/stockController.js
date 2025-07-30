let transactions = [];

exports.buyStock = (req, res) => {
  const { symbol, quantity, price } = req.body;

  if (!symbol || !quantity || !price) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const tx = {
    id: transactions.length + 1,
    type: 'BUY',
    symbol,
    quantity,
    price,
    date: new Date()
  };

  transactions.push(tx);
  res.status(201).json({ message: 'Stock bought successfully', transaction: tx });
};

exports.sellStock = (req, res) => {
  const { symbol, quantity, price } = req.body;

  if (!symbol || !quantity || !price) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const tx = {
    id: transactions.length + 1,
    type: 'SELL',
    symbol,
    quantity,
    price,
    date: new Date()
  };

  transactions.push(tx);
  res.status(201).json({ message: 'Stock sold successfully', transaction: tx });
};

exports.getTransactionHistory = (req, res) => {
  const sorted = transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  res.json(sorted);
};