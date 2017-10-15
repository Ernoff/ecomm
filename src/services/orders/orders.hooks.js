const populate = require('feathers-populate-hook');


const orderSchema = {
  products: {
    service: 'products',
    f_key: '_id',
    query: {
      $select: ['name','price']
    }
  }
}
module.exports = {
  before: {
    all: [populate.compatibility()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [populate(orderSchema)],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
