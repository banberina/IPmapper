import { getHeader } from "../utils";
import config from '../config';
import axios from 'axios'

export default {
  getUsers: () =>
    axios.get(`${config.BASE_URL}/admin/users`, { headers: getHeader() }),

  updateUser: (email) =>
    axios.post(`${BASE_URL}/admin/users/${email}`, body, {
      headers: getHeader()
    }),

  deleteUser: (email) =>
    axios.delete(`${config.BASE_URL}/admin/users/${email}`, {
      headers: getHeader()
    })
};