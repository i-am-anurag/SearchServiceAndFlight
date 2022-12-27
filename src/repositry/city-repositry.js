const {City} = require('../models/index');

class CityRepository
{
    async createCity({name}) {
        try{
            const city = await City.create({
                    name
                });
            return city;
        }
        catch(err)
        {
            console.log("Something went wrong when creating city");
            throw{err};
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
            return true;
        } catch (error) {
            console.log("Something went wrong when creating city");
            throw{error};
        }
    }

    async updateCity(cityId,data)
    {
        try {
            // The below approach also works but will not return updated object
            // if we are using Pg then returning: true can be used, else not
            // const city = await City.update(data,{
            //     where:{
            //         id: cityId
            //     },
            // });
            
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong when updating city");
            throw{error};
        }
    }

    async getCity(cityId)
    {
        try {
            const city = await City.findByPk(cityId);

            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
        
    }
}

module.exports = CityRepository;