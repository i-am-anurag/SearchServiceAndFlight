const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(200).json({
            data: response,
            success: true,
            error: {},
            message: "create airport succesfully",
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            error: err,
            message: "Cannot create airport",
        })
    }
}

// const destroy = async (req, res) =>  {
//     try {
//         const response = await airportService.destroy(req.body);
//         return res.status(200).json({
//             data: response,
//             success: true,
//             error: {},
//             message: "create airport succesfully",
//         })
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({
//             data: {},
//             success: false,
//             error: err,
//             message: "Cannot create airport",
//         })
//     }
// }

module.exports = {
    create,
}
