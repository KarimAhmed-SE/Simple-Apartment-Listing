import mongoose from "mongoose";

mongoose.connect(process.env.CONNECTION);
mongoose.Promise = global.Promise;

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

export default Apartment;
