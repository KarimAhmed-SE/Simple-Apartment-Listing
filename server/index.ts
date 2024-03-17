import express, { Request, Response } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:8081" }));

const connection: string = process.env.CONNECTION!;

mongoose
  .connect(connection)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const apartmentSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    bedrooms: Number,
    bathrooms: Number,
    address: {
      type: String,
      required: true,
    },
    city: String,
    country: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: String,
    sellerEmail: {
      type: String,
      required: true,
    },
    sellerPhone: {
      type: String,
      required: true,
    },
    sellerFirstName: {
      type: String,
      required: true,
    },
    sellerLastName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Apartment =
  mongoose.models.Apartment || mongoose.model("Apartment", apartmentSchema);

app.get("/apartments", async (req: Request, res: Response) => {
  try {
    const apartments = await Apartment.find();
    res.status(200).json(apartments);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

app.get("/apartments/:id", async (req: Request, res: Response) => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    res.status(200).json(apartment);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

app.post("/apartments", async (req: Request, res: Response) => {
  const apartment = new Apartment({
    price: req.body.price,
    type: req.body.type,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    description: req.body.description,
    image: req.body.image,
    sellerEmail: req.body.sellerEmail,
    sellerPhone: req.body.sellerPhone,
    sellerFirstName: req.body.sellerFirstName,
    sellerLastName: req.body.sellerLastName,
  });

  try {
    await apartment.save();
    res.status(201).json(apartment);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});
