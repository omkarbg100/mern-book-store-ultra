import jwt from 'jsonwebtoken'
import 'dotenv/config'
const JWT_SECRET = process.env.JWT_SECRET_KEY


const verifyAdminToken =  (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    // console.log(token)

    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided' });
    }
    console.log(JWT_SECRET)
    jwt.verify(token, JWT_SECRET, (err, user) => {
        
        console.log(err);
        if (err) {
            return res.status(403).json({ message: 'Invalid credientials' });
        }
        req.user = user;
        next();
    })

}

export default verifyAdminToken;