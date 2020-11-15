import axios from 'axios';

const stripeInstance = axios.create({
    baseURL: 'http://localhost:3001/payments'
});

export default stripeInstance;