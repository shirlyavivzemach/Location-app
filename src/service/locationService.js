import * as axios from 'axios';

const ipData='4e4ed46732b21859ba8942101417de95b92450bb9583482339ce0368'

//The function call the data from the api
export function getLocation(){
    const headers = { Accept: 'application/json' };
    const location= axios.get(`https://api.ipdata.co/?api-key=${ipData}`,{headers})


    .then(res=>res.data)
    return location
}
    



