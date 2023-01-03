const {Airplane} = require('../models/index');

class AirplaneRepository
{
    async getAirplane(id)
    {
        try {
            const airplane = await Airplane.findByPk(id);
            // console.log(airplane);
            return airplane;
        } catch (error) {
            console.error(error);
            console.log("There is an Error in Airplane Repository");
            throw(error);
        }
    }
}

module.exports = AirplaneRepository;