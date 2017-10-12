const products = require('./products/products.service.js');
const users = require('./users/users.service.js');
const orders = require('./orders/orders.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(products);
  app.configure(users);
  app.configure(orders);
};
