const {Flights} = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

    #createFilter(data) 
    {
        let filter = {};
        if(data.arrivalAirportId)
        {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId)
        {
            filter.departureAirportId = data.departureAirport;
        }

        if(data.minPrice && data.maxPrice)
        {
            Object.assign(filter,{
                [Op.and]:[
                    {price: {[Op.lte]:data.maxPrice} },
                    {price: {[Op.gte]:data.minPrice} }
                ]
            });
        }

        if(data.minPrice)
        {
            Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
        }

        if(data.maxPrice)
        {
            Object.assign(filter,{price:{[Op.lte]:data.maxPrice}});
        }
        console.log(filter);
        return filter;
    }

    async createFlight(data) {
        try {
            console.log(data);
            const flight = await Flights.create(data);
            console.log(flight);
            return flight;
        } catch (error) {
            console.error(error);
            console.log("Something went wrong in flight repository");
            throw {error};
        }
    }

    async getFlight(flightId) 
    {
        try {
            const flight = await Flights.findByPk(flightId);
            console.log(`Flight Data is:${flight}`);

            return flight;
        } catch (error) {
            console.error(error);
            console.log("Something went wrong in flight repository");
            throw error;
        }
    }

    async getAllFlight(filter)
    {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll(
                {
                    where:filterObject
                }
            );
            return flight;
        } catch (error) {
            console.error(error);
            console.log("Something went wrong in flight repository");
            throw {error};
        }
    }

    async updateFlight(flightId,data){
        try {
            await Flights.update(data,{
                where:{
                    id:flightId,
                }
            });
            
            return true;
        } catch (error) {
            console.log("Something went wrong in flight repository");
            throw {error}; 
        }
    }
}

module.exports = FlightRepository;