"use server";
import { saveApartment } from "@/app/api/Apartments/route";
import { redirect, useRouter } from "next/navigation";

export const createApartment = async (formData) => {
  const data = {
    type: formData.get("type"),
    description: formData.get("description"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    price: formData.get("price"),
    bedrooms: formData.get("bedrooms"),
    bathrooms: formData.get("bathrooms"),
    address: formData.get("address"),
    city: formData.get("city"),
    country: formData.get("country"),
    image: formData.get("imagePicker"),
  };

  const res = await saveApartment(data);

  if (!res.ok) {
    throw new Error("failed to create apartment");
  }

  redirect("/apartments");
};
