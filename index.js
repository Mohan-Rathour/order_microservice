let express = require('express');
let app = express();
let port = process.env.PORT || 8080;
let routes = require('./routes/routes');

routes(app);

app.listen(port, function(){
    console.log("Order Application is running on port :" + port);
})



