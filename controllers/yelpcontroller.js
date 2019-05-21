var express = require('express');
var router = express.Router(); 
const axios = require('axios');

router.get('/:city/:state/:pricingInfo', function (req, res) {

    axios({
        method: 'get',
        url: `https://api.yelp.com/v3/businesses/search?location=${req.params.city}${req.params.state}&price=${req.params.pricingInfo}`,
        headers: {'Authorization': 'Bearer PBitg7PCTHdjYJcN0zKAjIa5fDLfgFBWdr_c_WaJ3Il0x88cBjvxgSM6buetKG-xXuWAHtkVJvaYbNIcKpt8CIJr8F1IZeO3JNZPUvRcL1N3vGZTBPI6MLjHYHDjXHYx',
        'Content-Type': 'application/json'}
        }
        ).then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    })

});


module.exports = router;