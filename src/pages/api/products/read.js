import app from "next-connect";
import cors from "cors";
import Product from "../../../../../amazon-clone-nextjs-server/mongoDB/Product";
import databaseMiddleware from "../../../mongoDB/connect-middleware";

const handler = app()
  .use(cors(), databaseMiddleware)
  .post((req, res) => {
    const { filter } = req.body;

    Product.findOne({ ...filter }, (error, product) => {
      if (error) {
        console.log(error);
        res.status(500).json({
          message: "Internal server error.",
        });
      } else if (!product) {
        res.status(500).json({
          message: "No product found.",
        });
      } else {
        res.status(200).json({
          message: "Success",
          product: product,
        });
      }
    });
  });

export default handler;
