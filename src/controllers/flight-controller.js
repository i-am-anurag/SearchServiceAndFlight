const {FlightService} = require('../services/index');
const {SucessCodes} = require('../utils/error-codes')

const flightService = new FlightService();

const create = async function (req,res){
    try {
        const flightReuestData = {
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            Price:req.body.Price,
        }
        const flight = await flightService.createFlight(flightReuestData);
        // if(!flight.ok){
        //     throw new Error('Data is not get Successfully');
        // }
        return res.status(SucessCodes.CREATED).json({
            data: flight,
            success:true,
            message: 'flight created successfully',
            error:{},
        });
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
    }
}

const getAll = async function(req, res) {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SucessCodes.OK).json({
            data:response,
            success:true,
            message: 'fetched flights successfully',
            error:{},
        })
    } catch (error) {
       console.log(error);
       return res.status(500).json({
        data: {},
        success: false,
        message: 'Not able to fetch flights',
        err: error,
    });
  }
}

const getFlight = async(req,res)=>{
    try{
        const response = await flightService.getFlight(req.params.id);
        
        return res.status(SucessCodes.OK).json({
            data:response,
            success:true,
            message: 'fetched flights successfully',
            error:{},
        });
    }
    catch(error)
    {
        return res.status(500).json({
        data: {},
        success: false,
        message: 'Not able to fetch flights',
        err: error,
    });
    }
}

const update = async(req, res) => {
    try {
        const response = await flightService.updateFlight(req.params.id, req.body);

        return res.status(SucessCodes.OK).json({
            data:response,
            success:true,
            message: 'Update flights successfully',
            error:{},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update flight',
            err: error,
        });
    }
}

module.exports = {
    create,
    getAll,
    getFlight,
    update,
}