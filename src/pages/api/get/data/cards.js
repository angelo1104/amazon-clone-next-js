import app from 'next-connect';
import cors from 'cors';
import {cardData} from "./cardsData";

const handler = app()
.use(cors())
.get((req,res)=>{
    res.json(cardData);
});

export default handler