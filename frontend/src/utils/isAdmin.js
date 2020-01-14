let jwt_decode = require('jwt-decode');

export const isAdmin = () => {
    let token = localStorage.getItem('jwtToken');
    let decoded = jwt_decode(token);
    if (decoded.role === 'admin') { // expired token
        return true;
    }
    return false;
}