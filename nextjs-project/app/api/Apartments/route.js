import mongoose from "mongoose";
import Apartment from "@/model/apartment";
import { NextResponse } from "next/server";
import fs from "node:fs";

export async function saveApartment(apartment) {
  try {
    //Split image name into parts separated by .
    const extension = apartment.image.name.split(".").pop();

    const fileName = `${apartment.email}${apartment.type}.${extension}`;

    //Allows to write to specific directory
    const stream = fs.createWriteStream(`public/images/${fileName}`);

    //First convert image into buffer
    const bufferedImage = await apartment.image.arrayBuffer();

    //Writes the buffer to the specified path
    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        throw new Error("Saving error image failed");
      }
    });

    console.log(bufferedImage);

    //Now to save the image path to the database;
    apartment.image = `/images/${fileName}`;

    console.log(apartment);

    const newApartment = {
      price: apartment.price,
      image: apartment.image,
      type: apartment.type,
      bedrooms: apartment.bedrooms,
      bathrooms: apartment.bathrooms,
      description: apartment.description,
      address: apartment.address,
      city: apartment.city,
      country: apartment.country,
      sellerEmail: apartment.email,
      sellerFirstName: apartment.firstName,
      sellerLastName: apartment.lastName,
      sellerPhone: apartment.phone,
    };
    //Create the new apartment
    const apartmentNew = await Apartment.create(newApartment);

    return NextResponse.json(
      { message: "Successfully created a new apartment" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export const getAllApartments = async () => {
  try {
    const apartments = await Apartment.find();
    return apartments;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const getApartmentDetails = async (id) => {
  try {
    const apartment = await Apartment.findById(id);
    return apartment;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 404 });
  }
};
