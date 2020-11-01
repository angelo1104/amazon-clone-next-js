import app from 'next-connect';
import cors from 'cors';
import {productDataStore} from "./productsData";

const handler = app()
.use(cors())
.get((req, res) => {
    res.json(productDataStore)
})

export default handler;