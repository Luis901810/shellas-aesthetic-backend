
const { Reviews, Services } = require("../../db");


module.exports = async( req, res ) =>{
    try {
        const { userId } = req.body;

        const reviewsOptions = {
            where:{
                deletedAt: null
            },
            include:[{
                model: Services, 
                attributes: ["id", "name", "price"],
                }]
            
        }

        // filter por id 

        if(userId){
            reviewsOptions.where.userId = userId
        }

        //  obtener todas las rewies de user

        const allReviews = await Reviews.findAll(reviewsOptions)
        res.status(200).json({reviews: allReviews})
        
    } catch (error) {
        res.status(500).json({ error: error.message})
        
    }
}