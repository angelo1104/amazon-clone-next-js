import axios from "axios";

const productInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
});

export default productInstance;
