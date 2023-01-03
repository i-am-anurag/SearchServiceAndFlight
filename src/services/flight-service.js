const {FlightRepository,AirplaneRepository} = require('../repositry/index');
const { compareTime } = require('../utils/helper');

class FlightService{
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data)
    {
        try 
        {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data,
                totalSeat:airplane.capacity});

            return flight;
        } catch (error) 
        {
            console.log("There is an error in Service Layer");
            throw {error};
        }
    }
}

module.exports = FlightService;