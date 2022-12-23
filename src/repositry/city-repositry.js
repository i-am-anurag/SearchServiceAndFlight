const {City} = require('../models/index');

class CityRepository
{
    async createCity({name}) 
    {
        try
        {
            const city = await City.create({
                    name
                });

            return city;
        }
        catch(err)
        {
            console.log("Something went wrong when creating city");
            throw(err);
        }
    }

    async deleteCity(cityId) 
    {
        try 
        {
            await City.destroy({
                where:{
                    id: cityId
                }
            });
        } catch (error) {
            console.log("Something went wrong when creating city");
            throw(error);
        }
    }

    async updateCity(cityId,data)
    {
        try {
            const city = await City.update(data,{
                where:{
                    id: cityId
                }
            });
            
            return city;
        } catch (error) {
            console.log("Something went wrong when updating city");
            throw(error);
        }
    }

    async getCity(cityId)
    {
        try {
            const city = await City.findByPk(cityId);

            return city;
        } catch (error) {
            
        }
        
    }
}

module.exports = CityRepository;