const { loginValidate } = require("../helper/loginValidate");
const UserData = require("../model/usserModel");

const login = async (req , res) => {
    try {
        const userdata = req.body
        const validateResult = loginValidate(userdata)
        if(!validateResult.status) {
            res.status(400).json(validateResult)
        }
        else {
            const user = await UserData.findOne({Email : userdata.Email});
            // const user = await UserData.checkUser(Email);
            if(!user) {
                res.status(404).json({
                    status : false ,
                    message : 'User is not registered'
                })
            }
            else {
                if(await user.isValidPassword(userdata.Password)){
                    res.status(200).json({
                        status : true ,
                        message : 'Login Success' ,
                        userData : user
                    })
                }
                else {
                    res.status(400).json({
                        status : false ,
                        message : 'Invalid Email/Password'
                    })
                }
            }
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({
            status: false,
            message: 'Something Went Wrong'
        });
    }
}

module.exports = login