import axios from 'axios';

const authInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/auth`
});

export default authInstance;