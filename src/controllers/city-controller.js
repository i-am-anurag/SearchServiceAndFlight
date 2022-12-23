const {CityService} = require('../services/index');

const cityService = new CityService();

const create = async function(req,res)
{
    try 
    {
        const city = await cityService.createCity(req.body.city);
        return res.status(201).json({// for temporary reasons here we can set status code 201 later we will do some other stuff here
            data:city,
            success:true,
            message:"Succesfully Created City",
            err:{},
        });
    } catch (error) {
        console.log(error.message);
        return res.status(501).json({// for temporary reasons here we can set status code
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
        return res.status(200).json({// for temporary reasons here we can set status code 201 later we will do some other stuff here
            data:response,
            success:true,
            message:"Succesfully deleted City",
            err:{},
        });
    } catch (error) {
        console.log(error.message);
        return res.status(501).json({// for temporary reasons here we can set status code
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
        return res.status(200).json({// for temporary reasons here we can set status code 201 later we will do some other stuff here
            data:response,
            success:true,
            message:"Succesfully update City",
            err:{},
        });
    } catch (error) {
        console.log(error.message);
        return res.status(501).json({// for temporary reasons here we can set status code
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
        return res.status(200).json({// for temporary reasons here we can set status code 201 later we will do some other stuff here
            data:response,
            success:true,
            message:"Succesfully fetch City",
            err:{},
        });
    } catch (error) {
        console.log(error.message);
        return res.status(501).json({// for temporary reasons here we can set status code
            data:{},
            success:false,
            message:"Not able to get city",
            err:error,
        });
    }
}

module.exports = 
{
    create,
    destroy,
    update,
    get
}