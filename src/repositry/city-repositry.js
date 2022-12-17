const {City} = require('../models/index');

class CityRepository{
    async createCity({name, city}) 
    {
        try
        {
            const city = await City.create({name})
            return city;
        }
        catch(err)
        {
            throw new Error(err);
        }
    }

    async deleteCity({cityId}) 
    {
        try
        {
            await City.destroy({
                where: {id: cityId},
            });
        }
        catch(err)
        {
            throw new Error(err);
        }
    }
}

module.exports = CityRepository;