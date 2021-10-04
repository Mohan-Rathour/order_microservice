let orderService = require("../services/orderService");

module.exports =  {
    getOrders: (req, res) => {
        return orderService.getOrders(req, res, (err, data)=> {
            if (err) return res.send(err);
            res.send(data);
        })
    },
    
    getOrderByCustomerId: (req, res) =>{
        return orderService.getOrderByCustomerId(req, res, (err, data)=> {
            if (err) return res.send(err);
            res.send(data);
        })
    }
}