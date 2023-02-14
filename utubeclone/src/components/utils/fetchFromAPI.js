import axios from "axios"



const base_url='https://youtube-v31.p.rapidapi.com'
const options = {
    url: base_url,
    params: {maxResults:"50"},
    headers: {
      'X-RapidAPI-Key': process.env.react_app_rapidapi_key,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

 
  export const fetchFromAPI=async(url)=>{
    const {data} = await axios.get(`${base_url}/${url}`,options) //what ever request we make it needs to start from the base url
    return data
  }