const {clientErrorCodes} = require('../utils/error-codes')
const validateCreateFlight = (req, res, next) => 
{
    if(!req.body.flightNumber || 
       !req.body.airplaneId ||
       !req.body.departureAirportId ||
       !req.body.arrivalAirportId ||
       !req.body.arrivalTime ||
       !req.body.departureTime ||
       !req.body.Price)
       {
        
            return res.status(clientErrorCodes.BAD_REQUEST).json({
                data: [],
                success: false,
                message: 'Invalid parameters to create flight',
                error: 'Missing mendotory parameter to create flight',  
            });
       }

       next();
}

module.exports = {
    validateCreateFlight,
}