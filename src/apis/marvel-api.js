import axios from "axios";
const ts = process.env.REACT_APP_TIMESTAMP
const publicApiKey = process.env.REACT_APP_API_KEY 
const hash = process.env.REACT_APP_HASH

const marvelApi=axios({
    url: `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicApiKey}&hash=${hash}`,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
       }
})

export default marvelApi;
