let baseUrl;
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:4000'
} else {
    baseUrl = 'https://ipmapper.herokuapp.com'
}

module.exports = {
    BASE_URL: baseUrl
}