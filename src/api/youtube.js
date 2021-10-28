import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCOzKYcEwQYH_Ppgw6UrJVZag9_2mC-3mo'
    }
})