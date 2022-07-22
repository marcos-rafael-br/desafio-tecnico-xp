import pkg from 'jsonwebtoken';
const {sign, verify} = pkg;
import HttpException from "../shared/http.exception.js";


const TOKEN_SECRET = process.env.TOKEN_SECRET || 'sonhogrande';

const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256'
};
const generateJWTToken = (user) => 
    sign({user}, TOKEN_SECRET, jwtConfig);

const authenticateToken = async (token) => {
    if(!token){
        throw new HttpException(401, "jwt malformed");
    }

    try {
        const validate = verify(token, TOKEN_SECRET);
        return validate;
    } catch(error){
        throw new HttpException(401, "jwt malformed");
    }
}

export { generateJWTToken, authenticateToken }