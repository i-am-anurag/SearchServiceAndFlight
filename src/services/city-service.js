const {CityRepository} = require('../repositry/index');

class CityService{
    constructor()
    {
        this.cityRepository = new CityRepository();
    }

    async createCity(city)
    {
        try {
            const city = await this.cityRepository.createCity(city);
            return city;
        } 
        catch (error) {
            console.log("Something Went Wrong");
            throw(error);
        }
    } 
    
    async updateCity(cityId,data)
    {
        try {
            const city = await this.cityRepository.updateCity(cityId,data);

            return city;
        } 
        catch (error) {
            console.log("Something Went Wrong");
            throw(error);
        }
    }

    async delete(cityId)
    {
        try 
        {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } 
        catch (error) 
        {
            console.log("Something Went Wrong");

            throw(error);
        }
        
    }

    async getCity(cityId)
    {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            
        }
    }
}


module.exports = CityService;