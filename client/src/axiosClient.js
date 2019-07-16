let axios = require('axios');

var axiosClient = axios.create({
  baseURL: 'http://localhost:3000/api/'
});

export default axiosClient;
