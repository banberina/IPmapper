import { getHeaders } from "../utils/getHeaders";
import config from '../config';
import axios from 'axios'

export default {

  /* ASN Collection*/

  getASN: () =>
    axios.get(`${config.BASE_URL}/admin/asn`, { headers: getHeaders() }),

  createASN: () =>
    axios.post(`${BASE_URL}/admin/asn`, body, {
      headers: getHeaders()
    }),

  updateASN: (id) =>
    axios.put(`${BASE_URL}/admin/asn/${id}`, body, {
      headers: getHeaders()
    }),

  deleteASN: (email) =>
    axios.delete(`${config.BASE_URL}/admin/asn/${id}`, {
      headers: getHeaders()
    }),

  /* Geo Collection*/

  getGeo: () =>
    axios.get(`${config.BASE_URL}/admin/geo`, { headers: getHeaders() }),

  createGeo: () =>
    axios.post(`${BASE_URL}/admin/geo`, body, {
      headers: getHeaders()
    }),

  updateGeo: (id) =>
    axios.put(`${BASE_URL}/admin/geo/${id}`, body, {
      headers: getHeaders()
    }),

  deleteGeo: (id) =>
    axios.delete(`${config.BASE_URL}/admin/geo/${id}`, {
      headers: getHeaders()
    }),

  /* GeoIPv6 Collection*/

  getGeoIPv6: () =>
    axios.get(`${config.BASE_URL}/admin/geoipv6`, { headers: getHeaders() }),

  createGeoIPv6: () =>
    axios.post(`${BASE_URL}/admin/geoipv6`, body, {
      headers: getHeaders()
    }),

  updateGeoIPv6: (id) =>
    axios.put(`${BASE_URL}/admin/geoipv6/${id}`, body, {
      headers: getHeaders()
    }),

  deleteGeoIPv6: (id) =>
    axios.delete(`${config.BASE_URL}/admin/geoipv6/${id}`, {
      headers: getHeaders()
    }),

  /* Proxy Collection*/

  getProxy: () =>
    axios.get(`${config.BASE_URL}/admin/proxy`, { headers: getHeaders() }),

  createProxy: () =>
    axios.post(`${BASE_URL}/admin/proxy`, body, {
      headers: getHeaders()
    }),

  updateProxy: (id) =>
    axios.put(`${BASE_URL}/admin/proxy/${id}`, body, {
      headers: getHeaders()
    }),

  deleteProxy: (id) =>
    axios.delete(`${config.BASE_URL}/admin/proxy/${id}`, {
      headers: getHeaders()
    }),

  /* Users Collection */

  getUsers: () =>
    axios.get(`${config.BASE_URL}/admin/users`, { headers: getHeaders() }),

  updateUser: (email) =>
    axios.put(`${BASE_URL}/admin/users/${email}`, body, {
      headers: getHeaders()
    }),

  deleteUser: (email) =>
    axios.delete(`${config.BASE_URL}/admin/users/${email}`, {
      headers: getHeaders()
    })
};