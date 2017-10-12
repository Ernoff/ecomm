// orders-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const orders = new Schema({
        products: [{ type: Schema.Types.ObjectId, ref: 'products', required: true }],
        customer: { type: Schema.Types.ObjectId, ref: 'users', required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    });

    return mongooseClient.model('orders', orders);
};