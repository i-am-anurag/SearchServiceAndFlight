const {FlightRepository,AirplaneRepository} = require('../repositry/index');
const {compareTime} = require('../utils/helper');

class FlightService{
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data)
    {
        try 
        {
            if(!compareTime(data.arrivalTime,data.departureTime))
            {
                throw {error:"Arrival Should Be Less than departure Time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flightData = {...data,totalSeats:airplane.capacity};
            const flight = await this.flightRepository.createFlight({...data,
                totalSeat:airplane.capacity});

            return flight;
        } catch (error) 
        {
            console.error(error);
            console.log("There is an error in Service Layer");
        }
    }
}

module.exports = FlightService;