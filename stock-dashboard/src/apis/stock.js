import axios from 'axios';


// API拉取 
export default axios.create({ baseURL: 'https://finnhub.io/api/v1/' });