import axios from "axios"


function api(){
    const storedToken = localStorage.getItem("authToken");
    axios.defaults.headers.Authorization = `Bearer ${storedToken}`;

    return axios.defaults.headers.Authorization ;
}

export default api;