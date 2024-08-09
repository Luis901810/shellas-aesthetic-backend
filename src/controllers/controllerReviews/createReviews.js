const { Reviews } = require("../../db");

module.exports = async ( req, res ) =>{
    
    try {
        const { serviceId, comment, rating, userId } = req.body;

        const reviews = await Reviews.create({
            serviceId,
            comment,
            rating,
            userId,
            reviewDate:new Date(),
        })

        res.status(200).json({reviews})

        
    } catch (error) {

        res.status(500).json({ error: error.message})
        
    }
}