import axios from "axios";

const ordersInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/orders`
});

export default ordersInstance;