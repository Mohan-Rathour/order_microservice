let orderService = require("../controller/orderController");
let _ = require('underscore');

const data = [
    {
        customerId:'60fc5c01e75fbe2ba644c9e5',
        orders: [{
            orderId: 1,
            orderItem: [
                {
                "name": "Iphone",
                "price": "$500",
                "createdDate": new Date()
                },
                {
                "name": "mask n95",
                "price": "$5",
                "createdDate": new Date()
                }
            ]
        }],
        createdDate: new Date(),
    },
    {
    customerId:'60fc5d172165fb2d89e25cd9',
    orders:[{
            orderId: 2,
            orderItem: [
                {
                    "name": "Mackbook",
                    "price": "$5000",
                    "createdDate": new Date()
                },
                {
                    "name": "Senitizer",
                    "price": "$5",
                    "createdDate": new Date()
                }
            ],
            createdDate: new Date(),
        }]
    }
];

module.exports = {
    getOrders: (req, res) => {
        console.log("in order services ---")
        res.send(data);
    },
    getOrderByCustomerId: (req, res) => {
        let id = req.params.id ? req.params.id : null;
        if (id) {
            let orderData = _.filter(data, d =>{
                if(d.customerId == id){
                    return d;
                }
            });
            res.send(orderData);

        }

    }

}