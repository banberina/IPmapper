import config from '../config'
import axios from 'axios'

export default {

    current: () =>
        axios.get(`${config.BASE_URL}/current`),

    asn: (ip) =>
        axios.get(`${config.BASE_URL}/asn/${ip}`),

    geo: (ip) =>
        axios.get(`${config.BASE_URL}/geo/${ip}`),

    proxy: (ip) =>
        axios.get(`${config.BASE_URL}/proxy/${ip}`),

}