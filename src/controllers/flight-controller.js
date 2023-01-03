const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async function (req,res){
    try {
        const flight = await flightService.createFlight(req.body);
        if(!res.ok){
            throw new Error('Data is not get Successfully');
        }
        return res.status(201).json({
            data: flight,
            success:true,
            message: 'flight created successfully',
            error:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create city",
            err:error,
        });
    }
}

module.exports = {
    create,
}