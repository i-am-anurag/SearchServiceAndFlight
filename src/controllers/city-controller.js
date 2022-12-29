const {CityService} = require('../services/index');

const cityService = new CityService();

const create = async function(req,res)
{
    try 
    {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Succesfully Created City",
            err:{},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create city",
            err:error,
        });
    }
}

//For delete we can use query parm DELETE -> /city/id
const destroy = async function(req,res)
{
    try
    {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Succesfully deleted City",
            err:{},
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete city",
            err:error,
        });
    }
}

//here we are sending patch request
const update = async function(req,res)
{
    try 
    {
        const response = await cityService.updateCity(req.params.id,req.body);//this contain city id and city data
        return res.status(200).json({
            data:response,
            success:true,
            message:"Succesfully update City",
            err:{},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({// for temporary reasons here we can set status code
            data:{},
            success:false,
            message:"Not able to update city",
            err:error,
        });
    }
}

//here we are sending get request 
const get = async function(req,res)
{
    try 
    {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Succesfully fetch City",
            err:{},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get city",
            err:error,
        });
    }
}

const getAll = async function(req, res)
{
    try {
        const cities = await cityService.getAllCities(req.query);//for temporary reason we left the parameter
        return res.status(200).json({
            data:cities,
            success:true,
            message:"Succesfully fetch All City",
            err:{},
        });
        return cities;
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get cities",
            err:error,
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll,
}