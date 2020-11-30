import axios from 'axios';

const stripeInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/payments`
});

export default stripeInstance;