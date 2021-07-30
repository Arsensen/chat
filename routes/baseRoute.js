const {Router} = require('express')
const {check, validationResult} = require('express-validator')

const router = Router()

router.post('/login', 
    [
        check('password', 'Minimum password length is 4').isLength({min: 4})
    ],
    async(req, res)=>{
        try {
            console.log(req.body)
            const errors = validationResult(req)
            if(!errors.isEmpty()) return res.status(401).json({errors: errors.array(), message: 'Wrong login or password'})
            return res.status(201).json({message: 'User is created'})
        } catch (error) {
            console.log('LOGIN ERROR: ' + error)
        }
    }
)

router.post('/register', async(req, res)=>{
    try {
        
    } catch (error) {
        console.log('REGISTER ERROR: ' + error)
    }
})

module.exports = router