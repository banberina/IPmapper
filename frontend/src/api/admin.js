import { getHeaders } from "../utils/getHeaders";
import config,{ BASE_URL } from '../config';
import axios from 'axios'

export default {

  /* ASN Collection*/

  getASN: body =>
    axios.get(`${config.BASE_URL}/admin/asn`, body, {headers: getHeaders(),
}),
createASN: body =>
  axios.post(`${BASE_URL}/admin/asn`, body, {
    headers: getHeaders()
  }),

  updateASN: (id, body) =>
    axios.put(`${BASE_URL}/admin/asn/${id}`, body, {
      headers: getHeaders()
    }),

    deleteASN: (id) =>
      axios.delete(`${config.BASE_URL}/admin/asn/${id}`, {
        headers: getHeaders()
      }),
      /* Geo Collection*/

      getGeo: body =>
        axios.get(`${config.BASE_URL}/admin/geo`, body, { headers: getHeaders() }),

        createGeo: body =>
          axios.post(`${BASE_URL}/admin/geo`, body, {
            headers: getHeaders()
          }),

          updateGeo: (body,id) =>
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

                createGeoIPv6: (body) =>
                  axios.post(`${BASE_URL}/admin/geoipv6`, body, {
                    headers: getHeaders()
                  }),

                  updateGeoIPv6: (body,id) =>
                    axios.put(`${BASE_URL}/admin/geoipv6/${id}`, body, {
                      headers: getHeaders()
                    }),

                    deleteGeoIPv6: (id) =>
                      axios.delete(`${config.BASE_URL}/admin/geoipv6/${id}`, {
                        headers: getHeaders()
                      }),

                      /* Proxy Collection*/

                      getProxy: body =>
                        axios.get(`${config.BASE_URL}/admin/proxy`, body,{ headers: getHeaders() }),

                        createProxy: body =>
                          axios.post(`${BASE_URL}/admin/proxy`, body, {
                            headers: getHeaders()
                          }),

                          updateProxy: (id,body) =>
                            axios.put(`${BASE_URL}/admin/proxy/${id}`, body, {
                              headers: getHeaders()
                            }),

                            deleteProxy: (id) =>
                              axios.delete(`${config.BASE_URL}/admin/proxy/${id}`, {
                                headers: getHeaders()
                              }),

                              /* Users Collection */

                                updateUser: (email,body) =>
                                  axios.put(`${BASE_URL}/admin/users/${email}`, body, {
                                    headers: getHeaders()
                                  }),

                                  deleteUser: (email) =>
                                    axios.delete(`${config.BASE_URL}/admin/users/${email}`, {
                                      headers: getHeaders()
                                    })
};