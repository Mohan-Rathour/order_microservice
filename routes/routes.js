let orderController = require('../controller/orderController');

module.exports = (app) => {
    app.route('/getOrders').get(orderController.getOrders);
    app.route('/getOrderById/:id').get(orderController.getOrderByCustomerId);

}
